angular
	.module('bxg-page-teacher-list', [])
	.config([
		'$routeProvider', 
		function($routeProvider) {
			$routeProvider
				.when('/teacher/list', {
					templateUrl: '/app/pages/teacher/list/list.html',
					controller: 'teacherListController'
				});
		}
	])
	.controller('teacherListController', [
		'$scope',
		function() {
			
		}
	]);
