
var yesButton;
var noButton;

document.getElementById("yesButton").onclick = sayYes;

function sayYes() {
  document.getElementById("yesButton").style.backgroundColor = "#46b54b";
  document.getElementById("yesButton").textContent = "+ 1";
  document.getElementById("noButton").style.backgroundColor = "#dadada";
  document.getElementById("noButton").textContent = "no";
}

document.getElementById("noButton").onclick = sayNo;

function sayNo() {
  document.getElementById("noButton").style.backgroundColor = "#ff6076";
  document.getElementById("noButton").textContent = "-1";
  document.getElementById("yesButton").style.backgroundColor = "#dadada";
  document.getElementById("yesButton").textContent = "yes";

}

// var wrapper;
// var blockbutton;

// document.getElementById("blockbutton").onclick = blockUser;

// function blockUser() {

// 	result = " <h1>USER BLOCKERS</h1> ";
// 	document.getElementById("wrapper").innerHTML = result;
// }

