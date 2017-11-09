//Sets the initial colours of the three elements on page load
document.getElementById("blue").style.color="blue";
document.getElementById("green").style.color="green";
document.getElementById("red").style.color="red";


//A function to change colours of elements when called
function mix(){

	var theFirst = "#00BB00";
	var theSecond = "BB9320";
	var theThird = "#AB00FF";

	document.getElementById("blue").style.color=theFirst;
	document.getElementById("green").style.color=theSecond;
	document.getElementById("red").style.color=theThird;

}
