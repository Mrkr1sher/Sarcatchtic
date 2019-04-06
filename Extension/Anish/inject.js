// this is the code which will be injected into a given page...


var outsideList;

(function() {

	var ele = document.getElementById("anishimage");
	if(ele != null){
		ele.remove();
		return;
	}

	var typingTimer;
	var doneTypingTimer = 1000;


	var textAreaList = document.getElementsByTagName("textarea");
	outsideList = textAreaList;

	for(var i = 0; i < textAreaList.length;i++){

		textAreaList[i].oninput = function(){
				if(typingTimer != undefined){
					clearTimeout(typingTimer)
				}
				typingTimer = setTimeout(function(){
					submitInput(i);
				},doneTypingTimer)

		};

	}

})();

function submitInput (textAreaNumber){

	textArea = outsideList[textAreaNumber - 1]

	var http = new XMLHttpRequest();
	var url = 'https://teandfriends.rocks/home';
	var parms = '?input=' + textArea.value;

	http.open("GET",url + parms, true)

	http.send(null)

	var iframe  = document.createElement ('iframe');
    iframe.classList.add('relative');
    relative = document.createElement('style');
    relative.innerHTML = '.relative {position: fixed;top: 20px;right: 20px;width: 260px;height: 145px;z-index: 999;background: #008080;}';
    document.body.appendChild(relative);
    iframe.src  = chrome.extension.getURL ('box.html');
	document.body.insertBefore(iframe, document.body.getElementsByTagName('p')[3]);
	
	//alert(iframe.childNodes	)

	iframe.getElementById("feedback").value = "adwasd"


	
}	