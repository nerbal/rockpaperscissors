const resultSelector = document.querySelector(".result");
const playerChoiceSelector = document.querySelector("#playerChoice");
const computerChoiceSelector = document.querySelector("#computerChoice");
const humanScoreSelector = document.querySelector("#player");
const computerScoreSelector = document.querySelector("#computer");
const buttonSelector = document.querySelectorAll(".button");
const resetGameSelector = document.querySelector(".reset");
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

resetGameSelector.addEventListener('click', () => {
    resetGame();
})

function getComputerChoice() {
    const choiceIndex = Math.floor(Math.random() * choices.length);
    return choices[choiceIndex];
}

// Play Game

function playRound(humanChoice, computerChoice) {
    playerChoiceSelector.textContent = `Player Chose: ${humanChoice}`;
    computerChoiceSelector.textContent = `Computer Chose: ${computerChoice}`;
    if (humanChoice != computerChoice) {
        if (humanChoice == "rock" && computerChoice == "paper"){
            resultSelector.textContent = `${computerChoice} beats ${humanChoice}, you lose!`;
            resultSelector.style.color = 'indianred';
            computerScore++;
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            resultSelector.textContent = `${computerChoice} beats ${humanChoice}, you lose!`;
            resultSelector.style.color = 'indianred';
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            resultSelector.textContent = `${computerChoice} beats ${humanChoice}, you lose!`;
            resultSelector.style.color = 'indianred';
            computerScore++;
        } else {   
            resultSelector.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            resultSelector.style.color = 'seagreen';
            humanScore++;
        }
        
    } else if (humanChoice == computerChoice) {
        resultSelector.textContent = "you draw!";
        resultSelector.style.color = 'black'
    }
    humanScoreSelector.textContent = humanScore;
    computerScoreSelector.textContent = computerScore;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    resultSelector.textContent = ``;
    humanScoreSelector.textContent = humanScore;
    computerScoreSelector.textContent = computerScore;
}