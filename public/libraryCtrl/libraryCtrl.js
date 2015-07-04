var app = angular.module('wwhApp');

app.controller('libraryCtrl', function($scope, booksRef){
    
	$scope.books = booksRef

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

  $scope.clearFilter = function(){
    $scope.filterOptions.filterText = '';
  };

  $scope.closeDetails = function(){
    $scope.show = false;
  }

  $scope.selected = [];
  $scope.gridOptions = { 
      data: 'books',
      afterSelectionChange: function (row, event) {
        $scope.show = true;
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
