document.getElementById('close-board').onmouseover = function(event) {
	var target = event.target;
	if (target.className == 'icon-board') {
		var s = target.getElementsByClassName('icon-board');
		closeMenu();
		s[0].style.display='block';
	}
}

document.onmouseover=function(event) {
	var target = event.target;
	console.log(event.target);
	if (target.className!='icon-board' && target.className!='icon-layer'){
		closeMenu();  
	}
}
function closeMenu() {
	var menu = document.getElementById('close-board');
	var subm = document.getElementsByClassName('icon-board');
	for (var i=0; i <subm.length; i++) {
		subm[i].style.display="none";
	}
}
