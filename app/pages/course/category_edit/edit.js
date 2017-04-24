angular
	.module('bxg-page-course-category-edit', [])
	.config([
		'$routeProvider', 
		function($routeProvider) {
			$routeProvider
				.when('/course/category/edit', {
					templateUrl: '/app/pages/course/category_edit/edit.html',
					controller: 'categoryEditController'
				});
		}
	])
	.controller('categoryEditController', [
		'$scope',
		function() {
			
		}
	]);
