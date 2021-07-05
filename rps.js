function computerPlay() {
    let plays = ['Rock', 'Paper', 'Scissors'];
    return plays[Math.floor(Math.random() * plays.length)];
}

function playRound(player, computer) {
    let ps = player.charAt(0).toUpperCase() + player.substring(1, player.length).toLowerCase();
    let cs = computer;
    let msg = `[Player] ${ps} vs ${cs} [Computer]`
    if (ps === cs) {
        return `Tie\n ${msg}`
    } else {
        if (ps === 'Rock' && cs === 'Scissors' ||
            ps === 'Scissors' && cs === 'Paper' ||
            ps === 'Paper' && cs === 'Rock') {
            return `Player wins!\n${msg}`
        } else {
            return `Computer wins!\n${msg}`
        }
    }
}

const playerSelection = 'papEr';
const computerSelection = computerPlay();