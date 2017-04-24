angular
	.module('bxg-page-repass', [])
	.config([
		'$routeProvider',
		function($routeProvider) {
			$routeProvider
				.when('/repass', {
					templateUrl: '/app/pages/home/repass/repass.html',
					controller: 'repassController'
				})
		}
	])
	.controller('repassController', [
		'$scope',
		function($scope) {
			
		}
	]);
