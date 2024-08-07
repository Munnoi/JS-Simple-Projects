const SCISSORS = 'scissors', PAPER = 'paper', ROCK = 'rock';
const moves = ['scissors', 'paper', 'rock'];
const options = document.querySelector('.game-options');
const message = document.getElementById('message');
const playerOneImg = document.querySelector('.player-1-choice img');
const playerTwoImg = document.querySelector('.player-2-choice img');

let playerOneMove = '';
let playerTwoMove = '';

function getRandomMove () {
    return moves[Math.floor(Math.random() * 3)];
}

options.addEventListener('click', e => {
    playerTwoMove = getRandomMove();
    playerOneMove = event.target.dataset.id;
    options.style.pointerEvents = 'none';
    // console.log(playerOneMove, playerTwoMove);
    playerOneImg.src = `${playerOneMove}.png`;
    playerOneImg.classList.remove('animate-1');
    playerTwoImg.src = `${playerTwoMove}.png`;
    playerTwoImg.classList.remove('animate-2');
    checkWinner();
});

function checkWinner () {
    if (playerOneMove === playerTwoMove)
        message.innerHTML = 'Draw!';
    else if ((playerOneMove === SCISSORS && playerTwoMove === PAPER) || (playerOneMove === PAPER && playerTwoMove === ROCK) || (playerOneMove === ROCK && playerTwoMove === SCISSORS))
        message.innerHTML = 'You Win!';
    else
        message.innerHTML = 'You Lose';
    restart();
}

function restart () {
    setTimeout(() => {
        playerTwoMove = getRandomMove();
        message.innerHTML = 'start!';
        playerOneImg.src = 'hand.png';
        playerOneImg.classList.add('animate-1');
        playerTwoImg.src = 'hand.png';
        playerTwoImg.classList.add('animate-2');
        options.style.pointerEvents = '';
    }, 2000);
}