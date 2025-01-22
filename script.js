

function getComputerChoice()  {
    let computerChoice= Math.floor(Math.random() * 3);
    if (computerChoice === 2) {
        computerChoice = "rock";
        console.log("Computer choice is: " + computerChoice);
        return computerChoice;
    } else if (computerChoice === 1) {
        computerChoice = "paper";
        console.log("Computer choice is: " + computerChoice);
        return computerChoice;
    } else {
        computerChoice = "scissors";
        console.log("Computer choice is: " + computerChoice);
        return computerChoice;
    }
}
// console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt("PLease enter your choice: Rock, Paper or Scissors");
    console.log("Player choice is: " +humanChoice);
    return humanChoice.toLowerCase();
}
// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Draw!");
        return "Draw!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        let outcome = "You win! Rock beats Scissors";
        console.log(outcome);
        console.log("Player score: " +humanScore);
        return outcome;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        let outcome = "You lose! Scissors beats Paper";
        console.log(outcome);
        console.log("Computer score: " +computerScore);
        return outcome;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        let outcome = "You win! Scissors beats Paper";
        console.log(outcome);
        console.log("Player score: " +humanScore);
        return outcome;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        let outcome = "You lose! Rock beats Scissors";
        console.log(outcome);
        console.log("Computer score: " +computerScore);
        return outcome;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        let outcome = "You lose! Paper beats Rock";
        console.log(outcome);
        console.log("Computer score: " +computerScore);
        return outcome;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        let outcome = "You win! Paper beats Rock";
        console.log(outcome);
        console.log("Player score: " +humanScore);
        return outcome;
    }
  }
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

//   playRound(humanSelection, computerSelection);

  function playGame() {
    for (i=0; i<4; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log("Player Final Score: " +humanScore);
    console.log("Computer Final Score: " +computerScore);
    if (humanScore > computerScore) {
        console.log("Player wins the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a draw!");
    }
}

playGame(); 

