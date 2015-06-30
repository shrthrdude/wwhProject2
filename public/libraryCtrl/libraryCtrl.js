var app = angular.module('wwhApp');

app.controller('libraryCtrl', function($scope, booksRef){
    
	$scope.books = booksRef
	// $scope.books.$loaded().then(function (books) {

 //  });

	$scope.addBook = function(title, author, ISBN){
		$scope.threads.$add({
			book: title,
			author: author,
			ISBN: ISBN
		})
	}



	$scope.filterOptions = {
        filterText: ''
  };

  $scope.selected = [];
  $scope.gridOptions = { 
      data: 'books',
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
