angular
	.module('bxg-page-course-category-list', [])
	.config([
		'$routeProvider', 
		function($routeProvider) {
			$routeProvider
				.when('/course/category/list', {
					templateUrl: '/app/pages/course/category_list/list.html',
					controller: 'categoryListController'
				});
		}
	])
	.controller('categoryListController', [
		'$scope',
		function() {
			
		}
	]);
