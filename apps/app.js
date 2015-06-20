var app = angular.module('wwhApp', ['ngRoute', 'ngGrid', 'firebase']);

app.constant('fb', {
	url: "https://wwh.firebaseio.com/"
});

app.config(function($routeProvider){
	$routeProvider
	.when('/home', {
		controller: 'mainCtrl',
		templateUrl: 'mainCtrl/home.html'
	})
	.when('/about', {
		controller: 'aboutCtrl',
		templateUrl: 'aboutCtrl/about.html'
	})
	.when('/officers', {
		controller: 'officersCtrl',
		templateUrl: 'officersCtrl/officers.html'
	})
	.when('/bylaws', {
		controller: 'bylawsCtrl',
		templateUrl: 'bylawsCtrl/bylaw.html'
	})
	.when('/gbfaf', {
		controller: 'gbfafCtrl',
		templateUrl: 'gbfafCtrl/gbfaf.html'
	})
	.when('/library', {
		controller: 'libraryCtrl',
		templateUrl: 'libraryCtrl/library.html',
		resolve: { 
			booksRef: function(bookService){
				return bookService.getBooks();
			}
		}
	})
	.otherwise('/home', {
		controller: 'mainCtrl',
		templateUrl: 'mainCtrl/home.html'
	});
});