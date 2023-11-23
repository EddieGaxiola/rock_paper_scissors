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


function singleRound(playerSelection, computerSelection) {
    //lowercases all characters in string
    playerSelection = playerSelection.toLowerCase();
    //capitalizes first char of string
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    console.log(playerSelection);

}

const playerSelection = "roCk";
const computerSelection = getComputerChoice();

console.log(singleRound(playerSelection, computerSelection));