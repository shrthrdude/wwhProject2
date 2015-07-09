var app = angular.module('wwhApp');

app.controller('bookAddCtrl', function($scope, bookService){

	$scope.postBook = function(book){
		console.log(book)
	  bookService.postBook(book)
	};

});