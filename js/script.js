document.getElementById('close-board').onmouseover = function(event) {
	var target = event.target;
	if (target.className == 'price-board') {
		var s = target.getElementsByClassName('icon-board');
		closeMenu();
		s[0].style.display='block';
	}
}
document.onmouseover=function(event) {
	var target = event.target;
	console.log(event.target);
	if (target.className!='price-board' && target.className!='icon-board'){
		closeMenu();  
	}
}
function closeMenu() {
	var subm = document.getElementsByClassName('icon-board');
	for (var i=0; i <subm.length; i++) {
		subm[i].style.display="none";
	}

}
