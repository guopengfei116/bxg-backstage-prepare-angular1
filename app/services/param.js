angular
.module('bxg-service-param', [])
.service('paramService', [
	function() {
		
		// 对象转formData
		this.toFormData = function(data) {
			var key;
			var formData = '';
			for(key in data) {
				formData += encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) + '&';
			}
			return formData.slice(0, -1);
		};
		
		// 通过表单获取数据
		this.getFormData = function(form) {
			var data = {};
			
			var i = 0, len, 
				  arr = [];
			
			// 获取页面表单
			var texts = form.querySelectorAll('input[name][type="text"]');
			var passwords = form.querySelectorAll('input[name][type="password"]');
			var selects = form.querySelectorAll('select[name]');
			var radios = form.querySelectorAll('input[name][type="radio"][checked]');
			var checkboxs = form.querySelectorAll('input[name][type="checkbox"][checked]');
			arr.push.apply(arr, texts);
			arr.push.apply(arr, passwords);
			arr.push.apply(arr, selects);
			arr.push.apply(arr, radios);
			arr.push.apply(arr, checkboxs);
			
			// 文本类表单数据处理
			for(len = arr.length; i < len; i++) {
				data[arr[i].name] = encodeURIComponent(arr[i].value);
			}
			
			return data;
		}
	}
]);
