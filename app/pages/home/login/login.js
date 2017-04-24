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
		function() {
			
		}
	]);
