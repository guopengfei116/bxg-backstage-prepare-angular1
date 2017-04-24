angular
	.module('bxg-page-course-edit-step2', [])
	.config([
		'$routeProvider', 
		function($routeProvider) {
			$routeProvider
				.when('/course/edit/step2', {
					templateUrl: '/app/pages/course/edit_step2/edit2.html',
					controller: 'courseEdit2Controller'
				});
		}
	])
	.controller('courseEdit2Controller', [
		'$scope',
		function() {
			
		}
	]);
