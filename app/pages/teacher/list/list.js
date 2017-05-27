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
		'ajaxService',
		function($scope, ajaxService) {
			
			// 获取讲师列表数据
			ajaxService.teacherList(function(data) {
				$scope.teacherList = data;
			});
			
			// 查看讲师详细信息
			$scope.getTeacherInfo = function(tcId) {
				ajaxService.teacherView({tc_id: tcId}, function(data) {
					$('#teacher-modal').modal();
					$scope.teacherView = data;
				});
			};
			
			// 启用注销讲师
			$scope.changeTeacherStatus = function(teacher, tcId, oldStatus) {
				ajaxService.teacherHandle({
					tc_id: tcId,
					tc_status: oldStatus
				}, function(data) {
					teacher.tc_status = data.tc_status; // 更新讲师列表数据中的讲师状态
				});
			};
		}
	]);
