$(function(){
	$("#header").on("click",".rigister_btn",function(){
		deleteCookie("loginState")
		 window.location.reload()
	})
	$("#header").on("click",".login_btn",function(){
		alert('跳转我的美西页面')
	})
	$("#header").on("click",".register",function(){
		 window.location.href="../html/register.html"
	})
	$("#header").on("click",".login",function(){
		window.location.href="../html/login.html"
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

	$("#header").on("mouseover",".cart",function(){
		$(this).css({"background":"#fff","border":"1px solid #ccc","border-bottom":"0"})
		$(this).find(".cart_box").stop().show();	
	})
	$("#header").on("mouseout",".cart",function(){
		$(this).css({"background":"#f4f4f4","border":"1px solid #f4f4f4","border-bottom":"0"})
		$(this).find(".cart_box").stop().hide();
	})
	$("#header").on("click",".cart .cart_btn",function(){
		window.location.href = "../html/cart.html"
	})	
	$("#header").on("click",".cart .cart_box .jiesuan input ",function(){
		window.location.href = "../html/cart.html"
	})	
	
	
})