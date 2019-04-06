// this is the code which will be injected into a given page...

(function() {

	var ele = document.getElementById("anishimage");
	if(ele != null){
		ele.remove();
		return;
	}

	// This inserts an html file
	// var iframe  = document.createElement ('iframe');
	// iframe.src  = chrome.extension.getURL ('template.html');
	// document.getElementById('p').insertBefore(iframe);

	fetch(chrome.extension.getURL('template.html'))
    .then(response => response.text())
    .then(data => {
  		document.body.innerHTML = data + document.body.innerHTML;
        // other code
        // eg update injected elements,
        // add event listeners or logic to connect to other parts of the app
    }).catch(err => {
        // handle error
    });




})();
