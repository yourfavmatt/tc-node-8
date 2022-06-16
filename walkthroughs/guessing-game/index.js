console.log("Hello World!");

// Random number - answer
let answer = Math.floor(Math.random() * 100) + 1; // random number b/w 1-100
// User's guess
let userGuess;

// A way to repeat guessing
do {
  turn();
} while (answer != userGuess); // continue the loop if user guesses incorrectly

function turn() {
  userGuess = prompt("Guess a whole number between 1 and 100:");
  userGuess = parseInt(userGuess);

  if (isValid(userGuess)) {
    // Logic to evaluate the guess
    if (answer < userGuess) {
      alert("You guessed to HIGH");
    } else if (answer > userGuess) {
      alert("You guessed to LOW");
    } else {
      alert("You guessed CORRECTLY");
    }
  } else {
    alert("You didn't give me a valid guess..");
  }
}

function isValid(input) {
  return typeof input == "number" && !isNaN(input);
}
