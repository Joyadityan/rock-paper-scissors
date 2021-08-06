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

function startGame(playerChoice) {
    const scoreUIGroup = document.querySelectorAll('.score-ui');

    if (roundCount === 5) {
        roundCount = 1;
        score = [0, 0];
        scoreUIGroup.forEach((element) => {
            element.style.backgroundColor = 'gray';
        });
    } else {
        roundCount++;
    }

    let computerChoice;
    let result;

    computerChoice = computerPlay();
    playerChoice =
        playerChoice.charAt(0).toUpperCase() +
        playerChoice.substring(1, playerChoice.length).toLowerCase();

    const gameLog = document.querySelector('.log');
    const gameScore = document.querySelector('.game-score');
    const scoreUI = document.querySelector(`#round-${roundCount}`);

    result = playRound(playerChoice, computerChoice);
    if (result === '0') {
        gameLog.textContent = `Tie! Both played ${playerChoice}.`;
        gameScore.textContent = `Score: ${score[0]} - ${score[1]}`;
        scoreUI.style.backgroundColor = '#f2f237';
    } else if (result === '1') {
        gameLog.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
        gameScore.textContent = `Score: ${++score[0]} - ${score[1]}`;
        scoreUI.style.backgroundColor = '#47c847';
    } else {
        gameLog.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
        gameScore.textContent = `Score: ${score[0]} - ${++score[1]}`;
        scoreUI.style.backgroundColor = '#a21d1d';
    }

    if (roundCount === 5) {
        const finalScore = `Final Score: You [${score[0]} - ${score[1]}] Computer`;
        if (score[0] > score[1]) {
            gameLog.textContent = `You win!`;
        } else if (score[1] > score[0]) {
            gameLog.textContent = `You lose!`;
        } else {
            gameLog.textContent = `It's a draw!`;
        }
        gameScore.textContent = finalScore;
    }
}

let score = [0, 0];
let roundCount = 0;
const keys = document.querySelectorAll('.key');

keys.forEach((key) => {
    key.addEventListener('click', () => {
        startGame(key.id);
    });
});
