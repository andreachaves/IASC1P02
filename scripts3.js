var answerArray = new Array();
answerArray = ["LET", "STROKE", "NOLET"];

//the colour we're generating
var answer="LET";

function getScenario(){

document.getElementById('output').innerHTML = "If the straight path to the ball is free, but my opponent doesn't take the straight path and moves somewhat circular towards the ball (because he makes some slight mispredictions about where the ball will land), and THEN I'm in his way - whats the call?";

}

function pushButton(userAnswer){

if(answer == userAnswer){

  document.getElementById('output').innerHTML = "CORRECT!";
  console.log("CORRECT!");
  setTimeout(getAnswer(), 1000);

}
else{

  document.getElementById('output').innerHTML = "Game Over!";
}
}
