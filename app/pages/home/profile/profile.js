angular
	.module('bxg-page-profile', [])
	.config([
		'$routeProvider',
		function($routeProvider) {
			$routeProvider
				.when('/profile', {
					templateUrl: '/app/pages/home/profile/profile.html',
					controller: 'profileController'
				});
		}
	])
	.controller('profileController', [
		'$scope',
		function($scope) {
			
		}
	]);
