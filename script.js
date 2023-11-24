//function that generates random choice
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

//function that runs single round of game
function singleRound(playerSelection, computerSelection) {
    //lowercases all characters in string
    playerSelection = playerSelection.toLowerCase();
    //capitalizes first char of string
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    
    //compare player input with comp input and *return* message saying "you lose" or "you win" and state what beats what
    if(playerSelection == computerSelection) {
        return "It's a Draw";
    }
    else if( (playerSelection == "Rock") && (computerSelection == "Paper")) {
        return "You Lose! Paper beats Rock";
    }
    else if( (playerSelection == "Rock") && (computerSelection == "Scissors")) {
        return "You Win! Rock beats Scissors";
    }
    else if( (playerSelection == "Paper") && (computerSelection == "Rock") ) {
        return "You Win! Paper beats Rock";
    }
    else if( (playerSelection == "Paper") && (computerSelection == "Scissors") ) {
        return "You Lose! Scissors beat Paper";
    }
    else if( (playerSelection == "Scissors") && (computerSelection == "Rock") ) {
        return "You Lose! Rock beats Scissors";
    }
    else if( (playerSelection == "Scissors") && (computerSelection == "Paper") ) {
        return "You Win! Scissors beat Paper";
    }
}

//function that runs loop for 5 rounds of function singleRound()
function game() {
    for(let i = 0; i < 5; i++) {
        playerSelection = prompt("Pick Rock, or Paper, or Scissors: ", );
        singleRound(playerSelection, computerSelection);
        
    }
}



const playerSelection = "pAper";
const computerSelection = getComputerChoice();

console.log(singleRound(playerSelection, computerSelection));