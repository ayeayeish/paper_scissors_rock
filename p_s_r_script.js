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
