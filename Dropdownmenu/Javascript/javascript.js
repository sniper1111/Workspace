$(document).ready(function() {
	
	$("#nav li:has(ul)").hover(function(){
		
		$(this).find("ul").slideDown(0);
	
	}, function(){
		
		$(this).find("ul").slideUp(0);
	});
	
});