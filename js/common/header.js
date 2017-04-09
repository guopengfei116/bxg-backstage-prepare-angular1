define(['util', 'jquery'], function(util, $) {
	
	function Header(options) {
		
		// 默认配置
		var _default = {
			logoutSelector: '#logout',
			logoutApi: '/v6/logout',
			logoutMethod: 'post',
			logoutGo: '/html/home/login.html'
		};
		
		// 合并用户传入的配置，得到最终配置
		util.extend(_default, options);
		
		// 把合并后最终的参数添加到this身上
		this.$logoutBtn = $(_default.logoutSelector);
		this.logoutApi = _default.logoutApi;
		this.logoutMethod = _default.logoutMethod;
		this.logoutGo =  _default.logoutGo;
	}
	
	Header.prototype = {
		
		// 退出登陆
		logout: function() {
			var self = this;
			this.$logoutBtn.on('click', function() {
				// 这里是访问$对象的属性，相当于$.get或者$.post
				$[self.logoutMethod](self.logoutApi, function(data) {
					data.code == 200 && (location.href = self.logoutGo);
				});
			});
		}
	};

	return Header;
});
