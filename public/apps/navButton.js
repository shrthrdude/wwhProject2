var navButton = function(btnId){
	var arr = [];
	var navKids = $('#navDiv').children();
	for (i = 0; i < navKids.length; i++){
		var navBtn = navKids[i].id;
		arr.push(navBtn);
		document.getElementById(navBtn).style.backgroundColor = "#260058";
		document.getElementById(navBtn).style.color='white';
	}
	document.getElementById(btnId).style.backgroundColor='white';
	document.getElementById(btnId).style.color='#260058';
	window.location.href='#/' + btnId;
}