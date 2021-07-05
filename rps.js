function computerPlay() {
    const plays = ['Rock', 'Paper', 'Scissors'];
    return plays[Math.floor(Math.random() * plays.length)];
}

function playRound(player, computer) {
    const ps = player.charAt(0).toUpperCase() + player.substring(1, player.length).toLowerCase();
    const cs = computer;
    if (ps === cs) {
        return `Tie! Both played ${ps}.`
    } else {
        if (ps === 'Rock' && cs === 'Scissors' ||
            ps === 'Scissors' && cs === 'Paper' ||
            ps === 'Paper' && cs === 'Rock') {
            return `You win! ${ps} beats ${cs}.`
        } else {
            return `Computer wins! ${cs} beats ${ps}.`
        }
    }
}

const playerSelection = 'papEr';
const computerSelection = computerPlay();