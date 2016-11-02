$(function(){
	//正则验证
	
	var boo = false;
	$("#content").on("focus",".inp1 input",function(){
		$(this).val('')
	})
	$("#content").on("blur",".inp1 input",function(){
		var str = $(".inp1 input").val();
		var reg =/^(13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|17[0-9]{9}$|18[0-9]{9})|\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		if(!reg.test(str)){
			if(str == ''){
				$("#content .prompt").html("请输入您的手机号或常用邮箱。")
			}else{
				$("#content .prompt").html("请输入正确的邮箱或手机号。")
			}
		}else{
			$("#content .prompt").html("")
			boo = true;
		}
	})
	$("#content").on("blur",".inp2 input",function(){
		var str = $(".inp2 input").val();
		var reg =/\w{6,16}/;
		if(!reg.test(str)){
			if(str == ''){
				$("#content .prompt").html("密码不能为空。")
			}else{
				$("#content .prompt").html("用户密码长度范围在6~16位之间。。")
			}
			boo = false;
		}else{
			$("#content .prompt").html("")
			boo = true;
		}
	})
	
	$("#content").on("blur",".inp3 input",function(){
		var str1 = $(".inp2 input").val();
		var str2 = $(".inp3 input").val();
			if(str1 != str2){
				$("#content .prompt").html("请重新输入一次上面的密码。")
				boo = false;
			}else{
				$("#content .prompt").html("")
				boo = true;
			}
	})
	
	$("#content").on("click",".rigis_cont_btn",function(){
		if($(".inp2 input").val() ==""||$(".inp3 input").val()==""){
			boo=false;
		}
		if(boo){
			setCookie("loginState",true,setDay(7))
			setCookie("PhoneNumber",$(".inp1 input").val(),setDay(7))
			setCookie("password",$(".inp2 input").val(),setDay(7))
			window.location.href = "phoneCheck.html"
		}
		
	})
	
	
})
	
	
