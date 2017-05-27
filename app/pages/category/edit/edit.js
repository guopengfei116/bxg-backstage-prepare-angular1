angular
	.module('bxg-page-category-edit', [])
	.config([
		'$routeProvider', 
		function($routeProvider) {
			$routeProvider
				.when('/category/edit', {
					templateUrl: '/app/pages/category/edit/edit.html',
					controller: 'categoryEditController'
				});
		}
	])
	.controller('categoryEditController', [
		'$scope',
		function() {
			
		}
	]);
