// this is the code which will be injected into a given page...

(function() {

	var ele = document.getElementById("anishimage");
	if(ele != null){
		ele.remove();
		return;
	}

	//This inserts an html file
	var iframe  = document.createElement ('iframe');
	iframe.classList.add('relative');
	relative = document.createElement('style');
	relative.innerHTML = '.relative { position: static, top: 0, left: 0 }';
	document.body.appendChild(relative);
	iframe.src  = chrome.extension.getURL ('template.html');
	document.body.appendChild(iframe);
  // document.body.insertBefore(iframe, document.body.getElementsByTagName('p')[3]);  // Insert <li> before the first child of <ul>

	// fetch(chrome.extension.getURL('template.html'))
  //   .then(response => response.text())
  //   .then(data => {
  // 		document.body.innerHTML = data + document.body.innerHTML;
  //       // other code
  //       // eg update injected elements,
  //       // add event listeners or logic to connect to other parts of the app
  //   }).catch(err => {
  //       // handle error
  //   });

})();
