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
		link: function($scope, $ele, attr) {
			/**
			 * 先执行控制器，再执行这里，最后才会渲染页面，
			 * 所以这里面是无法获取控制器对页面操作结果的！！！
			 * */

			// 下拉列表交互功能
			$('.nav-slide-toggle').on('click', function() {
				angular.element(this).next().slideToggle();
			});
			
			// 焦点定位
			var pathInFoucs = {
				'/': '/index',
				'/profile': '/index',
				'/repass': '/index',
				'/teacher/add': '/teacher/list',
				'/teacher/edit': '/teacher/list',
				'/category/edit': '/category/list',
				'/course/edit/step1': '/course/list',
				'/course/edit/step2': '/course/list',
				'/course/edit/step3': '/course/list',
			};
			var path = location.hash.slice(2);   // 页面的hash是angular的path，然后去掉hash中的#!
        	var href = '#!' + (pathInFoucs[path] || path);
        	$('.navs a').removeClass('active')
				.filter('[href="' + href + '"]').addClass('active')
				// 被选中的元素所有的父元素显示，这个显示截止到navs为止
				.parentsUntil('.navs').show();
		},
		controller: [
            '$scope',
            '$location',
            'cookieService',
            function ($scope, $location, cookieService) {
            	
            	// 用户信息
            	var userInfo = cookieService.get('userInfo') || '{}';
            	$scope.userInfo = JSON.parse(userInfo);
            }
        ]
	};
}]);
