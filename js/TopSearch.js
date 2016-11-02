$(function(){
	$(window).scroll(function(){
		var scroll = $(document).scrollTop();
		if(scroll >= 300){
			$("#TopSearch").show();
		}else{
			$("#TopSearch").hide();
		}
	})
	$("#TopSearch .w .shopNav").hover(function(){
		$(this).find(".HiddenNav").show()
	},function(){
		$(this).find(".HiddenNav").hide()
	})
	$("#TopSearch input.search").focus(function(){
		if($(this).val() == '请输入您的关键字')
		$(this).val('')
	})
	$("#TopSearch input.search").blur(function(){
		if($(this).val() == ''){
			$(this).val('请输入您的关键字')
		}
	})
	$("#TopSearch input.btn").click(function(){
		if($("#TopSearch input.search").val() != ''&&$('#TopSearch input.search').val() != '请输入您的关键字'){
			alert('请求关键字相关数据并跳转页面');
		}
	})
})