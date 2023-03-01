function getComputerChoice() {
    let computerChoice = Math.random() * 3;

    if (computerChoice <= 1) {
        console.log("Rock");
    } else if (computerChoice <= 2) {
        console.log("Paper");
    } else {
        console.log("Scissors");
    }
}

function playRpsRound() {
    
}