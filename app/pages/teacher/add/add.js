angular
	.module('bxg-page-teacher-add', [])
	.config([
		'$routeProvider', 
		function($routeProvider) {
			$routeProvider
				.when('/teacher/add', {
					templateUrl: '/app/pages/teacher/add/add.html',
					controller: 'teacherAddController'
				});
		}
	])
	.controller('teacherAddController', [
		'$scope',
		function() {
			
		}
	]);
