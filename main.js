function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection){
      console.log(`You chose: ${playerSelection}`);
      console.log(`The computer chose: ${computerSelection}`);
      console.log("DEAD HEAT");
    }else if ((playerSelection == "rock" && computerSelection == "scissors") || 
              (playerSelection == "paper" && computerSelection == "rock") ||
              (playerSelection == "scissors" && computerSelection == "paper")){
                console.log(`You chose: ${playerSelection}`);
                console.log();
      return console.log(`You Won!!, ${playerSelection} beats ${computerSelection}`);
    }else{
      console.log(`You chose: ${playerSelection}`);
      console.log(`The computer chose: ${computerSelection}`);
      console.log(`You Lose!!, ${computerSelection} beats ${playerSelection}`);
    }

  }


function computerPlay(){
    const arr1 = ["Rock","Paper","Scissors"];
    let playerChoice = arr1[Math.floor(Math.random()*3)].toLowerCase()
    return playerChoice;
}


const playerSelection = prompt().toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));