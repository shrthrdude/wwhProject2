var app = angular.module('wwhApp');

app.directive('dirLibrary', function(){
	return {
		templateUrl: 'dirLibrary/dirLibrary.html',
		link: function(scope, element, attrs){
			element.on('click',function(){
				console.log(scope.selected[0].author);
				console.log(element);
				console.log($(scope.selected));
				
			});
		}
	}
})