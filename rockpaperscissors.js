let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const choiceIndex = Math.floor(Math.random() * choices.length);
    return choices[choiceIndex];
}

function getHumanChoice() {
    let possibleChoices = ["rock", "paper", "scissors"];
    let humanChoice = '';


    while (true) {
        humanChoice = prompt("rock, paper, scissors?").toLowerCase();
        if (possibleChoices.includes(humanChoice)) {
            return humanChoice;
        } else {
            alert("Invalid choice, please try again.");
        }
    }
}

console.log(getHumanChoice());
console.log(getComputerChoice())