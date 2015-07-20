var app = angular.module('wwhApp');

app.controller('libraryCtrl', function($scope, $http, booksRef, bookService){
    
	$scope.books = booksRef

	$scope.filterOptions = {
        filterText: ''
  };

  $scope.clearFilter = function(){
    $scope.filterOptions.filterText = '';
  };

  $scope.closeDetails = function(){
    $scope.show = false;
  };

  function getBooks(){
      bookService.getBooks().then(function(res){
        $scope.books = res;
      }, function(err){
        console.log(err);
      })
  };

  $scope.reserveBook = function(reserve){
    reserve.reserve = true;

    bookService.reserveBook(reserve).then(function(res){
      getBooks();
    }, function(err){
      console.log(err)
    });

    var bookInfo = "Title: " + reserve.book + "\n" + 
    "Author: " + reserve.author + "\n" +
    "ISBN: " + reserve.ISBN + "\n" +
    "Checkout Name: " + reserve.chkName + "\n" +
    "Checkout Email: " + reserve.chkEmail

    $http.post('/send', {
      from: "Reservation", // sender address
      to: "shrthrdude@yahoo.com", // list of receivers
      subject: "New Reservation Request", // Subject line
      text: bookInfo //plaintext 
    });
  };

  $scope.selected = [];
  $scope.reserve = "";
  $scope.gridOptions = { 
      data: 'books',
      enableColumnResize: true,
      selectedItems: $scope.selected,
      multiSelect: false,
      filterOptions: $scope.filterOptions,
      afterSelectionChange: function (row, event) {
        $scope.show = true;
        $scope.disableReserve = false;
        $scope.reserve = $scope.selected[0];
        if ($scope.reserve){
          if ($scope.reserve.hasOwnProperty("reserve")){
            if ($scope.reserve.reserve === true){
              $scope.disableReserve = true;
            };
          };
        };
      },
      height: '200px',
      sortInfo: {fields: ['Book', 'Author', 'ISBN'], directions: ['asc']},
      columnDefs: [
        {field: 'book', displayName: 'Book'},
        {field: 'author', displayName: 'Author'},
        {field: 'ISBN', displayName: 'ISBN'},
      ]
	};
});
