$(function(){
	$("#header").on("click",".rigister_btn",function(){
		deleteCookie("loginState")
		 window.location.reload()
	})
	$("#header").on("click",".login_btn",function(){
		alert('跳转我的美西页面')
	})
	$("#header").on("click",".order_btn",function(){
		alert("跳转订单查询页")
	})
	$("#header").on("mouseover",".attention",function(){
		$(this).find(".wei_xin").stop().show();
	})
	$("#header").on("mouseout",".attention",function(){
		$(this).find(".wei_xin").stop().hide();
	})



	var cookie = document.cookie;
	//console.log(cookie);
	var arr = cookie.split(";")
	//console.log(arr);
	var arr2=[]
	var arr3 =[]
	var arr4 =[]
	for(var i =0; i<arr.length;i++){
		arr2.push(arr[i].split("="))
	}
//	console.log(arr2)
	for(var i =0; i<arr2.length;i++){
		if(!isNaN(arr2[i][0])&&arr2[i][1]!=null){
			arr3.push(arr2[i][1])
		}else{
			arr4.push(arr2[i][1])
		}
	}
	//console.log(arr3)
	if(!isNaN(arr3[0])&&arr3.length!=0){
			$('#content.w .zhezhao').hide();
			$('#content.w .pay').show();
			$('#content.w table').show();
			$('#content.w .success').show();
			$.ajax({
				url:"../html/watchDetail.json",
				success:function(data){
					var mydata = data.data;
					var str1 = "";
					var money = 0;
					for(var j in arr3){
						for(var i in mydata){
							if(Number(arr3[j])==mydata[i].id){
								var count = Number(getCookie('product'+mydata[i].id))
								$('#content.w .success').html('成功将<b>'+ mydata[i].name2+'*'+count+'</b>加入购物车');
								money += parseInt(mydata[i].price2) * count;
								for(var x =0; x<count; x++){
									str1+=	'<ul>'
									str1+=		'<li><img src="'+ mydata[i].img+'"/></li>'
									str1+=		'<li>'+mydata[i].name1+mydata[i].name2+'</li>'
									str1+=		'<li>1</li>'
									str1+=		'<li>￥'+mydata[i].price2+'</li>'
									str1+=		'<li class="teshu"><a class="shoucang" href="javascript:;">移至收藏</a><a class="delete" productid="'+mydata[i].id+ '"productprice="'+mydata[i].price2+'" href="javascript:;">删除商品</a></li>'
									str1+=	'</ul>'
								}
							}
						}
						
					}
					$('#content.w table').after(str1)
					$('#content.w .pay p span.totalPrice').html(money)
				}
			})
	}else{
		$('#content.w .zhezhao').show();
		$('#content.w .pay').hide();
		$('#content.w table').hide();
		$('#content.w .success').hide();		
	}

	
	
	$("#content").on("click","ul li .delete",function(){
		if(confirm("确定要删除该商品吗？")){
			var productid = Number($(this).attr('productid'))
			var productprice = Number($(this).attr('productprice'))
			var oldmoney = Number($('#content.w .pay p span.totalPrice').html())
			$('#content.w .pay p span.totalPrice').html(oldmoney-productprice)
			setCookie("TotalCount",getCookie('TotalCount')-1)
			setCookie('TemporaryMoney',getCookie('TemporaryMoney')-productprice)
			var count = getCookie('product'+productid)
			count--;
			if(count == 0){
				deleteCookie(productid)
				deleteCookie('product'+productid)
			}else{
				setCookie('product'+productid,count)
			}
			$(this).parents("ul").hide()
			if(getCookie("TotalCount") ==0){
				deleteCookie('TemporaryMoney')
				$('#content.w .zhezhao').show();
				$('#content.w .pay').hide();
				$('#content.w table').hide();
				$('#content.w .success').hide();
			
			}
		}
	})
	
	$("#content").on('click',".pay input",function(){
		window.location.href = "cart02.html";
	})
	
	
	
	
	
	
})