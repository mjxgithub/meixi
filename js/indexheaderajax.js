$(function(){
	var cookiea = document.cookie;
//	console.log(cookiea);
	var array1 = cookiea.split(";")
//	console.log(array1);
	var array2=[]
	var array3 =[]
	var array4 =[]
	for(var i =0; i<array1.length;i++){
		array2.push(array1[i].split("="))
	}
//	console.log(array2)
	for(var i =0; i<array2.length;i++){
		if(!isNaN(array2[i][0])&&array2[i][1]!=null){
			array3.push(array2[i][1])
		}else{
			array4.push(array2[i][1])
		}
	}
	//console.log(array3)
	if(!isNaN(array3[0])&&array3.length!=0){
		$("#header .w .cart .cart_box .jiesuan").show();
		$.ajax({
			url:"html/indexcart.json",
			success:function(data){
				var mydata = data.data;
				var stra = "";
				var money = 0;
				var Totalcount = 0;
				for(var m = array3.length-1;m>=0;m--){
					for(var n in mydata){
						if(Number(array3[m])==mydata[n].id){
							var count = Number(getCookie('product'+mydata[n].id))
							Totalcount +=count;
							money += Number(mydata[n].price2) * count;
							for(var y =0; y<count; y++){
							 	stra += '<div class="cartshow">'
								stra += 	'<img src="'+mydata[n].img+'"/>'
								stra += 	'<p>'+mydata[n].name1+'</p>'
								stra += 	'<p>'+mydata[n].name2+'</p>'
								stra += 	'<p>'+mydata[n].price2+'</p>'
								stra += 	'<span productid="'+mydata[n].id+'" productprice="'+mydata[n].price2+'" class="remove">×</span>'
								stra += '</div>'
							}
						}
					}	
				}
				$("#header .w .cart .cart_box .showProduct").append(stra)
				$("#header .w .cart .cart_btn .count").text(Totalcount)
				$('#header .w  .cart .cart_box .jiesuan .allprice').html('￥'+money)
				
				
				$("#header").on("click",".cart .cart_box .showProduct .cartshow .remove",function(){
					var productid = Number($(this).attr('productid'));
					var productprice = Number($(this).attr('productprice'))
					setCookie("TotalCount",Number(getCookie('TotalCount'))-1)
					setCookie('TemporaryMoney',Number(getCookie('TemporaryMoney'))-productprice)
					var count = Number(getCookie('product'+productid))
					count--;
					if(count == 0){
						deleteCookie(productid)
						deleteCookie('product'+productid)
					}else{
						setCookie('product'+productid,count)
					}
				
					$(this).parents(".cartshow").hide()
					if(Number(getCookie("TotalCount")) == 0){
						deleteCookie('TemporaryMoney')
					//	$('#header .cart .cart_box .showProduct').hide();
						$('#header .cart .cart_box .jiesuan').hide();
					}
					$("#header .w .cart .cart_btn .count").text(getCookie('TotalCount'))
					$('#header .w  .cart .cart_box .jiesuan .allprice').html('￥'+getCookie('TemporaryMoney'))
				})
				
				
				
			}
		})
	}
})
