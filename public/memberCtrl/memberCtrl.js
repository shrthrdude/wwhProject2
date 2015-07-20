var app = angular.module('wwhApp');

app.controller('memberCtrl', function($scope, $http){
    
    $scope.sendMemForm = function(member) {

        var typeChosen = "";
        var emailChosen = "";
        var pubChosen = "";
        var newsChosen = "";
        var topicsChosen = "";

    	for (var i = 0; i < document.memberForm.memberRadio.length; i++) {
    		if (document.memberForm.memberRadio[i].checked) {
    			typeChosen = document.memberForm.memberRadio[i].value;
    		};
    	};
    	for (var i = 0; i < document.memberForm.memberNews.length; i++) {
    		if (document.memberForm.memberNews[i].checked) {
    			emailChosen = document.memberForm.memberNews[i].value;
    		};
    	};
    	for (var i = 0; i < document.memberForm.memberPub.length; i++) {
    		if (document.memberForm.memberPub[i].checked) {
    			pubChosen = document.memberForm.memberPub[i].value;
    		};
    	};
    	for (var i = 0; i < document.memberForm.memberGet.length; i++) {
    		if (document.memberForm.memberGet[i].checked) {
    			newsChosen = document.memberForm.memberGet[i].value;
    		};
    	};
 
        for (var i = 0; i < document.memberForm.memberTopics.length; i++) {
            if (document.memberForm.memberTopics[i].checked) {
                topicsChosen = topicsChosen + document.memberForm.memberTopics[i].value + "\n";
            };
        };

 		var memberInfo = "Application Type: " + typeChosen + "\n" + "\n" +
        "Name: " + member.name + "\n" + "\n" +
        "Address: " + member.address + "\n" + "\n" +
        "City: " + member.city + "\n" + "\n" +
        "State: " + member.state + "\n" + "\n" +
        "Zip Code: " + member.zip + "\n" + "\n" +
        "Home Phone: " + member.homePhn + "\n" + "\n" +
        "Work Phone: " + member.workPhn + "\n" + "\n" +
        "Cell Phone: " + member.cellPhn + "\n" + "\n" +
        "Email Address: " + member.email + "\n" + "\n" +
        "OK to pubish in our directory: " + pubChosen + "\n" + "\n" +
        "Would you like to join the email list: " + emailChosen + "\n" + "\n" +
        "How would you prefer to receive the monthly newsletter: " + newsChosen + "\n" + "\n" +
        "How long have you been spinning: " + member.spinTime + "\n" + "\n" +
 		"What is your favorite fiber to spin: " + member.favFiber + "\n" + "\n" +
        "Do you own any fiber animals: " + member.animalYesNo + "\n" + "\n" +
        "What are they: " + member.animalTypes + "\n" + "\n" +
        "What spinning wheel and other fiber equipment do you have: " + member.equip + "\n" + "\n" +
        "List some meeting topics that would be interest to you and/or new techniques you would like to learn: " + member.topics + "\n" + "\n" +
        "What activities would you like to help with: " + "\n" +
        topicsChosen
        // "  State Fair: " + member.stateFair + "\n" +
        // "  Spinning Saturday: " + member.spinSat + "\n" +
        // "  Fiber Festival: " + member.fiberFest + "\n" +
        // "  Spinning Demo: " + member.spinDemo + "\n" +
        // "  Member Directory: " + member.memberDir + "\n" +
        // "  Teaching New Spinners: " + member.teachSpin + "\n" +
        // "  Retreat: " + member.retreat + "\n" +
        // "  Library: " + member.memberLib + "\n" +
        // "  Workshops: " + member.workshops + "\n" +
        // "  Fundraising: " + member.fundRaise + "\n" +
        // "  Newsletter Articles: " + member.memberNews + "\n" +
        // "  Other: " + member.fiberFest + "\n" + "\n" +
        "  Describe other: " + member.otherText

    	$http.post('/send', {
			from: "New Membership Application", // sender address
		    to: "shrthrdude@yahoo.com", // list of receivers
		    subject: "New Membership Application", // Subject line
		    text: memberInfo //plaintext 
		});

    	$('#membershipForm').trigger("reset");
    };
});