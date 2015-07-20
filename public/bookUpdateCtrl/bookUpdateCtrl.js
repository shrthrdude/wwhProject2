var app = angular.module('wwhApp');

app.controller('bookUpdateCtrl', function($scope, bookService, booksRef){
    $scope.books = booksRef

  function getBooks(){
  		bookService.getBooks().then(function(res){
    		$scope.books = res;
  		}, function(err){
    		console.log(err);
  		})
	};

	$scope.updateBook = function(update){

    for (var i = 0; i < document.editBookForm.chkReserve.length; i++) {
        if (document.editBookForm.chkReserve[i].checked) {
          reserveChosen = document.editBookForm.chkReserve[i].value
        };
    };

    for (var i = 0; i < document.editBookForm.chkCheckout.length; i++) {
        if (document.editBookForm.chkCheckout[i].checked) {
          checkoutChosen = document.editBookForm.chkCheckout[i].value
        };
    };

    // set reserve and checkout radio buttons
    update.reserve = reserveChosen;
    update.chkCheckout = checkoutChosen;

    //update the book

	  bookService.updateBook(update).then(function(res){
	    getBooks();
	  }, function(err){
	    console.log(err)
	  });

    // This flips the true/false fields back to correct display after update
   
    update.reserve = !reserveChosen;
    update.chkCheckout = !checkoutChosen;
  
	};

	$scope.filterOptions = {
    filterText: ''
  };

  $scope.clearFilter = function(){
    $scope.filterOptions.filterText = '';
  };
    
  $scope.selected = [];
  $scope.gridOptions = { 
      data: 'books',
      afterSelectionChange: function (row, event) {
        $scope.update = $scope.selected[0];
      },
      enableColumnResize: true,
      selectedItems: $scope.selected,
      multiSelect: false,
      filterOptions: $scope.filterOptions,
      height: '200px',
      sortInfo: {fields: ['Book', 'Author', 'ISBN'], directions: ['asc']},
      columnDefs: [
        {field: 'book', displayName: 'Book'},
        {field: 'author', displayName: 'Author'},
        {field: 'ISBN', displayName: 'ISBN'},
      ]
	};
});