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
		'$location',
		'ajaxService',
		function($scope, $location, ajaxService) {
			
			var tc_id = $location.search().tc_id;

			// 数据回显
			ajaxService.teacherEdit({ tc_id: tc_id  }, function(result) {
				$scope.teacher = result;
			});
			
			// 修改操作
			$scope.modify = function() {
				ajaxService.teacherModify($scope.teacher, function(result) {
					$location.path('/teacher/list');
				});
			};
		}
	]);
