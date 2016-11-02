$(function(){
	$.ajax({
		url:"watchdetail.json",
		success:function(data){
			var mydata = data.data;
			var str = "";
			var str1 ="";
			var str2 ="";
			var str3 = "";
			var str4 = "";
			for(var i in mydata){
				if(getCookie('goods') == mydata[i].id){
				 	str3 += '<div class="cartshow">'
					str3 += 	'<img src="'+mydata[i].img+'"/>'
					str3 += 	'<p>'+mydata[i].name1+'</p>'
					str3 += 	'<p>'+mydata[i].name2+'</p>'
					str3 += 	'<p>￥'+mydata[i].price2+'</p>'
					str3 += 	'<span productid="'+mydata[i].id+'" productprice="'+mydata[i].price2+'" class="remove">×</span>'
					str3 += '</div>'
					if(mydata[i].img5!=""){
						str+=	'<div class="l Spic">'
						str+=		'<a class="up"></a>'
						str+=		'<ul>'
						str+=			'<li><img src="'+mydata[i].img2+'"/></li>'
						str+=			'<li><img src="'+mydata[i].img3+'"/></li>'
						str+=			'<li><img src="'+mydata[i].img4+'"/></li>'
						str+=			'<li><img src="'+mydata[i].img5+'"/></li>'
						str+=			'<li><img src="'+mydata[i].img6+'"/></li>'
						str+=		'</ul>'
						str+=		'<a class="down"></a>'
						str+=	'</div>'
						str+=	'<div class="l Mpic" id="Mpic">'
						str+=		'<div class="box" id="box"></div>'
						str+=		'<ul class="ulM">'
						str+=			'<li><img src="'+mydata[i].img2+'"/></li>'
						str+=			'<li><img src="'+mydata[i].img3+'"/></li>'
						str+=			'<li><img src="'+mydata[i].img4+'"/></li>'
						str+=			'<li><img src="'+mydata[i].img5+'"/></li>'
						str+=			'<li><img src="'+mydata[i].img6+'"/></li>'
						str+=		'</ul>'
						str+=	'</div>'
						str+=	'<div class="Bpic" id="Bpic">'
						str+=		'<ul class="ulB" id="ulB">'
						str+=			'<li><img src="'+mydata[i].img2+'"/></li>'
						str+=			'<li><img src="'+mydata[i].img3+'"/></li>'
						str+=			'<li><img src="'+mydata[i].img4+'"/></li>'
						str+=			'<li><img src="'+mydata[i].img5+'"/></li>'
						str+=			'<li><img src="'+mydata[i].img6+'"/></li>'
						str+=		'</ul>'
						str+=	'</div>'
						str+=	'<div class="buy l">'
						str+=		'<h3>'+mydata[i].name1+'</h3>'
						str+=		'<p>'+mydata[i].name2+'</p>'
						str+=		'<span>美西价：￥'+mydata[i].price2+'</span>'
						str+=		'<div class="commen">'
						str+=			'<span>到货时间： 该商品到货时间预计3-5个工作日<br/>退货说明： 若该商品无质量问题不支持退换货</span>'
						str+=		'</div>'
						str+=		'<input productid="'+mydata[i].id+'" productprice="'+mydata[i].price2+'" class="buynow" type="button"/>'
						str+=		'<input productid="'+mydata[i].id+'" productprice="'+mydata[i].price2+'" class="addtocart" type="button"/>'
						str+=		'<div class="share">'
						str+=			'<a class="l">分享：</a><a title="微博" class="weibo l"></a><a title="微信" class="weixin l"></a><a title="豆瓣" class="douban l"></a><a class="ad r">加入收藏(209)</a>'
						str+=		'</div>'
						str+=	'</div>'
						str1 += '<div class="tupian">'
						str1 += '<img src="'+mydata[i].img2+'"/>'
						str1 += '<img src="'+mydata[i].img3+'"/>'
						str1 += '<img src="'+mydata[i].img4+'"/>'
						str1 += '<img src="'+mydata[i].img5+'"/>'
						str1 += '<img src="'+mydata[i].img6+'"/>'
						str1 += '</div>'
						str2 +=	'<div class="superBigpic">'
						str2 +=		'<span class="close">关闭×</span>'
						str2 +=		'<ul class="superUlS">'
						str2 +=			'<li class="l"><img src="'+mydata[i].img2+'"/></li>'
						str2 +=			'<li class="l"><img src="'+mydata[i].img3+'"/></li>'
						str2 +=			'<li class="l"><img src="'+mydata[i].img4+'"/></li>'
						str2 +=			'<li class="l"><img src="'+mydata[i].img5+'"/></li>'
						str2 +=			'<li class="l"><img src="'+mydata[i].img6+'"/></li>'
						str2 +=		'</ul>'
						str2 +=		'<div class="showSuperpic">'
						str2 +=			'<ul class="superUlB">'
						str2 +=				'<li class="l"><img src="'+mydata[i].img2+'"/></li>'
						str2 +=				'<li class="l"><img src="'+mydata[i].img3+'"/></li>'
						str2 +=				'<li class="l"><img src="'+mydata[i].img4+'"/></li>'
						str2 +=				'<li class="l"><img src="'+mydata[i].img5+'"/></li>'
						str2 +=				'<li class="l"><img src="'+mydata[i].img6+'"/></li>'
						str2 +=			'</ul>'			
						str2 +=		'</div>'
						str2 +=	'</div>'
					}else{
						str+=	'<div class="l Spic">'
						str+=		'<a class="up"></a>'
						str+=		'<ul>'
						str+=			'<li><img src="'+mydata[i].img2+'"/></li>'
						str+=			'<li><img src="'+mydata[i].img3+'"/></li>'
						str+=			'<li><img src="'+mydata[i].img4+'"/></li>'
						str+=		'</ul>'
						str+=		'<a class="down"></a>'
						str+=	'</div>'
						str+=	'<div class="l Mpic" id="Mpic">'
						str+=		'<div class="box" id="box"></div>'
						str+=		'<ul class="ulM">'
						str+=			'<li><img src="'+mydata[i].img2+'"/></li>'
						str+=			'<li><img src="'+mydata[i].img3+'"/></li>'
						str+=			'<li><img src="'+mydata[i].img4+'"/></li>'
						str+=		'</ul>'
						str+=	'</div>'
						str+=	'<div class="Bpic" id="Bpic">'
						str+=		'<ul class="ulB" id="ulB">'
						str+=			'<li><img src="'+mydata[i].img2+'"/></li>'
						str+=			'<li><img src="'+mydata[i].img3+'"/></li>'
						str+=			'<li><img src="'+mydata[i].img4+'"/></li>'
						str+=		'</ul>'
						str+=	'</div>'
						str+=	'<div class="buy l">'
						str+=		'<h3>'+mydata[i].name1+'</h3>'
						str+=		'<p>'+mydata[i].name2+'</p>'
						str+=		'<span>美西价：'+mydata[i].price2+'</span>'
						str+=		'<div class="commen">'
						str+=			'<span>到货时间： 该商品到货时间预计3-5个工作日<br/>退货说明： 若该商品无质量问题不支持退换货</span>'
						str+=		'</div>'
						str+=		'<input productid="'+mydata[i].id+'" productprice="'+mydata[i].price2+'" class="buynow" type="button"/>'
						str+=		'<input productid="'+mydata[i].id+'" productprice="'+mydata[i].price2+'" class="addtocart" type="button"/>'
						str+=		'<div class="share">'
						str+=			'<a class="l">分享：</a><a title="微博" class="weibo l"></a><a title="微信" class="weixin l"></a><a title="豆瓣" class="douban l"></a><a class="ad r">加入收藏(209)</a>'
						str+=		'</div>'
						str+=	'</div>'
						str1 += '<div class="tupian">'
						str1 += 	'<img src="'+mydata[i].img2+'"/>'
						str1 +=		'<img src="'+mydata[i].img3+'"/>'
						str1 += 	'<img src="'+mydata[i].img4+'"/>'
						str1 += '</div>'
						str2 +=	'<div class="superBigpic">'
						str2 +=		'<span class="close">关闭×</span>'
						str2 +=		'<ul class="superUlS">'
						str2 +=			'<li class="l"><img src="'+mydata[i].img2+'"/></li>'
						str2 +=			'<li class="l"><img src="'+mydata[i].img3+'"/></li>'
						str2 +=			'<li class="l"><img src="'+mydata[i].img4+'"/></li>'
						str2 +=		'</ul>'
						str2 +=		'<div class="showSuperpic">'
						str2 +=			'<ul class="superUlB">'
						str2 +=				'<li class="l"><img src="'+mydata[i].img2+'"/></li>'
						str2 +=				'<li class="l"><img src="'+mydata[i].img3+'"/></li>'
						str2 +=				'<li class="l"><img src="'+mydata[i].img4+'"/></li>'
						str2 +=			'</ul>'		
						str2 +=		'</div>'
						str2 +=	'</div>'			
					}
				}	
			}
			$("#glass.w").append(str);
			$("#Aboutproduct.w .productPic").append(str1);
			$("#super").append(str2);
		//	SmallToBig();
			
			$("#glass").on("click",".buynow",function(){
				var productid = Number($(this).attr("productid"))
				var productprice = Number($(this).attr('productprice'))
				if(getCookie('product'+productid)==""){
					setCookie(productid,productid);
					setCookie('product'+productid,1);
					if(getCookie('TotalCount')==""||Number(getCookie('TotalCount'))==0){
						setCookie('TotalCount',1)
						setCookie("TemporaryMoney",productprice)
					}else{
						setCookie('TotalCount',Number(getCookie('TotalCount'))+1)
						setCookie("TemporaryMoney",Number(getCookie('TemporaryMoney'))+productprice)
					}
				}
				window.location.href = "cart.html"
			})
			
			$("#glass").on("click",".addtocart",function(){
				var count = 0;
				count++;
				$("#header .w div.cart .cart_box .showProduct .flag").after(str3)
				$("#header .w div.cart .cart_box .jiesuan").show();
				var productid = $(this).attr("productid")
				var productprice =Number( $(this).attr("productprice"))
				setCookie(productid,productid);
				if(getCookie('product'+productid)!=""){
					setCookie('product'+productid,count+Number(getCookie('product'+productid)))
				}else{
					setCookie('product'+productid,count)
				}
				if(getCookie('TemporaryMoney')!=""){
					setCookie('TemporaryMoney',productprice+Number(getCookie('TemporaryMoney')))
				}else{
					setCookie('TemporaryMoney',productprice)
				}
				if(getCookie('TotalCount')!=""){
					setCookie('TotalCount',count+Number(getCookie('TotalCount')))
				}else{
					setCookie('TotalCount',count)
				}
				
				$("#header .w .cart .cart_box").show()
				$('#header .w div.cart .cart_btn .count').text(Number(getCookie('TotalCount')));
				$('#header .w div.cart .cart_box .jiesuan .allprice').text("￥"+getCookie('TemporaryMoney'));
			})
			
			
			//放大镜jq写法
			$("#Mpic").mousemove(function(evt){
				var e = evt || window.event;
				//document.title = document.getElementById("Mpic").offsetLeft+"/"+$("#Mpic").offset().left
				
				var x = e.pageX - $("#box").width()/2 - $('#Mpic').offset().left;
				var y = e.pageY - $("#box").height()/2 - $("#Mpic").offset().top;
				if(x<0){
					x = 0;
				}
				if(x>$("#Mpic").width()-$('#box').width()){
					x = $("#Mpic").width()-$('#box').width();
				}
				if(y<0){
					y = 0;
				}
				if(y>$("#Mpic").height()-$('#box').height()){
					y = $("#Mpic").height()-$('#box').height()
				}
				$("#box").css("left",x+"px");
				$("#box").css("top",y+"px");
				$("#ulB").css("margin-left",-2*x+"px");
				$("#ulB").css("margin-top",-2*y+"px");

			})
			//删除物品
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
		//放大镜js放大函数
//		function SmallToBig(){
//			var banxin = document.getElementById("glass");
//			var mpic = document.getElementById("Mpic");
//			var box = document.getElementById("box");
//			var bpic = document.getElementById("Bpic");
//			var ulb = document.getElementById("ulB");
//
//			mpic.onmousemove = function(evt){
//				var scroll = document.documentElement.scrollTop||document.body.scrollTop;
//				var e = evt || window.event;
//				var x = e.clientX - box.offsetWidth/2 - banxin.offsetLeft-mpic.offsetLeft;
//				var y = e.clientY + scroll - box.offsetHeight/2 - banxin.offsetTop-mpic.offsetTop;
//				if(x<0){
//					x = 0;
//				}
//				if(x>mpic.offsetWidth-box.offsetWidth){
//					x = mpic.offsetWidth-box.offsetWidth;
//				}
//				if(y<0){
//					y = 0;
//				}
//				if(y>mpic.offsetHeight-box.offsetHeight){
//					y = mpic.offsetHeight-box.offsetHeight
//				}
//				box.style.left = x +"px";
//				box.style.top = y + "px";
//				ulb.style.marginLeft = -2 * x +"px";
//				ulb.style.marginTop = -2 * y +"px";
//			}
//		}
})
	
	
