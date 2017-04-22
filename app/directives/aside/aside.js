angular
.module('bxg-directive-aside', [])
.directive('bxgAside', [function(){
	return {
		templateUrl: '/app/directives/aside/aside.html',
		restrict: 'EM',
		replace: true,
		scope: {
			focus: '@'
		},
		link: function(scope, ele, attr) {
			
		},
		controller: [
            '$scope',
            'cookieService',
            function ($scope, cookieService) {
            	
            	// 左侧导航用户信息
            	var userInfo = cookieService.get('userInfo') || {};
            	$scope.userInfo = {
            		tcName: userInfo.tc_name || "anonymity",
            		tcAvatar: userInfo.tc_avatar || "/app/img/default.png"
            	};

				// 左侧导航课程管理的显示隐藏
                $scope.isCourseManager = /^course/.test($scope.focus)? true: false;
            }
        ]
	};
}]);
