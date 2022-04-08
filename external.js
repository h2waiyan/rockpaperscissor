var computerMark = 0;
var playerMark = 0;

function game() {

    function computerPlay() {
        const selection = ['rock', 'paper', 'scissor']

        return selection[Math.floor(Math.random() * 3)];
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

    const playerSelection = prompt("Enter your selction: ").toLowerCase();

    const computerSelection = computerPlay();

    console.log("Computer : " + computerSelection);
    console.log("You : " + playerSelection);

    console.log(playRound(playerSelection, computerSelection));
}

for (let i = 0; i < 5; i++) {
    game();
}

if (computerMark == playerMark) {
    console.log("Computer : " + computerMark + " You : " + playerMark);
    console.log("Game Tie")
}
else if (computerMark > playerMark) {
    console.log("Computer : " + computerMark + " You : " + playerMark);
    console.log("Computer Wins")
}
else {
    console.log("Computer : " + computerMark + " You : " + playerMark);
    console.log("You win");
}
    