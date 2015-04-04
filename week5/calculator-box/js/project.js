var a10;
var a20;
var a30;
var red;
var out;
var blue;
var n10;
var n20;
var n30;

var total = 0


document.getElementById("a10").onclick = addTen;

function addTen() {
	total = total + 10;
	document.getElementById("out").innerHTML = total;
}

document.getElementById("a20").onclick = addTwenty;

function addTwenty() {
	total = total + 20;
	document.getElementById("out").innerHTML = total;
}

document.getElementById("a30").onclick = addThirty;

function addThirty() {
	total = total + 30;
	document.getElementById("out").innerHTML = total;
}

document.getElementById("n10").onclick = subTen;

function subTen() {
	total = total - 10;
	document.getElementById("out").innerHTML = total;
}

document.getElementById("n20").onclick = subTwenty;

function subTwenty() {
	total = total - 20;
	document.getElementById("out").innerHTML = total;
}

document.getElementById("n30").onclick = subThirty;

function subThirty() {
	total = total - 30;
	document.getElementById("out").innerHTML = total;
}

// color

document.getElementById("blue").onclick = changeBlue;

function changeBlue() {
	document.getElementById("out").style.backgroundColor = "blue";
}

document.getElementById("red").onclick = changeRed;

function changeRed() {
	document.getElementById("out").style.backgroundColor = "red";
}

document.getElementById("out").onclick = clearBackground;

function clearBackground() {
	document.getElementById("out").style.backgroundColor = "transparent";
}





