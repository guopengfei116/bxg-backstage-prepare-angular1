angular
	.module('bxg-page-category-list', [])
	.config([
		'$routeProvider', 
		function($routeProvider) {
			$routeProvider
				.when('/category/list', {
					templateUrl: '/app/pages/category/list/list.html',
					controller: 'categoryListController'
				});
		}
	])
	.controller('categoryListController', [
		'$scope',
		function() {
			
		}
	]);
