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
            '$location',
            'cookieService',
            function ($scope, $location, cookieService) {
            	/**
            	 * 在这里面对元素的显示隐藏操作，样式是独立存在的，
            	 * 比如某元素在css样式中为隐藏，那么ng-show为true，元素仍然是隐藏的！！！
            	 * */
            	
            	// 1、导航用户信息
            	var userInfo = cookieService.get('userInfo') || '{}';
            	$scope.userInfo = JSON.parse(userInfo);
            	
            	/**
				 * 2、导航焦点定位：
				 * 1、对于页面路径与href不对应的项使用一个对象统一配置,
				 * 		对象左边的key对应网站的pathname，右边的值对应导航中a标签的href路径
				 * 2、获取网站当前的路径
				 * 3、以网站路径为key，去配置对象中找对应的href，
				 * 		找到即使用，未找到就使用当前路径。
				 * */
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
				var path = $location.path();
            	$scope.foucs = pathInFoucs[path] || path;
            	
            	// 3、导航下拉列表
            	// 3.1、默认值
            	$scope.slideIsShow = {
            		course: false,
            		category: false
            	};
            	var pathRoot = $location.path().match(/^\/(\w+)/)[1];
            	$scope.slideIsShow[pathRoot] = true;
            	
            	// 3.2、交互功能
            	$scope.changeSlideShow = function(type) {
            		$scope.slideIsShow[type] = !$scope.slideIsShow[type];
            	};
            }
        ]
	};
}]);
