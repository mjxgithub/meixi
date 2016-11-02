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

	$("#successful p span").html("￥"+getCookie("TotalPrice")+".00")
	$("#choosepaytype .label1 span").html("￥"+getCookie("TotalPrice")+".00")
	
	$("#banktype .bank_choose").click(function(){
		$(this).find(".chosed").show();
		$(this).siblings().find(".chosed").hide();
	})
	
	$("#banktype .topay input").click(function(){
		alert("支付成功！")
	})
	
})