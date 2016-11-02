$(function(){
	$.ajax({
		url:"watchList.json",
		success:function(data){
			var mydata = data.data;
			var str = "";
			for(var i in mydata){
				str += "<dl goodsId="+mydata[i].id+">"
				str += '<dt><a><img title='+mydata[i].name2+' pica="'+mydata[i].img1+'" src="'+mydata[i].img+'" picb="'+mydata[i].img+'" /></a></dt>'
				str += '<dd><a>'+mydata[i].name1+"<br/>"+mydata[i].name2+'</a></dd>'
				str += '<dd><span class="l sp1">'+mydata[i].price1+'</span><span class="l sp2">'+mydata[i].price2+'</span></dd>'
				str += '<dd class="shortDD"><p class="cle">'+mydata[i].price3+'</p></dd>'
				str += "</dl>"
			}
			$("#WatchPage .GoodsList .goods").append(str);
			
			$(".goods").on("mouseover","img",function(){
				var newpic=$(this).attr("pica")
				$(this).attr("src",newpic)
			})
			$(".goods").on("mouseout","img",function(){
				var newpic=$(this).attr("picb")
				$(this).attr("src",newpic)
			})
			
		}
	})
})
	
	
