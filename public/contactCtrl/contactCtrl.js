var app = angular.module('wwhApp');

app.controller('contactCtrl', function($scope, $http){

	$scope.sendMail = function(email){
		$http.post('/send', {
			from: email.sendFrom, // sender address
		    to: "shrthrdude@yahoo.com", // list of receivers
		    subject: email.subject, // Subject line
		    text: "Return address: " + email.sendFrom + "\n" + "\n" + email.text //plaintext 
		});
		$('#container').trigger("reset");
	}
});