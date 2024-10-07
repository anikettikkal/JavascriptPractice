// how to genertae a random number

const randomNumber = (parseInt(Math.random() * 100 + 1));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')


let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value);
        console.log(guess);

        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number")
    } else if (guess < 1) {
        alert('Please enter a number more than 1')
    } else if (guess > 100) {
        alert('Please enter a number less than 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displauGuess(guess)
            displayMessage(`Game Over , Random number was ${randomNumber}`)
            endGame()
        } else {
            displauGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    //
}

function displauGuess(guess) {
    //
}

function displayMessage(message) {
    //
}


function newGame() {
    //
}

function endGame() {
    //
}

