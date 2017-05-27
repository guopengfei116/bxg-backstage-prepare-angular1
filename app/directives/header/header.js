/**
 * Created by sunShine on 2017/4/21.
 */
angular
.module('bxg-directive-header',[])
.directive('bxgHeader', function () {
    return {
        templateUrl:'/app/directives/header/header.html',
        restrict:'AC',
        replace:true,
        scope: {
        	
        },
        link: function() {
        	
        },
        controller: [
        	'$scope',
        	'$location',
        	'ajaxService',
        	function($scope, $location, ajaxService) {
        		
        		// 登出
        		$scope.logout = function() {
        			ajaxService.logout(function() {
	        			$location.path('/login');
	        		});
	        	};
    		}
        ]
    }
});
