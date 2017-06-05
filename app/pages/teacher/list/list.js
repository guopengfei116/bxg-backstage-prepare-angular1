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
		'$filter',
		'ajaxService',
		function($scope, $filter, ajaxService) {
			
			// 获取讲师列表数据
			ajaxService.teacherList(function(data) {
				// 存储两个值，一个用来永久存储，
				// 一个用来渲染页面，渲染页面的值可能会随着搜索内容而改变
				$scope.teacherListS = data;
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
					// 更新讲师列表数据中的讲师状态
					teacher.tc_status = data.tc_status; 
				});
			};
			
			// 搜索功能，有用户触发
			$scope.search = function() {
				var searchVal = $scope.searchVal.trim();

				// 输入内容为空展示全部数据
				if(!searchVal) {
					$scope.teacherList = $scope.teacherListS;
				}else {
					// 借助内置过滤器实现
					var filter = $filter('filter');
					var temp = [];
					temp.push.apply(temp, filter($scope.teacherListS, { tc_name: searchVal }));
					temp.push.apply(temp, filter($scope.teacherListS, { tc_roster: searchVal }));
					temp.push.apply(temp, filter($scope.teacherListS, { tc_join_date: searchVal }));
					$scope.teacherList = temp;
				}
			};
			
			// filter过滤器函数
			// 只要$scope里的数据发生变化，该函数就会执行，
			// 如果把该函数应用到内置的filter里，$scope数据发送变化，
			// 那么该函数就会调用N次(list有多少条就调用多少次)，
			// 为了提高性能，所以暂且不使用。
			$scope.searchFilter = function(item) {
				console.log('searchFilter');
				// 找到符合条件的名称、昵称、手机号
				var reg = new RegExp($scope.searchVal);
				if(reg.test(item.tc_name) || reg.test(item.tc_roster) || reg.test(item.cellphone)) {
					return true;
				}
			}
			
			// 表头排序，默认按钮名称从小到大排序
			$scope.order = {
				title: 'tc_name',
				positive: false
			};

			// 点击表头修改排序规则，重复点击同一个表头正反切换
			$scope.orderChange = function(title) {
				if($scope.order.title === title) {
					$scope.order.positive = !$scope.order.positive;
				}else {
					$scope.order.title = title;
					$scope.order.positive = true;
				}
			};
		}
	]);
