			//cookie创建封装函数
			//					键	值	失效期setDay（）	....
			function setCookie(key,value,expires,domain,secure){
				var cookie = encodeURIComponent(key)+"="+encodeURIComponent(value);
				if(expires instanceof Date){
					cookie+=";expires="+expires;	
				}
				if(domain){
					cookie+=";domain="+domain;
				}
				if(secure){
					cookie+=";"+secure;
				}
				document.cookie = cookie+";path=/";
			}
			//失效日期封装函数
			function setDay(day){
				var date = null;
				if(typeof day == "number"&&day > 0){
					date = new Date();
					date.setDate(date.getDate() + day);				
				}
				return date;
			}
			//获取指定键的键值
			function getCookie(key){
				var findName = encodeURIComponent(key)+"=";
				var cookievalue = "";
				var start = document.cookie.indexOf(findName);
				if(start > -1){
					var end = document.cookie.indexOf(";",start);
					if(end == -1){
						end = document.cookie.length;
					}
					cookievalue = decodeURIComponent(document.cookie.substring(start+findName.length,end));
				}
				return cookievalue;
			}
			
			//删除指定的键值对
//			function deleteCookie(key){
//				document.cookie = encodeURIComponent(key)+"=;expires="+new Date(0);
//			}

			function deleteCookie(name) 
			{ 
			                     var expdate = new Date(); 
			                     expdate.setTime(expdate.getTime() - (86400 * 1000 * 1)); 
			    setCookie(name, "", expdate); 
			} 














