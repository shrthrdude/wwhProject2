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

	$scope.updateBook = function(book){
	  bookService.updateBook(book).then(function(res){
	    getBooks();
	  }, function(err){
	    console.log(err)
	  })
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
        $scope.newBook = $scope.selected[0];
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