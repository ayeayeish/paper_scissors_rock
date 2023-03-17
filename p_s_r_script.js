function getComputerChoice() {
    let computerChoice = Math.random() * 3;

    if (computerChoice <= 1) {
        return "ROCK";
    } else if (computerChoice <= 2) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}


function gameOutOfFive() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

    let playerSelection = prompt("Pick PAPER, SCISSORS, or ROCK");
    let computerSelection = getComputerChoice();
    playerSelection = playerSelection.toUpperCase();

        
    if (playerSelection === computerSelection) {
        alert("You tied!");
    }

    if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") 
    ) {
        alert("You are the winner!");
        playerScore++;
    } 

    if (
        (playerSelection === "SCISSORS" && computerSelection === "ROCK") ||
        (playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
        (playerSelection === "ROCK" && computerSelection === "PAPER") 
     ) {
        alert("You are the loser!");
        computerScore++;
    } 

}

    if (playerScore < computerScore) {
    console.log("You lose. Your Score is: " + playerScore + ". Your opponents score is: " + computerScore + ".");
    } else if (playerScore > computerScore) {
        console.log("You Win. Your Score is: " + playerScore + ". Your opponents score is: " + computerScore + ".");
    } else {
        console.log("You tied. Your Score is: " + playerScore + ". Your opponents score is: " + computerScore + ".");
    }
}

