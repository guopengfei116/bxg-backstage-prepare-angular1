angular
.module('bxg-service-ajax', [])
.service('ajaxService', [
	'$http',
	'webInterfaceConstant',
	'paramService',
	function($http, webInterfaceConstant, paramService) {
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
					
					// 1个函数类型参数为回调
					if(typeof data === 'function') {
						fn = data;
						data = null;
					}
					// 表单元素类型数据转换
					else if(({}).toString.call(data).slice(8, -1) === 'HTMLFormElement') {
						data =paramService.getFormData(data);
					}
					// 对象类型数据转换
					else if(typeof data === 'object' && data != null){
						data = paramService.toFormData(data);
					}

					self.send(key, data, fn);
				};
			})(key);
		}
	}
]);
