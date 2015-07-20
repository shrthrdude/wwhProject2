var app = angular.module('wwhApp');

app.controller('bookAddCtrl', function($scope, bookService){

	$scope.disableAdd = true;

	$scope.postBook = function(book){
	  if (book.book === ""){
	  	alert("Book title MUST be entered to be able to add a book to the library")
	  	$scope.disableAdd = true;
	  } else {
	  	bookService.postBook(book);
	  }
	  $('#addBookForm').trigger("reset");
	};

	$scope.enableAdd = function(){
	 	$('#bookTitle').change(function(){
	 		$scope.disableAdd = false;
	 	});

	};
});