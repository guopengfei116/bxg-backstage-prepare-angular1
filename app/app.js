// bxg主模块，通过页面的ng-app调用，辅助模块在这里配置了依赖才会执行
angular
	.module('bxg',[
	
		// 只要该模块被加载过，那么该模块的服务就可以在其他模块中直接使用，无需配置依赖
		'ngRoute',
		
		// 常量配置，constant-module
		"bxg-constant-interface",
		
		// 自定义服务，service-module
	    "bxg-service-cookie",
	    "bxg-service-ajax",
	    "bxg-service-param",
		
		// 自定义指令，directive-module
	    "bxg-directive-aside",
	    "bxg-directive-header",
	    "bxg-directive-style",
	    
	    // 控制器，controller-module
	    "bxg-page-index",
	    "bxg-page-login",
	    "bxg-page-repass",
	    "bxg-page-settings",
	    "bxg-page-teacher-edit",
	    "bxg-page-teacher-list",
	    "bxg-page-course-add",
	    "bxg-page-course-list",
	    "bxg-page-course-edit-step1",
	    "bxg-page-course-edit-step2",
	    "bxg-page-course-edit-step3",
	    "bxg-page-course-category-edit",
	    "bxg-page-course-category-list"
	])
	.config([
		'$httpProvider',
		function($httpProvider) {
			$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded, charset=UTF-8';
		}
	])
	.run([
		'$rootScope',
		'$location',
		'cookieService',
		function($rootScope, $location, cookieService) {
			
			// 页面跳转时进行登陆校验，必须要监听路由变化事件来完成
			// 因为angular使用hash值做路由管理，hash的变化不会引起浏览器的刷新
			$rootScope.$on('$routeChangeStart', function(e, next, current) {
            	
            	var isLogined = !!cookieService.get('PHPSESSID');
				var path = $location.path();
				
				// 登陆状态下进入登陆页，跳转到首页
				if(isLogined && path === '/login') {
					$location.path('/');
				}
				
				// 未登陆状态下进入其他页面，跳转到登陆页
				else if(!isLogined && path !== '/login') {
					$location.path('/login');
				}
        	});
		}
	]);
