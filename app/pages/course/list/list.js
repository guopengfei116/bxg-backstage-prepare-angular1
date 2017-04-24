angular
	.module('bxg-page-course-list', [])
	.config([
		'$routeProvider', 
		function($routeProvider) {
			$routeProvider
				.when('/course/list', {
					templateUrl: '/app/pages/course/list/list.html',
					controller: 'courseListController'
				});
		}
	])
	.controller('courseListController', [
		'$scope',
		function() {
			
		}
	]);
