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
    const buttons = document.querySelectorAll('button');
    const announce = document.querySelector('#announcement');
    const playerAnnounce = document.querySelector('#playerScore');
    const ComputerAnnounce = document.querySelector('#computerScore');
    const winner = document.querySelector('#winner');

    buttons.forEach((button) =>{
      button.addEventListener('click', () =>{
        const playerSelection = button.id
        const computerSelection = computerPlay();
        
        let verdict = playRound(playerSelection,computerSelection);
        if (verdict == "Dead Heat"){
          announce.innerHTML = "None Scored";
        }else if(verdict == "Player Won!"){
          announce.innerHTML = "Player Score";
          playerScore++;
        }else{
          announce.innerHTML = "Computer Score";
          computerScore++;
        } 

        playerAnnounce.innerHTML = `Player score: ${playerScore}`;
        ComputerAnnounce.innerHTML = `Computer score: ${computerScore}`;
        
        if (playerScore == 5){
          playerScore = 0;
          computerScore = 0;
          playerAnnounce.innerHTML = `Player score: ${playerScore}`;
          ComputerAnnounce.innerHTML = `Computer score: ${computerScore}`;
          winner.innerHTML = `You Win!!! =D`;
        }else if(computerScore == 5){
          playerScore = 0;
          computerScore = 0;
          playerAnnounce.innerHTML = `Player score: ${playerScore}`;
          ComputerAnnounce.innerHTML = `Computer score: ${computerScore}`;
          winner.innerHTML = `You Lose!!! =(`;
        }

      });
    }); 

    /*if (playerScore == computerScore){
      return "Both are losers!!!";
    }else if(playerScore > computerScore){
      return "You Win!!!! Congrats!!! =D";
    }else{
      return "You Lose!!!! Try Again!!!! =S";
    }*/
  }


function computerPlay(){
    const arr1 = ["Rock","Paper","Scissors"];
    let playerChoice = arr1[Math.floor(Math.random()*3)].toLowerCase()
    return playerChoice;
}


console.log(game());