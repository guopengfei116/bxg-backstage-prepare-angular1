angular
	.module('bxg-page-course-edit-step1', [])
	.config([
		'$routeProvider', 
		function($routeProvider) {
			$routeProvider
				.when('/course/edit/step1', {
					templateUrl: '/app/pages/course/edit_step1/edit1.html',
					controller: 'courseEdit1Controller'
				});
		}
	])
	.controller('courseEdit1Controller', [
		'$scope',
		function() {
			
		}
	]);
