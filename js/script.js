document.getElementsByClassName('price-board').onmouseover = function (event) {
	var target = event.target;
	if (target.className == 'icon-board') {
		var s = target.getElementsByClassName('icon-layer');
		closeMenu();
		s[0].style.display="block";
	}
}

document.onmouseover=function (event) {
	var target = event.target;
	console.log(event.target);
	if (target.className!='icon-board' && target.className!='icon-layer'){
		closeMenu();  
	}
}
function closeMenu() {
	var menu = document.getElementsByClassName('price-board');
	var subm = document.getElementsByClassName('icon-layer');
	for (var i=0; i <subm.length; i++) {
		subm[i].style.display="none";
	}
}
