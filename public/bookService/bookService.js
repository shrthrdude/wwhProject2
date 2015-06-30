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

	this.updateBook = function(book){
		return $http({
		    method: 'PUT',
		    url: 'http://localhost:2015/library/' + product._id,
		    data: book
	  	});
 	};

	this.removeBook = function(id){
		return $http({
		    method:'DELETE',
		    url: 'http://localhost:2015/library/' + id
	  	});
	};
});