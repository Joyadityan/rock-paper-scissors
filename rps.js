function computerPlay() {
    const plays = ['Rock', 'Paper', 'Scissors'];
    return plays[Math.floor(Math.random() * plays.length)];
}

function playRound(ps, cs) {
    if (ps === cs) {
        return '0';
    } else {
        if (
            (ps === 'Rock' && cs === 'Scissors') ||
            (ps === 'Scissors' && cs === 'Paper') ||
            (ps === 'Paper' && cs === 'Rock')
        ) {
            return '1';
        } else {
            return '2';
        }
    }
}

function startGame(playerSelection) {
    let computerSelection;
    let score = [0, 0];
    // let playerScore = 0;
    // let computerScore = 0;
    let result;
    let gameLog;
    computerSelection = computerPlay();

    playerSelection =
        playerSelection.charAt(0).toUpperCase() +
        playerSelection.substring(1, playerSelection.length).toLowerCase();

    const container = document.querySelector('#main');
    gameLog = document.querySelector('.log');

    result = playRound(playerSelection, computerSelection);
    if (result === '0') {
        gameLog.textContent = `
            Tie! Both played ${playerSelection}.
            \nScore: ${score[0]} - ${score[1]}`;
    } else if (result === '1') {
        gameLog.textContent = `
            You win! ${playerSelection} beats ${computerSelection}.
            Score: ${++score[0]} - ${score[1]}`;
    } else {
        gameLog.textContent = `
            You lose! ${computerSelection} beats ${playerSelection}.
            Score: ${score[0]} - ${++score[1]}`;
    }
    console.log('\n');

    const finalScore = `Final Score: You [${score[0]} - ${score[1]}] Computer`;
    if (score[0] > score[1]) {
        console.log(`You win!\n${finalScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You lose!\n${finalScore}`);
    } else {
        console.log(`It's a draw!\n${finalScore}`);
    }
}

const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
    // and for each one we add a 'click' listener
    key.addEventListener('click', () => {
        console.log(key.id);
        startGame(key.id);
    });
});
