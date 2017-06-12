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
				
				// 表单效验通过后再提交，这里效验是因为用户可能通过回车等方式提交表单，而非点击提交按钮
				if($scope.teacherEditForm.$invalid) {
					
					ajaxService.teacherModify($scope.teacher, function(result) {
						$location.path('/teacher/list');
					});
				}
			};
		}
	]);
