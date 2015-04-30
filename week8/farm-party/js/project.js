$(document).ready(function(){

	$("#lamb").click(function(){
		$(this).animate({
			right: "20%"
		}, 1000, "easeOutElastic").animate({
			right: "40%"
		}, 2000, "easeInBounce");
		}
	);
	$("#horse").click(function(){
		$(this).delay(3000).animate({
			left: "100%"
		}, 2000, "easeInBounce");
		}
	);
	$("body").mouseover(function(){
		$("#sun").animate({
			right: "80%",
			top: "-20%"
		}, 5000, "easeInCubic");
		}
	);
	$("#farm").click(function(){
		$(this).animate({
			bottom: "-140%"
		}, 1000, "easeOutBounce"). animate({
			bottom: "-200%"
		}, 500, "easeOutBounce");
		}
	);
	$("body").click(function(){
		$("#pig").fadeIn().animate({
			top: "150%",
		}, 1000, "easeInQuint");
		}
	);

});
