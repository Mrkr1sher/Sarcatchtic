// this is the code which will be injected into a given page...

(function() {

	var ele = document.getElementById("anishimage");
	if(ele != null){
		ele.remove();
		return;
	}

	// just place a div at top right
	var div = document.createElement('img');
	div.style.position = 'fixed';
	div.style.bottom = 0;
	div.style.left = 0;
	div.id = "anishimage"
	div.style.alignmentBaseline = "left";
	div.src = "chrome-extension://efonphfbgfoeplnhhnpgkemiphglmcnh/anish.png";
	document.body.appendChild(div);
	div.style.zIndex = 100;

})();