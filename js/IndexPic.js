$(function(){
	//tab选项卡
	$("#logo.w .ul1>li").hover(function(){
		$(this).find("div.tab").show()
		$(this).css("background","#8e0c3a")
	},function(){
		$(this).find("div.tab").hide()
		$(this).css("background","#fff")
	})
	
	//轮播图
	var timer = setInterval(changeImg,3000);
	function changeImg(){
		$("#banner .bannerUl").stop(false,true).animate({"margin-left":"-960px"},400,function(){
			$("#banner .bannerUl li:first").appendTo("#banner .bannerUl");
			$("#banner .bannerUl").css("margin-left",0)
		})
	}
	$("#banner.w").hover(function(){
		clearInterval(timer);
		$(this).find("div").show();
	},function(){
		$(this).find("div").hide();
		timer = setInterval(changeImg,3000);
	})
	
	$("#banner.w .leftBtn").hover(function(){
		$(this).css("opacity","1");
		$(this).css("filter","alpha(opacity=100)");
	},function(){
		$(this).css("opacity","0.3");
		$(this).css("filter","alpha(opacity=30)");
	})
	$("#banner.w .rightBtn").hover(function(){
		$(this).css("opacity","1");
		$(this).css("filter","alpha(opacity=100)");
	},function(){
		$(this).css("opacity","0.3");
		$(this).css("filter","alpha(opacity=30)");
	})
	
	//左边按钮功能	
	$("#banner.w").on("click",".leftBtn",Toright)
	function Toright(){
		$("#banner.w").off("click",".leftBtn")
		$("#banner .bannerUl li:last").insertBefore("#banner .bannerUl li:first");
		$("#banner .bannerUl").css("margin-left","-960px");
		$("#banner .bannerUl").stop(false,true).animate({"margin-left":"0"},400,function(){
			$("#banner.w").on("click",".leftBtn",Toright)
		});
	}
	//右边按钮功能
	$("#banner.w .rightBtn").click(function(){
		changeImg();
	})
	
	
	//商品轮播
	var timer1 = setInterval(goodsChange,3000);
	function goodsChange(){
		$("#floor5 .lunbo ul").stop(false,true).animate({"margin-left":"-180px"},400,function(){
			$("#floor5 .lunbo ul li:first").appendTo("#floor5 .lunbo ul");
			$("#floor5 .lunbo ul").css("margin-left",0)
		})
	}
	$("#floor5.w").hover(function(){
		clearInterval(timer1)
	},function(){
		timer1 = setInterval(goodsChange,3000);
	})
	//左边按钮功能	
	$("#floor5.w").on("click",".prev",Toprev)
	function Toprev(){
		$("#floor5.w").off("click",".prev")
		$("#floor5 .lunbo ul li:last").insertBefore("#floor5 .lunbo ul li:first");
		$("#floor5 .lunbo ul").css("margin-left","-180px");
		$("#floor5 .lunbo ul").stop(false,true).animate({"margin-left":"0"},400,function(){
			$("#floor5.w").on("click",".prev",Toprev)
		});
	}
	//右边按钮功能
	$("#floor5.w .next").click(function(){
		goodsChange();
	})

	
	
	
	
	
	
	
	
	
})
	
	
