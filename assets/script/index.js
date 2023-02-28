'use strict';

// generate a random number between 1 and 100
var randomNumber = Math.floor(Math.random() * 15) + 1;

var submitButton = document.getElementById("submit-guess");
submitButton.addEventListener("click", checkGuess);

function checkGuess() {
var guess = document.getElementById("guess").value;
guess = parseInt(guess);

// compare the guess to the random number
if (guess < randomNumber) {
  document.getElementById("result").innerHTML = "Your guess is less than the number.";
} else if (guess > randomNumber) {
  document.getElementById("result").innerHTML = "Your guess is greater than the number.";
} else {
  document.getElementById("result").innerHTML = "Congratulations, you guessed the number!";
}
};
