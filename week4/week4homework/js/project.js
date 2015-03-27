function changeColor() {
	var red = document.getElementById("red").value;
	var green = document.getElementById("green").value;
	var blue = document.getElementById("blue").value;
	var myColor = "rgb(" +red+ "," +green+ "," +blue+ ")"

	document.getElementById("colorfultext").value = myColor;
	document.getElementById("colorfultext").style.backgroundColor = myColor;
	document.getElementById("colorfultext").innerHTML = myColor;
	document.body.style.backgroundColor = myColor;
}

document.getElementById("colorbutton").onclick = changeColor;




