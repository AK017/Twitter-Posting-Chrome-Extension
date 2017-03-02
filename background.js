//alert();

//to create a right click menu use a chrome api chrome.contextMenus.create

var contextsList = ["selection","link","image","page"];

for(i =0; i<contextsList.length; i++){

	var context = contextsList[i];
	var titleX = "Twitter Toolkit: Share this "+context+" on your twitter profile";
	chrome.contextMenus.create({title: titleX, contexts: [context], onclick: myFunction, id: context});
}

// now instead of the selectedText we have various things to control

function myFunction(data){
	//alert("You just clicked me!! selection is: "+selectedText.selectionText);
	switch(data.menuItemId){
		case 'selection' :
		chrome.windows.create({url: "https://twitter.com/intent/tweet?text="+encodeURIComponent(data.selectionText), type: "panel" }); // panel removes all the unwanted data like URL and other info
		break;
		case 'link':
		chrome.windows.create({url: "https://twitter.com/intent/tweet?url="+encodeURIComponent(data.linkUrl), type: "panel" });
		break;
		case 'image':
		chrome.windows.create({url: "https://twitter.com/intent/tweet?url="+encodeURIComponent(data.srcUrl), type: "panel" });
		break;
		case 'page':
		chrome.windows.create({url: "https://twitter.com/intent/tweet?text="+encodeURIComponent(tab.pageUrl)+"&url"+(data.pageUrl), type: "panel" });
		break;
	}

// we can also use tabs.create  but we are using window to show the tweet in a new window
//	chrome.tabs.create({url: "https://twitter.com/intent/tweet?text="+selectedText.selectionText})

}


