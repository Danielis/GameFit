var app = angular.module('app', ['ngRoute', 'demo', 'main']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'app/templates/main.html',
			controller: 'MainController'
		})
		.when('/about', {
			templateUrl: 'app/templates/about.html',
		})
		.when('/docs', {
			templateUrl: 'app/templates/docs.html',
			controller: 'docsController'
		})
		.when('/contact', {
			templateUrl: 'app/templates/contact.html',
		})
		.when('/signup', {
			templateUrl: 'app/templates/signup.html'
		})
		.when('/demo', {
			templateUrl: 'app/templates/demo.html',
			controller: 'gamefitController'
		})
		.otherwise({
			redirectTo: '/'
		});
});