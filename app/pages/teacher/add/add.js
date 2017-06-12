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
			
			$scope.teacher = {};
			
			// 添加讲师
			$scope.teacherAdd = function() {
				
				// 表单效验通过后再提交，这里效验是因为用户可能通过回车等方式提交表单，而非点击提交按钮
				if($scope.teacherAddForm.$valid) {
					
					// 传入form元素，ajax服务会自动获取form中的值
					// 备注：这里没有使用scope数据是为了测试其他可行方式
					ajaxService.teacherAdd($('form').get(0), function() {
						$location.path('/teacher/list');
					});
				}
			}
		}
	]);
