'use strict';

// Selecting elements
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const numberEl = document.querySelector('.number');
const guessEl = document.querySelector('#guess');
const messageEl = document.querySelector('.message');
const bodyEl = document.querySelector('body');
const againEl = document.querySelector('#reset-btn');


// Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Functions

const displayMessage = function (message) {
    messageEl.textContent = message;
}

const displayNumber = function (number) {
    numberEl.textContent = number;
}

const displayScore = function (score) {
    scoreEl.textContent = score;
}

const displayHighscore = function (highscore) {
    highscoreEl.textContent = highscore;
}

// Event listener for the check button

document.querySelector('#submit-btn').addEventListener('click', function () {
    const guess = Number(guessEl.value);
    if (!guess) {
        displayMessage('📢 No number!');
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct number!');
        displayNumber(secretNumber);
        bodyEl.style.backgroundColor = "#60b347";
        numberEl.style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            displayHighscore(highscore);
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
            score--;
            displayScore(score);
        }
        else {
            displayMessage('💥 You lost the game!');
            displayScore(0);
        }
    }
});


// Event listener for the again button
againEl.addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    displayNumber('?');
    displayScore(score);
    displayHighscore(highscore);
    guessEl.value = '';
    bodyEl.style.backgroundColor = '#222';
    numberEl.style.width = '15rem';
});
