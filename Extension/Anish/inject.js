// this is the code which will be injected into a given page...

(function() {

	var ele = document.getElementById("anishimage");
	if(ele != null){
		ele.remove();
		return;
	}

	//This inserts an html file
	var xmlHttp = null;

	xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", chrome.extension.getURL ("src/inject/inject.html"), false );
	xmlHttp.send( null );

	var inject  = document.createElement("div");
	inject.innerHTML = xmlHttp.responseText
	document.body.insertBefore (inject, document.body.firstChild);

	// just place a div at top right
	var div = document.createElement('p');
	div.style.position = 'fixed';
	div.style.bottom = 0;
	div.style.left = 0;
	div.id = "anishimage"

	div.textContent = "Whatever can be inserted in"

	document.body.appendChild(div);
	div.style.zIndex = 100;




})();
