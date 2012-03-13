// Search urls for sites. % is placeholder for the searchquery
var urls = 
	{"boeken":{"url":"http://en.bookfi.org/s/?q=%"},
	 "muziek":{"url":"http://grooveshark.com/#!/search?q=%"},
	 "films":{"url":"https://thepiratebay.se/search/%/0/99/200"},
	 "bladmuziek":{"url":"http://www.google.com/search?q=site:imslp.org+%"},
	 "wiki":{"url":"http://nl.wikipedia.org/wiki/Special:Search?search=%"},
	 "fotos":{"url":"http://www.flickr.com/search/?q=%&l=cc&ct=0&mt=all&adv=1"}
	}


// Window loaded
window.onload = function(){
	// if url contains for example #bladmuziek
	if (self.document.location.hash) {
		// change typeButton and type to #bladmuziek
		$(self.document.location.hash).click();
		if(urls[type]){
			$("#zoek").click();
		}
	}else{
		$("#zoek").click();
		$("#boeken").click();	
	}
}


// If dropdownmenu option is selected
$(".dropdown-menu a").click(
	function() {
		//change button to selection
		type = $(this).attr('id');
		$("#typeButton").html($(this).html());
		$("#typeButton i").addClass("icon-white");
});

// If click on searchButton
$("#searchButton").click(
	function() {
		// Open new window with prescribed urls + the type and the input value
		var url = urls[type].url
		window.open(url.replace("%",searchField.value),'_blank');
	});
