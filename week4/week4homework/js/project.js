var red = document.getElementById("red").value;
var green = document.getElementById("green").value;
var blue = document.getElementById("blue").value;
var myColor = "rgb(" +red+ "," +green+ "," +blue+ ")"


function changeColor() {

	var myColor = document.getElementById("rgb").value;

	document.getElementById("colorfultext").style.backgroundColor = myColor;
	document.getElementById("colorfultext").innerHTML = myColor;
}




document.getElementById("colorbutton").onclick = changeColor;
