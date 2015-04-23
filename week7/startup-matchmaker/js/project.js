$(document).ready(function(){
	$("#hamburger").click(function(){
		$("#innernav").slideToggle(1000);
	});
});

$(window).resize(function(){
	if($(window).width() > 640) {
		$("#innernav").show();
	} else {
		$("#innernav").hide();
	}
}); 