// Global variable to store computer choice
var computerChoice;

function generateRandomChoice() {
  var choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function updateComputerChoice() {
  computerChoice = generateRandomChoice(); // Store the result in a global variable
  $("#computer-choice").attr("src", "/images/" + computerChoice + ".png");
}

function compareChoices(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Tie";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "Player Wins";
  } else {
    return "Computer Wins";
  }
}

function updateResult(playerChoice, computerChoice) {
  var resultText = compareChoices(playerChoice, computerChoice);
  $("#result-text").text(resultText);
}

// Event handlers
$("#rock").on("click", function() {
  var playerChoice = "rock";
  updateComputerChoice(); // Update and store computer choice
  updateResult(playerChoice, computerChoice); // Use the global computerChoice
});

$("#paper").on("click", function() {
  var playerChoice = "paper";
  updateComputerChoice(); // Update and store computer choice
  updateResult(playerChoice, computerChoice); // Use the global computerChoice
});

$("#scissors").on("click", function() {
  var playerChoice = "scissors";
  updateComputerChoice(); // Update and store computer choice
  updateResult(playerChoice, computerChoice); // Use the global computerChoice
});

// Initialize the computer's choice when the page loads
updateComputerChoice();
