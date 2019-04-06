// this is the code which will be injected into a given page...

(function() {

	var ele = document.getElementById("anishimage");
	if(ele != null){
		ele.remove();
		return;
	}

	// This inserts an html file
	var iframe  = document.createElement ('iframe');
	iframe.src  = chrome.extension.getURL ('template.html');
	document.body.appendChild (iframe);

	// fetch(chrome.extension.getURL('template.html'))
  //   .then(response => response.text())
  //   .then(data => {
	// 			var allParas = document.getElementsByTagName('h1');
	// 			var num = allParas[0];
  //       document.body.innerHTML = document.body.innerHTML + data;
  //       // other code
  //       // eg update injected elements,
  //       // add event listeners or logic to connect to other parts of the app
  //   }).catch(err => {
  //       // handle error
  //   });

	// just place a div at top right
	var div = document.createElement('p');
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
	div.id = "anishimage"

	div.textContent = "Whatever can be inserted in"

	document.body.appendChild(div);
	div.style.zIndex = 100;




})();
