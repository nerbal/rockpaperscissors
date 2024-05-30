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

function playRound(humanChoice, computerChoice) {
    if (humanChoice != computerChoice) {
        if (humanChoice == "rock" && computerChoice == "paper"){
            console.log(`${computerChoice} beats ${humanChoice}, you lose!`);
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log(`${computerChoice} beats ${humanChoice}, you lose!`);
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log(`${computerChoice} beats ${humanChoice}, you lose!`);
        } else { console.log(`You win! ${humanChoice} beats ${computerChoice}`);}
        
    } else if (computerChoice == humanChoice) {
        console.log("you draw!");
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);