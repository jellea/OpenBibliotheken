// Search urls for sites. % is placeholder for the searchquery
var urls = 
	{"boeken":{"url":"http://en.bookfi.org/s/?q=%"},
	 "muziek":{"url":"http://grooveshark.com/#!/search?q=%"},
	 "films":{"url":"http://translate.googleusercontent.com/translate_c?hl=nl&ie=UTF8&sl=en&tl=nl&u=http://thepiratebay.se/search/%/0/99/200"},
	 "bladmuziek":{"url":"https://www.google.com/search?q=site:imslp.org+%"},
	 "wiki":{"url":"http://nl.wikipedia.org/wiki/Special:Search?search=%"},
	 "fotos":{"url":"http://www.flickr.com/search/?q=%&l=cc&ct=0&mt=all&adv=1"},
	 "piratebay":{"url":"http://translate.googleusercontent.com/translate_c?hl=nl&ie=UTF8&sl=en&tl=nl&u=http://thepiratebay.se/search/%/"}
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

$(".nav a").click(
	function(){
		$('.container').hide();
		$($(this).attr('href')+"page").show();
		$(".active").removeClass('active');
		$(this).parent().addClass("active");
		if ($(this).attr('href') === "#bronnen"){
		$("#bronnenpagecont").replaceWith("<iframe src=\"https://docs.google.com/spreadsheet/pub?key=0AsOOrkVrzWxLdF9QdGtoUy14d1ZGZWFSRUNEVDVYdXc&output=html&widget=true\" width=\"100%\" height=\"500px\"></iframe>");// lazy load for google docs	
		}
});

// If dropdownmenu option is selected
$(".dropdown-menu a").click(
	function() {
		//change button to selection
		type = $(this).attr('id');
		$("#typeButton").html($(this).html()+"  <span class='caret'></span>");
		$("#typeButton i").addClass("icon-white");
});

// If click on searchButton
$("#searchButton").click(
	function() {
		// Open new window with prescribed urls + the type and the input value
		var url = urls[type].url;
		window.open(url.replace("%",$("#searchField").val()),'_blank');
	});
