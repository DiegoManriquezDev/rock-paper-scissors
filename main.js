function playRound(playerSelection, computerSelection) {
    
    

  }


function computerPlay(){
    const arr1 = ["Rock","Paper","Scissors"];
    let playerChoice = arr1[Math.floor(Math.random()*3)].toLowerCase()
    return playerChoice
}


const playerSelection = prompt().toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));