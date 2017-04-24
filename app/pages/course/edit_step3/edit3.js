angular
	.module('bxg-page-course-edit-step3', [])
	.config([
		'$routeProvider', 
		function($routeProvider) {
			$routeProvider
				.when('/course/edit/step3', {
					templateUrl: '/app/pages/course/edit_step3/edit3.html',
					controller: 'courseEdit3Controller'
				});
		}
	])
	.controller('courseEdit3Controller', [
		'$scope',
		function() {
			
		}
	]);
