document.getElementById("close-board").onmouseover = function(event) {
	var target = event.target;
	if (target.className == 'price-board' || target.className == 'icon-board') {
		var s = target.getElementsByClassName('icon-board');
		closeMenu();
		s[0].style.display='block';
	}
}
document.getElementById("text-price").onmouseover = function(event) {
	var target = event.target;
	if (target.className == 'text-price') {
		var s = target.getElementsByClassName('icon-board');
		closeText();
		s[0].style.display='none';
	}
}
document.onmouseover=function(event) {
	var target = event.target;
	console.log(event.target);
	if (target.className!='price-board' && target.className!='icon-board' && target.className!='text-price'){
		closeMenu(); 
		openText();
	}
}
function closeMenu() {
	var subm = document.getElementsByClassName("icon-board");
	for (var i=0; i <subm.length; i++) {
		subm[i].style.display="none";
	}

}
function closeText() {
	var text = document.getElementsByClassName("text-price");
	for (var i=0; i <text.length; i++) {
		text[i].style.display="none";
	}

}
function openText() {
	var text = document.getElementsByClassName("text-price");
	for (var i=0; i <text.length; i++) {
		text[i].style.display="block";
	}

}