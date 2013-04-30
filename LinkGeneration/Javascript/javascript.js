$(document).ready(function(){
	

	$("h1").each(function( index ) {
		//console.log( index + ": " + $(this).text() );
		$(".Sammlung > ul").append("<li><a href=\"#U" + index + "\">" + $(this).text() + "</a></li>");
		$(this).html("<a name=\"U" + index + "\">" + $(this).text() + "</a>");
	});
	
	
	$("<a href=\#top\>Scroll back to top!</a>").insertAfter("h1");
	$("p").css("background-color", "lightgreen");
	$("p").css("text-align", "center");
	$("p").css("font-weight", "bold"); // Schriftgewicht = font-weight!
	$(".Sammlung").css("text-align", "left");
	$("ul > li > a").css("color", "black");
	$("ul > li > a").css("text-decoration", "none");
	
	
	$("ul > li > a").hover(
		function () {
			$(this).css("text-decoration", "underline");
		},
		
		function () {
			$(this).css("text-decoration", "none");
	});

	
	$("h1").click(function() {
	    $(this).css("background-color", "lightgreen");
	    $(this).css("color", "#ffee99");
	});

	
});