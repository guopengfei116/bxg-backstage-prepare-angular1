angular
	.module('bxg-page-course-add', [])
	.config([
		'$routeProvider', 
		function($routeProvider) {
			$routeProvider
				.when('/course/add', {
					templateUrl: '/app/pages/course/add/add.html',
					controller: 'courseAddController'
				});
		}
	])
	.controller('courseAddController', [
		'$scope',
		function() {
			
		}
	]);
