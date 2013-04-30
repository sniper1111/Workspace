$(document).ready(function(){
	$("#keyup").keyup(function() {
		
		/** Moogle Ausrichtung **/
		$("h1").css("margin", "-150px 0px 0px -21px");
		$("h1").css("text-align", "left");
		$("h1").css("float", "left");
		$("h1").css("background", "#F3F3F3");
		$("h1").css("width", "103%");
		
		/** Alles Andere **/
		$(".buttons").hide();
		$(".eingabe").css("margin", "-139px 0px 0px -170px");
		$(".footer").css("margin", "551px 0px 0px 450px");
	});
});