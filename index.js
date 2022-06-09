const names = ["Rock", "Paper", "Scissors"];
let pointsComp;
let pointsPlayer;
let totalComp = 0;
let totalPlayer = 0;
let messg;
function computerPlay() {
  let result = names[(names.length * Math.random()) | 0];
  console.log(result);
  return result;
}
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

function game() {
  for (let i = 0; i < 5; i++) {
    selection(
      String(prompt("(Rock Paper Scissors) Enter your selection: ")),
      computerPlay()
    );
    if (pointsComp == "0" && pointsPlayer == "0") {
      totalComp += 0;
    } else if (pointsComp == "1" && pointsPlayer == "0") {
      totalComp += 1;
    } else if (pointsPlayer == "0" && pointsComp == "0") {
      totalPlayer += 0;
    } else if (pointsPlayer == "1" && pointsComp == "0") {
      totalPlayer += 1;
    }
  }
  if (totalPlayer > totalComp) {
    messg = "You Won!";
  } else if (totalComp > totalPlayer) {
    messg = "You Lose!";
  } else {
    messg = "You Draw!";
  }
  alert(`Game Over! Comp:${totalComp} You:${totalPlayer} :${messg}`);
}
game();
