function getComputerChoice() { // Computer Choice Function
    let computerChoice = Math.floor(Math.random() * 3);
  
    if (computerChoice === 0) {
      return "ROCK";
    } else if (computerChoice === 1) {
      return "PAPER";
    } else {
      return "SCISSORS";
    }
  }
  

  // Defining each button and and event listeners to the buttons 
  const paperButton = document.querySelector(".paper");
  const scissorsButton = document.querySelector(".scissors");
  const rockButton = document.querySelector(".rock");
  
  paperButton.addEventListener("click", function() {
    playRound("PAPER");
  });
  
  scissorsButton.addEventListener("click", function() {
    playRound("SCISSORS");
  });
  
  rockButton.addEventListener("click", function() {
    playRound("ROCK");
  });

const updatePlayerScore = document.querySelector(".update-player");
const updateComputerScore = document.querySelector(".update-computer");

const changeAlert = document.querySelector(".alert");

let playerScore = 0;
let computerScore = 0;

  function playRound(playerSelection) { // Play Round
    let computerSelection = getComputerChoice();
    
    if (playerSelection === computerSelection) {
      changeAlert.textContent = ("Computer Picked " + computerSelection + ", you picked " + playerSelection + ". You tied!");
    }
  
    if (
      (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
      (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
      (playerSelection === "PAPER" && computerSelection === "ROCK")
    ) {
      changeAlert.textContent = ("Computer Picked " + computerSelection + ", you picked " + playerSelection + ". You are the winner!");
      playerScore++;
      updatePlayerScore.textContent = playerScore;
    }
  
    if (
      (playerSelection === "SCISSORS" && computerSelection === "ROCK") ||
      (playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
      (playerSelection === "ROCK" && computerSelection === "PAPER")
    ) {
      changeAlert.textContent = ("Computer Picked " + computerSelection + ", you picked " + playerSelection + ". You are the loser!");
      computerScore++;
      updateComputerScore.textContent = computerScore;
    }

    if (playerScore === 5) {
      alert("Game over - you scored 5, computer scored " + computerScore + " - you are the winner!");
      updateComputerScore.textContent = 0;
      updatePlayerScore.textContent = 0;
      changeAlert.textContent = "Click a button, you know you want to!";
      playerScore = 0;
      computerScore = 0;
    }
    
    if (computerScore === 5) {
      alert("Game over - computer scored 5, you scored " + playerScore + " - you are the loser!");
      updateComputerScore.textContent = 0;
      updatePlayerScore.textContent = 0;
      changeAlert.textContent = "Click a button, you know you want to!";
      playerScore = 0;
      computerScore = 0;
    }
  
}



