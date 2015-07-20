var app = angular.module('wwhApp');

app.service('bookService', function($http, $q){

	this.getBooks = function(){
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: 'http://localhost:2015/library'
		})
		.then(function(res){
			deferred.resolve(res.data);
		}, function(err){
			deferred.reject(err)
		})
		return deferred.promise;
	};	

	this.postBook = function(book){
		return $http({
	    	method: 'POST',
	    	url: 'http://localhost:2015/library',
	    	data: book
  		});
	};

	this.updateBook = function(update){
		return $http({
		    method: 'PUT',
		    url: 'http://localhost:2015/library/' + update._id,
		    data: update
	  	});
 	};

	this.removeBook = function(id){
		return $http({
		    method:'DELETE',
		    url: 'http://localhost:2015/library/' + id
	  	});
	};

	this.reserveBook = function(reserve){
		return $http({
		    method: 'PUT',
		    url: 'http://localhost:2015/library/' + reserve._id,
		    data: reserve
	  	});
 	};

 	// this.checkoutBook = function(checkout){
		// return $http({
		//     method: 'PUT',
		//     url: 'http://localhost:2015/library/' + checkout._id,
		//     data: checkout
	 //  	});
 	// };
});

