var app = angular.module('wwhApp');

app.controller('maintCtrl', function($scope){
    
    document.getElementById("bookAdd").disabled = true;
    document.getElementById("bookUpdate").disabled = true;
    document.getElementById("bookDelete").disabled = true;

    // add prompt for password
    var correctPwd = false;

    while (correctPwd === false) {
      var adminPwd = prompt("Please enter the admin password","");

      if (adminPwd === "spinning") {

        correctPwd = true;

        document.getElementById("bookAdd").disabled = false;
    	document.getElementById("bookUpdate").disabled = false;
    	document.getElementById("bookDelete").disabled = false;

      } else {
        if (adminPwd !== null){
          if (confirm("Incorrect password entered." + "\n" + "Click 'OK' to try again." + "\n" + "Click 'Cancel' to quit.") === true) {
            correctPwd = false;
          } else {
            correctPwd = true;
          }
        } else {
          correctPwd = true;
        }
        
      }
    }

});