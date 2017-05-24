angular
.module('bxg-service-ajax', [])
.service('ajaxService', [
	'$http',
	'webInterfaceConstant',
	function($http, webInterfaceConstant) {
		var key;
		var self = this;
		
		// 公共方法
		this.send = function(name, data, fn) {
			var xhrPromise = null;

			// 获取接口信息
			var interfaceInfo = webInterfaceConstant[name],
				  url = interfaceInfo.url,
				  type = interfaceInfo.type;
				
			// 发送请求
		    if(type === 'get') {
                xhrPromise = $http.get(url, {params: data});
            }else if(type === 'post') {
                xhrPromise = $http.post(url, data);
            }else if(type === 'jsonp') {
                xhrPromise = $http.jsonp(url, data);
            }else if(type === 'message') {
                console.log('html5的另外一种跨域方式');
            }

			// 成功回调,接收angular包装过的数据对象
            xhrPromise.then(function(rep) {
            	var data = rep.data;
                if(data && data.code == 200) {
                    fn && typeof fn === 'function' && fn(data.result);
                }
            });

            return xhrPromise;
		};
		
		// 每一个web接口对应一个快捷调用方法
		for(key in webInterfaceConstant) {
			(function(key) {
				self[key] = function(data, fn) {
					// data非函数类型，1个参数为回调
					data = typeof data === 'function'? 
						(fn = fn || data, null): data;
					self.send(key, data, fn);
				};
			})(key);
		}
	}
]);
