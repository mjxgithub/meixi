$(function(){
	//tab选项卡
	$("#logo.w .ul1>li").hover(function(){
		$(this).find("div.tab").show()
		$(this).css("background","#8e0c3a")
	},function(){
		$(this).find("div.tab").hide()
		$(this).css("background","#fff")
	})

//右边咨询栏	
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

	var flag = false
	$("#glass.w").on('click'," .buy .share .ad",function(){
		flag = !flag;
		if(flag){
			$(this).css({'background':'url(../img/watchDetail/redheart.png) no-repeat left'});
		}else{
			$(this).css({'background':'url(../img/watchDetail/greyheart.jpg) no-repeat left'});
		}
	})
	
	
	
	//详情页选项卡功能
	$("#goodsdetail.w").on('click',"ul li",function(){
		$(this).css({'background':'#505050','color':'white'}).siblings().css({'background':'#e6e6e6','color':'#7c7c8f'});
		$("#Aboutproduct").find(".product").eq($(this).index()).show().siblings().hide();
		$("body,html").animate({"scrollTop":"1101px"})
	})
	//选项卡定位功能
	$(window).scroll(function(){
		var scroll = $(document).scrollTop();
		//document.title = scroll;
		if(scroll>1100){
			$("#goodsdetail.w ul.ulposi").addClass("cleposi")
			$("#glass .buy input.buynow").addClass("buyposi")
			$("#glass .buy input.addtocart").addClass("addcartposi")
		}else{
			$("#goodsdetail.w ul.ulposi").removeClass("cleposi")
			$("#glass .buy input.buynow").removeClass("buyposi")
			$("#glass .buy input.addtocart").removeClass("addcartposi")

		}
	})



	//放大镜相关功能
	$("#glass").on('mouseover','.Spic ul li',function(){
		$(this).find('img').css({'border':'1px solid #ccc'}).parent().siblings().find("img").css({'border':0})
		$("#glass .Mpic ul.ulM li").eq($(this).index()).show().siblings().hide();
		$("#glass .Bpic ul.ulB li").eq($(this).index()).show().siblings().hide();
	})

	$("#glass").on('mouseover','.Mpic',function(){
		$(this).find(".box").show();
		$("#glass .Bpic").show();
	})
	$("#glass").on('mouseout','.Mpic',function(){
		$(this).find(".box").hide();
		$("#glass .Bpic").hide();
	})
	//点击图片进入大图模式
	$("#super").on("click",".superBigpic .close",function(){
		$("#super .superBigpic").hide();
	})
	var length = 0;
	$("#glass").on("click",".Mpic",function(){
		$("#super .superBigpic").show();
		length = $("#super .superUlS li").size();
		$("#super .superUlB").css({"width":600*length+"px"})
	})
	
	$("#super").on("click",".superUlS li",function(){
		var k = $(this).index();
		$("#super .showSuperpic .superUlB").animate({'margin-left':-k*600+"px"},300)
	})
	
	
	

	//尾末的影藏框
	$("#brandnav .showdiv").hover(function(){
		$("#brandnav .theHide").show();
		$("#brandnav .sanjiao").show();
	},function(){
		$("#brandnav .theHide").hide();
		$("#brandnav .sanjiao").hide();		
	})

})
	
	
