angular
	.module('bxg-page-teacher-edit', [])
	.config([
		'$routeProvider', 
		function($routeProvider) {
			$routeProvider
				.when('/teacher/edit', {
					templateUrl: '/app/pages/teacher/edit/edit.html',
					controller: 'teacherEditController'
				});
		}
	])
	.controller('teacherEditController', [
		'$scope',
		function() {
			
		}
	]);
