angular
	.module('bxg-page-login', [])
	.config([
		'$routeProvider', 
		function($routeProvider) {
			$routeProvider
				.when('/login', {
					templateUrl: '/app/pages/home/login/login.html',
					controller: 'loginController'
				});
		}
	])
	.controller('loginController', [
		'$scope',
		'$location',
		'ajaxService',
		'cookieService',
		function($scope, $location, ajaxService, cookieService) {
			
			// 表单数据
			$scope.formData = {};
			
			// 登陆
			$scope.login = function() {
				ajaxService.login($scope.form, function(result) {
					// 登陆成功后保存用户信息7天
					cookieService.set('userInfo', JSON.stringify(result), { 
						'path': '/',
						'max-age': 1000 * 60 * 60 * 24 * 7 
					});
					// 跳转到登陆页
					$location.path('/');
				});
			};
		}
	]);
