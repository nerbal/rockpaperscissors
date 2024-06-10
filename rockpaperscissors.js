const resultSelector = document.querySelector(".result");
const humanScoreSelector = document.querySelector("#player");
const computerScoreSelector = document.querySelector("#computer");
const buttonSelector = document.querySelectorAll(".button");
const rockbutton = document.querySelector("#rock");

let humanScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];


buttonSelector.forEach((button) => {
    button.addEventListener('click', () => {
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    })
})




function getComputerChoice() {
    const choiceIndex = Math.floor(Math.random() * choices.length);
    return choices[choiceIndex];
}


// Play Game

function playRound(humanChoice, computerChoice) {
    if (humanChoice != computerChoice) {
        if (humanChoice == "rock" && computerChoice == "paper"){
            console.log(`${computerChoice} beats ${humanChoice}, you lose!`);
            computerScore++;
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log(`${computerChoice} beats ${humanChoice}, you lose!`);
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log(`${computerChoice} beats ${humanChoice}, you lose!`);
            computerScore++;
        } else {   
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        
    } else if (computerChoice == humanChoice) {
        console.log("you draw!");
    }
    console.log("loopbreak");
}
