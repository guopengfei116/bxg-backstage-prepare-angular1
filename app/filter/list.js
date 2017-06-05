angular
	.module('bxg-filter-list', [])
	.filter('list', [
		function() {
			return function() {
				console.log('目前没啥卵用');
			};
		}
	]);
