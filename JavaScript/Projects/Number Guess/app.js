let secretNumber, initialScore;
const messageElement = document.querySelector(".message");
const number = document.querySelector(".number");
const score = document.querySelector(".score");
const highscoreElement = document.querySelector(".highscore");
const playAgain = document.querySelector(".again");
const guessElement = document.querySelector(".guess");
const check = document.querySelector(".check");
let highscore = 0;
// handling the state with this variable.
let gameFinished = false;
const generateSecretNumber = () => Math.trunc(Math.random() * 20) + 1;

// function for initializing the game parameters and handling the play again event on 'again' button.
const initGame = () => {
  secretNumber = generateSecretNumber();
  initialScore = 20;
  score.textContent = initialScore;
  displayMessage("Start guessing...");
  number.textContent = "?";
  guessElement.value = "";
  document.body.style.backgroundColor = "#222";
  number.style.width = "15rem";
  // reset the state when the game is played second time.
  gameFinished = false;
  // remove the 'disabled' attribute on input field when the game is played second time.
  guessElement.disabled = false;
};

// function to display the string on the messageElement with the passed argument.
const displayMessage = (message) => {
  messageElement.textContent = message;
};

const compareScore = () => {
  // if the correct guess is already made then exit the function.
  if (gameFinished) return;

  const guess = Number(guessElement.value);

  // if guess is a falsy value display the message.
  if (!guess) {
    displayMessage("⛔️ No number!");
  }
  // when the guess matches the secretNumber.
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    number.textContent = secretNumber;
    document.body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    // if the current score is greater than the highscore then replace highscore with the current score.
    if (initialScore > highscore) {
      highscore = initialScore;
      highscoreElement.textContent = highscore;
    }
    // update the state
    gameFinished = true;
    // freeze the input field if the guess is correct.
    guessElement.disabled = true;
  }
  // when guess isn't a falsy value and doesn't match the secretNumber.
  else {
    if (initialScore > 0) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      initialScore--;
      score.textContent = initialScore;
    } else {
      displayMessage("💥 You lost the game!");
      score.textContent = 0;
    }
  }
};

check.addEventListener("click", compareScore);

playAgain.addEventListener("click", initGame);

initGame(); // Initialize the game on page load
