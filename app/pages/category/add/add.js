angular
	.module('bxg-page-category-add', [])
	.config([
		'$routeProvider', 
		function($routeProvider) {
			$routeProvider
				.when('/category/add', {
					templateUrl: '/app/pages/category/add/add.html',
					controller: 'courseAddController'
				});
		}
	])
	.controller('courseAddController', [
		'$scope',
		function() {
			
		}
	]);
