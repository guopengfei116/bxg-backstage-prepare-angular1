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
		'$location',
		'ajaxService',
		function($scope, $location, ajaxService) {
			
			// 添加讲师
			$scope.teacherAdd = function() {
				ajaxService.teacherAdd($('form').get(0), function() {
					$location.path('/teacher/list');
				});
			}
		}
	]);
