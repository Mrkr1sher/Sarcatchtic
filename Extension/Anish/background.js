// this is the background code...
//print("Code loaded")
alert("I havxx`x`e loaded")

chrome.browserAction.onClicked.addListener(function (currentTab) {
	// for the current tab, inject the "inject.js" file & execute it

	var url;

	// alert("something happened")

	chrome.tabs.getSelected(null, function(tab) {
		handleStuff(tab.url, currentTab);
	})



});

function handleStuff(tablink, currentTab){

	if(tablink.indexOf("chrome://") != -1){
		alert("Chrome link detected");
		return;
	}

	chrome.tabs.executeScript(currentTab.ib, {
		file: 'inject.js'
	});

}
