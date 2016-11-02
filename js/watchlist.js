$(function(){
	//tab选项卡
	$("#logo.w .ul1>li").hover(function(){
		$(this).find("div.tab").show()
		$(this).css("background","#8e0c3a")
	},function(){
		$(this).find("div.tab").hide()
		$(this).css("background","#fff")
	})
	
	
	var flag1 = false;
	var flag2 = false;
	$("#WatchPage .WatchStyle .stylethree .bg span").click(function(){
		flag1 = !flag1
		if(flag1){
			$("#WatchPage .WatchStyle .stylethree .brandHide").show();
			$("#WatchPage .WatchStyle .stylethree .bg span").css("background","url(../img/watchImg/sanjiao2.png) no-repeat center");
		}else{
			$("#WatchPage .WatchStyle .stylethree .brandHide").hide();
			$("#WatchPage .WatchStyle .stylethree .bg span").css("background","url(../img/watchImg/sanjiao1.jpg) no-repeat center");
		}
		
	})
	$("#WatchPage .WatchStyle .stylefour .bg span").click(function(){
		flag2 = !flag2	
		if(flag2){
			$("#WatchPage .WatchStyle .stylefour .priceHide").show();
			$("#WatchPage .WatchStyle .stylefour .bg span").css("background","url(../img/watchImg/sanjiao2.png) no-repeat center");
		}else{
			$("#WatchPage .WatchStyle .stylefour .priceHide").hide();
			$("#WatchPage .WatchStyle .stylefour .bg span").css("background","url(../img/watchImg/sanjiao1.jpg) no-repeat center");
		}
		
	})
	
	
	$(window).scroll(function(){
		var scroll = $(document).scrollTop();
	//	document.title = scroll;
		if(scroll>500){
			$("#WatchPage .WatchStyle").addClass("toFixed")
			if(scroll>4250){
				var top = scroll -4320
				$("#WatchPage .WatchStyle").css("top",-top+"px");
			}
		}else{
			$("#WatchPage .WatchStyle").removeClass("toFixed")
		}	
	})
	
	//点击商品设置cookie与跳转页面
	$("#WatchPage .GoodsList .goods").on("click","dl",function(){
		//alert($(this).attr("goodsId"))
		var goodsId = $(this).attr("goodsId")
		setCookie('goods',goodsId)
		window.location.href = "watchDetail.html"
	})
	
	
	$("#RightConsult .Nowconsult").hover(function(){
		$(this).css({'background': 'url(../img/watchImg/Nowconsult.png) no-repeat center'})
	},function(){
		$(this).css({'background': 'url(../img/watchImg/Nowconsult0.png) no-repeat center'})
	})
	$("#RightConsult .QQconsult").hover(function(){
		$(this).css({'background': 'url(../img/watchImg/QQconsult.png) no-repeat center'})
	},function(){
		$(this).css({'background': 'url(../img/watchImg/QQconsult0.png) no-repeat center'})
	})
	$("#RightConsult .Totop").hover(function(){
		$(this).css({'background': 'url(../img/watchImg/Totop.png) no-repeat center'})
	},function(){
		$(this).css({'background': 'url(../img/watchImg/Totop0.png) no-repeat center'})
	})
	$("#RightConsult .Totop").click(function(){
		$("body,html").animate({"scrollTop":"0"},400);
	})
//删除商品==============================================================
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
				



















})
	
	
