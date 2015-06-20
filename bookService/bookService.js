var app = angular.module('wwhApp');

app.service('bookService', function(fb){

	// var firebaseRef = new Firebase('https://wwh.firebaseio.com/');

	this.getBooks = function(){
		return new Firebase(fb.url + '/books');
	};
})