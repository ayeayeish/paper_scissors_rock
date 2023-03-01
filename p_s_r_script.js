function getComputerChoice() {
    let computerChoice = Math.random() * 3;
    if (computerChoice <= 1) {
        computerChoice = "Paper";
    } else if (computerChoice <= 2) {
        computerChoice = "Scissors";
    } else {
        computerChoice = "Rock";
    }

    console.log(computerChoice);
} 
