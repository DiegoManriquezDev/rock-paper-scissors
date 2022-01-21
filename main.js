function playRound(playerSelection, computerSelection) {
    let playerWon = 0;
    let computerWon = 0;
    if (playerSelection == computerSelection){
      console.log(`You chose: ${playerSelection}`);
      console.log(`The computer chose: ${computerSelection}`);
      console.log("DEAD HEAT");
      return "Dead Heat"
    }else if ((playerSelection == "rock" && computerSelection == "scissors") || 
              (playerSelection == "paper" && computerSelection == "rock") ||
              (playerSelection == "scissors" && computerSelection == "paper")){
                console.log(`You chose: ${playerSelection}`);
                console.log(`The computer chose: ${computerSelection}`);
                console.log(`You Won!!, ${playerSelection} beats ${computerSelection}`);
      return "Player Won!"
    }else{
      console.log(`You chose: ${playerSelection}`);
      console.log(`The computer chose: ${computerSelection}`);
      console.log(`You Lose!!, ${computerSelection} beats ${playerSelection}`);
      return "Computer Won!"
    }

  }

  function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
      const playerSelection = prompt("Your turn").toLowerCase();
      const computerSelection = computerPlay();
      let verdict = playRound(playerSelection,computerSelection);
      if (verdict == "Dead Heat"){
        console.log("None Scored");
      }else if(verdict == "Player Won!"){
        playerScore++;
      }else{
        computerScore++;
      }   
    }
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
    if (playerScore == computerScore){
      return "Both are losers!!!";
    }else if(playerScore > computerScore){
      return "You Win!!!! Congrats!!! =D";
    }else{
      return "You Lose!!!! Try Again!!!! =S";
    }
  }


function computerPlay(){
    const arr1 = ["Rock","Paper","Scissors"];
    let playerChoice = arr1[Math.floor(Math.random()*3)].toLowerCase()
    return playerChoice;
}


console.log(game());