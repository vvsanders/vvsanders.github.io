
$(document).ready(function(){
	$("#submit").click(function(){
		var result = $("#paragraphs").val();
		// // $(".ipsum").show("<p>");
		console.log(result);
		$(".ipsum").show();
		// $(".ipsum p:eq(3)").show();
		// $(".ipsum p:eq(" + result + ")").show();


		for (i = 0; i < result; i++) {
		   	$(".ipsum p:eq(" + i + ")").show();
		   	console.log("I fired");
		}
	});

});