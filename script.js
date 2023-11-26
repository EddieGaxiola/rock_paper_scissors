// generates random choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    if(randomNumber == 1) {
        return "Rock";
    }
    else if(randomNumber == 2) {
        return "Paper";
    }
    else if(randomNumber == 3) {
        return "Scissors";
    }
}

// runs single round of game
function singleRound(playerSelection, computerSelection) {
    // lowercases all characters in string
    playerSelection = playerSelection.toLowerCase();
    // capitalizes first char of string by cutting first char and capitalizing it, then cutting the first char of 
    // the string and returning everything to the right of it, then concatinating the capital "R" with the remaining string chars 
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    // compares player input with comp input and *return* message saying "you lose" or "you win" and state what beats what
    if(playerSelection == computerSelection) {
        console.log("It's a Draw");
        return roundScore = "";
    }
    else if( (playerSelection == "Rock") && (computerSelection == "Paper")) {;
        console.log("You Lose! Paper beats Rock");
        return roundScore = "Lose";
    }
    else if( (playerSelection == "Rock") && (computerSelection == "Scissors")) {
        console.log("You Win! Rock beats Scissors");
        return roundScore = "Win";
    }
    else if( (playerSelection == "Paper") && (computerSelection == "Rock") ) {
        console.log("You Win! Paper beats Rock");
        return roundScore = "Win";
    }
    else if( (playerSelection == "Paper") && (computerSelection == "Scissors") ) {
        console.log("You Lose! Scissors beat Paper");
        return roundScore = "Lose";
    }
    else if( (playerSelection == "Scissors") && (computerSelection == "Rock") ) {
        console.log("You Lose! Rock beats Scissors"); 
        return roundScore = "Lose";
    }
    else if( (playerSelection == "Scissors") && (computerSelection == "Paper") ) {
        console.log("You Win! Scissors beat Paper"); 
        return roundScore = "Win";
    }
}

// runs loop for 5 rounds of singleRound()
function game() {
    let gameScore = 0;

    for(let i = 0; i < 5; i++) {
        playerSelection = prompt("Pick Rock, or Paper, or Scissors: ");
        computerSelection = getComputerChoice();
        singleRound(playerSelection, computerSelection);
        if(roundScore == "Win") {
            gameScore++;
        }
    }
    if(gameScore >= 3) {
        console.log(`You Won the Game. Score = ${gameScore} out of 5`);
    }
    else if(gameScore < 3) {
        console.log(`You Lost the Game. Score = ${gameScore} out of 5`);
    }
}



let playerSelection = "";
let computerSelection = "";
let roundScore = "";