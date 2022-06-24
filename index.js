const names = ["Rock", "Paper", "Scissors"];
let pointsComp;
let pointsPlayer;
let totalComp = 0;
let totalPlayer = 0;
let messg;
function computerPlay() {
  let result = names[(names.length * Math.random()) | 0];
  document.getElementById('compselectout').innerHTML=result;
  return result;
}
document.body.addEventListener("click", (event) => {
  if (event.target.nodeName == "BUTTON") {
    selection(event.target.className, computerPlay());
  } 
});

function selection(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    pointsComp = "0";
    pointsPlayer = "0";
    alert("Draw!");
  } else if (playerSelection.match(/rock/i) && computerSelection == "Paper") {
    pointsComp = "1";
    pointsPlayer = "0";
    alert("You Lose! Paper beats Rock");
  } else if (playerSelection.match(/paper/i) && computerSelection == "Rock") {
    pointsComp = "0";
    pointsPlayer = "1";
    alert("You Win! Paper beats Rock");
  } else if (
    playerSelection.match(/rock/i) &&
    computerSelection == "Scissors"
  ) {
    pointsComp = "0";
    pointsPlayer = "1";
    alert("You Win! Rock beats Scissors");
  } else if (
    playerSelection.match(/paper/i) &&
    computerSelection == "Scissors"
  ) {
    pointsComp = "1";
    pointsPlayer = "0";
    alert("You Lose! Scissors beat Paper");
  } else if (
    playerSelection.match(/scissors/i) &&
    computerSelection == "Rock"
  ) {
    pointsComp = "1";
    pointsPlayer = "0";
    alert("You Lose! Rock beats Scissors");
  } else if (
    playerSelection.match(/scissors/i) &&
    computerSelection == "Paper"
  ) {
    pointsComp = "0";
    pointsPlayer = "1";
    alert("You Win! Scissors beat Paper");
  } else {
    pointsComp = "0";
    pointsPlayer = "0";
    alert("Invalid input!");
  }
}


