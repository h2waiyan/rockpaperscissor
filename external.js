computerMark = 0;
playerMark = 0;
playerSelection = "";
finalwinner = "";
restartShow = false;
const selection = ['rock', 'paper', 'scissor']

function playerSelect(player) {
    computerSelection = selection[Math.floor(Math.random() * 3)];
    console.log("Computer : " + computerSelection);
    const playerSelection = player;

    var result = playRound(playerSelection, computerSelection);
    
    
    document.getElementById('computerSelection').innerHTML = "Computer chose : " + computerSelection

    document.getElementById('playerSelection').innerHTML = "You chose : " +  playerSelection
    
    document.getElementById('result').innerHTML = result

    document.getElementById('mark').innerHTML = "Computer mark : " + computerMark + " Your Mark : " + playerMark

    
    if (computerMark == 5 || playerMark == 5) {

        console.log("Computer : " + computerMark + " You : " + playerMark);
    
        if (computerMark == playerMark) {
            
            finalwinner = "Tie";
        }
        else if (computerMark > playerMark) {
           
           finalwinner = "Computer Wins"
        }
        else {
           
            finalwinner = "You Win"
        }

        computerMark = 0;
        playerMark = 0;

        document.getElementById('final').innerHTML = finalwinner

        document.getElementById('restart').style.display = 'block';

        document.getElementById("rock-btn").disabled = true;
        document.getElementById("paper-btn").disabled = true;
        document.getElementById("scissor-btn").disabled = true;

    }
}

function restart() {

    document.getElementById("rock-btn").disabled = false;
    document.getElementById("paper-btn").disabled = false;
    document.getElementById("scissor-btn").disabled = false;


    document.getElementById('restart').style.display = 'none';


    document.getElementById('computerSelection').innerHTML = ""

        document.getElementById('playerSelection').innerHTML = ""
        
        document.getElementById('result').innerHTML = ""
    
        document.getElementById('mark').innerHTML = ""

        document.getElementById('final').innerHTML = ""



}



function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "tie";
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerMark++;
        return "paper beats rock. Computer Wins";
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissor') {
        playerMark++;
        return "rock beats scissor. You win";
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerMark++;
        return "paper beats rock. You Win";
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissor') {
        computerMark++;
        return "scissor beats paper. Computer Wins";
    }
    else if (playerSelection == 'scissor' && computerSelection == 'rock') {
        computerMark++;
        return "rock beats scisor. Computer wins ";

    }
    else if (playerSelection == 'scissor' && computerSelection == 'paper') {
        playerMark++;
        return "scissor beats paper. You wins";
    }
}
