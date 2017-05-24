angular
	.module('bxg-page-settings', [])
	.config([
		'$routeProvider',
		function($routeProvider) {
			$routeProvider
				.when('/settings', {
					templateUrl: '/app/pages/home/settings/settings.html',
					controller: 'settingsController'
				});
		}
	])
	.controller('settingsController', [
		'$scope',
		function($scope) {
			
		}
	]);
