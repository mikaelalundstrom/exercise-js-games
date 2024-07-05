let randomNmbr = Math.floor(Math.random() * 100 + 1);

let userGuess = parseInt(prompt("Guess a number between 1 and 100:"));

//loopa så länge userGuess inte är randomNmbr
while (userGuess !== randomNmbr) {
  // om userGuess är större
  if (userGuess > randomNmbr) {
    userGuess = parseInt(prompt(`${userGuess} was too high, try again!`));
    // om userGuess är mindre
  } else if (userGuess < randomNmbr) {
    userGuess = parseInt(prompt(`${userGuess} was too low, try again!`));
  } else {
    // om något gått fel
    userGuess = parseInt(
      prompt(`Something weird is happening here... Guess a number between 1 and 100:`)
    );
  }
}

alert(`You guessed ${userGuess}, and ${randomNmbr} was the number! Congrats!`);
