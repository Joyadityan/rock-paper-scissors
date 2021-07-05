function computerPlay() {
    const plays = ['Rock', 'Paper', 'Scissors'];
    return plays[Math.floor(Math.random() * plays.length)];
}

function playRound(ps, cs) {
    if (ps === cs) {
        return '0';
    } else {
        if (ps === 'Rock' && cs === 'Scissors' ||
            ps === 'Scissors' && cs === 'Paper' ||
            ps === 'Paper' && cs === 'Rock') {
            return '1';
        } else {
            return '2';
        }
    }
}

function game() {
    let playerSelection;
    let computerSelection;

    let playerScore = 0;
    let computerScore = 0;
    let result;
    for (let round = 1; round <= 5; round++) {
        playerSelection = window.prompt("Rock, Paper, or Scissors?");
        computerSelection = computerPlay();

        playerSelection = playerSelection.charAt(0).toUpperCase() +
            playerSelection.substring(1, playerSelection.length).toLowerCase();

        console.log(`[Round ${round}]`);

        result = playRound(playerSelection, computerSelection);
        if (result == '0') {
            console.log(`Tie! Both played ${playerSelection}.`);
            console.log(`Score: ${playerScore} - ${computerScore}`);
        } else if (result == '1') {
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
            console.log(`Score: ${++playerScore} - ${computerScore}`);
        } else {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
            console.log(`Score: ${playerScore} - ${++computerScore}`);
        }
        console.log('\n')
    }
    if (playerScore > computerScore) {
        return "You win!";
    } else if (computerScore > playerScore) {
        return "You lose!";
    } else {
        return "It's a draw!";
    }
}

game();