$(function(){
	$("#content .inp2 input").val(getCookie("PhoneNumber"));
	$("#content .inp2 a").click(function(){
		random();
	})
	var str = ""
	function random(){
	str = "";
	var str1 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	for(var i = 0; i<4; i++){
		str += str1.charAt(Math.floor(Math.random()*62));
	}
		alert(str);
	}
	$("#content .inp1 .Check_btn").click(function(){
		if(str == $("#content .inp1 .code").val()&&$("#content .inp1 .code").val()!=''){
			window.location.href = "../index.html"
		}
		
	})
	
	$("#content .rigis_cont_btn").click(function(){
			window.location.href = "../index.html"
			
	})
		
})
	
	
