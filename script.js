// Selecting elements
const player1Input = document.getElementById("player1Number");
const submitNumber = document.getElementById("submitNumber");

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");

const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");

const message = document.getElementById("message");
const life = document.getElementById("life");

const restartBtn = document.getElementById("restart");

// Game variables
let secretNumber = null;
let lives = 3;

// Player 1 enters a number
submitNumber.addEventListener("click", () => {
    let number = parseInt(player1Input.value);

    if (isNaN(number) || number < 1 || number > 10) {
        alert("⚠️ Player 1, enter a valid number between 1 and 10!");
        return;
    }

    secretNumber = number;
    step1.classList.add("hide");
    step2.classList.remove("hide");

    message.textContent = "Player 2, start guessing!";
});

// Player 2 guesses the number
submitGuess.addEventListener("click", () => {
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 10) {
        message.textContent = "⚠️ Enter a number between 1 and 10!";
        return;
    }

    if (guess === secretNumber) {
        message.innerHTML = `🎉 Player 2 Wins! The number was ${secretNumber}`;
        submitGuess.disabled = true;
        restartBtn.classList.remove("hide");
    } else {
        lives--;
        life.style.width = `${(lives / 3) * 100}%`;

        if (lives === 0) {
            message.innerHTML = `❌ Player 2 lost! The number was ${secretNumber}.<br>Player 1 Wins!`;
            submitGuess.disabled = true;
            restartBtn.classList.remove("hide");
        } else {
            message.textContent = `❌ Wrong guess! ${lives} lives left.`;
        }
    }
});

// Restart game function
restartBtn.addEventListener("click", () => {
    secretNumber = null;
    lives = 3;
    life.style.width = "100%";
    submitGuess.disabled = false;
    message.textContent = "";

    step1.classList.remove("hide");
    step2.classList.add("hide");

    restartBtn.classList.add("hide");
});
