var mod = angular.module('bxg-directive-aside', []);
mod.directive('bxgAside', [function(){
	return {
		templateUrl: '/app/directives/aside/aside.html',
		restrict: 'EM',
		replace: true,
		scope: {
			
		},
		link: function(scope, ele, attr) {
			
		}
	};
}]);
