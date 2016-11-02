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

	$("#userinfor").on("click",".input6 input",function(){
		console.log($("#userinfor .write .input1 input").val())
		if($("#userinfor .write .input1 input").val()!=""&&$("#userinfor .write .input3 input").val()!=""&&$("#userinfor .write .input4 input").val()!=""){
			$("#userinfor .showyourinfor .adress .username").html($("#userinfor .write .input1 input").val())
			$("#userinfor .showyourinfor .adress .userphone").html($("#userinfor .write .input4 input").val())
			$("#userinfor .showyourinfor .adress .useradress").html($("#userinfor .write .input2 .select1").val()+","+$("#userinfor .write .input2 .select2").val()+","+$("#userinfor .write .input2 .select3").val()+","+$("#userinfor .write .input3 input").val())
			$("#userinfor .write").hide();
			$("#userinfor .showyourinfor").show();
		}
	})
	
	
	
	$("#paymethod").on('click',".bank",function(){
		$("#paymethod .payinbank").animate({"height":'200px'})
		$("#paymethod .payinstore").animate({"height":'35px'})

	})
	$("#paymethod").on('click',".store",function(){
		$("#paymethod .payinbank").animate({"height":'35px'})
		$("#paymethod .payinstore").animate({"height":'370px'})

	})
	$("#paymethod").on('click',".online",function(){
		$("#paymethod .payinbank").animate({"height":'35px'})
		$("#paymethod .payinstore").animate({"height":'35px'})

	})
	$("#paymethod").on('click',".quick",function(){
		$("#paymethod .payinbank").animate({"height":'35px'})
		$("#paymethod .payinstore").animate({"height":'35px'})
	})
	
	$("#paymethod").on('click',"input",function(){
		$(this).parent().parent().css("background","#eee").siblings().css("background","#fff")	
	})
	
	$("#package").on("click","input",function(){
		$(this).parent().parent().animate({"height":'135px'},300).siblings().animate({"height":'35px'},300)
		$(this).parent().parent().css("background","#f5f5f5").siblings().css("background","#fff")
	})
	
	
	var cookie = document.cookie;
	var arr = cookie.split(";")
	var arr2=[]
	var arr3 =[]
	var arr4 =[]
	for(var i =0; i<arr.length;i++){
		arr2.push(arr[i].split("="))
	}
	for(var i =0; i<arr2.length;i++){
		if(!isNaN(arr2[i][0])){
			arr3.push(arr2[i][1])
		}
	}


	$.ajax({
		url:"../html/watchDetail.json",
		success:function(data){
			var mydata = data.data;
			var str1 = "";
			var money = 0;
			for(var j in arr3){
				for(var i in mydata){
					if(Number(arr3[j])==mydata[i].id){
						money += parseInt(mydata[i].price2)*Number(getCookie('product'+mydata[i].id));
						str1+=	'<ul>'
						str1+=		'<li><img src="'+ mydata[i].img+'"/></li>'
						str1+=		'<li>'+mydata[i].name1+mydata[i].name2+'</li>'
						str1+=		'<li>'+getCookie('product'+mydata[i].id)+'</li>'
						str1+=		'<li>'+mydata[i].price2+'</li>'
						str1+=		'<li>'+Number(mydata[i].price2)*Number(getCookie('product'+mydata[i].id))+'.00</li>'
						str1+=	'</ul>'
					}
				}
			}
			setCookie("TotalPrice",money)
			$('#SureYourOrder.w .table1').after(str1)
			$('#SureYourOrder .allinformation .contain .table2 .TheTotal').html('￥'+money+".00")
		}
	})
	
	$("#SureYourOrder").on("click",'.allinformation .thelastsure .nowtopay',function(){
		window.location.href = "cart03.html"
	})
	
	
	
	
	
	
	
	
	
	
	
	
})