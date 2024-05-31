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

let humanScore = 0;
let computerScore = 0;

function playGame() {
    const numRounds = 5;

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
    }

    for(let i = 0; i < numRounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Your score is ${humanScore} vs Computers ${computerScore}`)

        if (humanSelection == computerSelection && i > 0) {
            i--;
        }
    }
}

playGame();

if (humanScore > computerScore) {
    console.log("Congratulations you win!");
    console.log(`Your Score: ${humanScore} - Computer Score ${computerScore}`);
} else {
    console.log("You lose :(");
    console.log(`Your Score: ${humanScore} - Computer Score ${computerScore}`);
}