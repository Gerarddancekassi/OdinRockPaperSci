// Global variable to store computer choice
var computerChoice;
player = document.querySelector("#player-choice");
finalResult = document.querySelector("#result-text");
let playerChoice = "";
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

// Function to generate random computer choice
function generateRandomChoice() {
  var choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}


// Function to update the computer's choice
function updateComputerChoice() {
  computerChoice = generateRandomChoice();
  let ComputerDom = document.querySelector("#computer-choice");
  ComputerDom.textContent = computerChoice;
}

// Function to compare player and computer choices
function compareChoices(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Tie";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    return "Player Wins";
  } else {
    return "Computer Wins";
  }
}



// Add event listeners to buttons
rock.addEventListener("click", function () {
  playerChoice = "Rock";
  player.textContent = playerChoice;
  updateComputerChoice(); // Generate computer choice
  let result = compareChoices(playerChoice, computerChoice);
  finalResult.textContent = result;
});

paper.addEventListener("click", function () {
  playerChoice = "Paper";
  player.textContent = playerChoice;
  updateComputerChoice();
  let result = compareChoices(playerChoice, computerChoice);
  finalResult.textContent = result;
});

scissors.addEventListener("click", function () {
  playerChoice = "Scissors";
  player.textContent = playerChoice;
  updateComputerChoice();
  let result = compareChoices(playerChoice, computerChoice);
  finalResult.textContent = result;
});
