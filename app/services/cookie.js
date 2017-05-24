angular
.module('bxg-service-cookie', [])
.service('cookieService', [
	function() {
		
		// 获取单个或者全部cookie值
		this.get = function(cookieName) {
			var cookieArr = document.cookie.split('; ');
			var cookieObj = {}, tempArr;
			
			for(var i = 0, len = cookieArr.length; i < len; i++) {
				tempArr = cookieArr[i].split('=');
				cookieObj[tempArr[0]] = tempArr[1];
			}
			
			// 如果没有传参，那么返回对象，传了，返回指定的参数值
			return (cookieName == null)? cookieObj: cookieObj[cookieName];
		};
		
		// 添加或修改cookie
		this.set = function(name, val, config) {
			var key;
			var cookieStr = name + '=' + val;
			for(key in config) {
				cookieStr += '; ' + key + '=' + config[key];
			}
			document.cookie = cookieStr;
		};
	}
]);
