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
            function ($scope) {

				// 左侧导航课程管理的显示隐藏
                $scope.isCourseManager = /^course/.test($scope.focus)? true: false;

            }
        ]
	};
}]);
