// this is the background code...

chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it

	tablink =

	chrome.tabs.getSelected(null,function(tab) {
		var tablink = tab.url;
	});
	
	print(tablink)
l
	chrome.tabs.executeScript(tab.ib, {
		file: 'inject.js'
	});
});