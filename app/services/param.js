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
		}
	}
]);
