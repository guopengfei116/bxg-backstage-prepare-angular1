/**
 * Created by sunShine on 2017/4/22.
 */
angular
	.module('bxg',[
	
		// directive-module
	    "bxg-directive-aside",
	    "bxg-directive-header",
	    "bxg-directive-style",
	    
	    // service-module
	    "bxg-service-cookie",
	    
	    // controller-module
	    "bxg-page-index",
	    "bxg-page-login"
	    
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