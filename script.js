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


}

const playerSelection = "";
const computerSelection = getComputerChoice();

console.log(singleRound(playerSelection, computerSelection));