function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    return Math.floor(Math.random() * options.length);
}

console.log(computerPlay());