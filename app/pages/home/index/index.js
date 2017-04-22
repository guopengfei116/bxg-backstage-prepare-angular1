angular
	.module('bxg-page-index', ['ngRoute'])
	.config([
		'$routeProvider', 
		function($routeProvider) {
			$routeProvider
				.when('', {
					redirectTo: '/index'
				})
				.when('/', {
					redirectTo: '/index'
				})
				.when('index', {
					templateUrl: '/app/pages/home/index/index.html',
					controller: 'indexController'
				})
		}
	])
	.controller('indexController', [
		'', 
		function() {
			
		}
	]);
