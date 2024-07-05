let playerScore = 0;
let computerScore = 0;
let winningScore = 3;

while (playerScore < winningScore && computerScore < winningScore) {
  let playerChoice = parseInt(
    prompt("Spela sten sax eller påse!\n1 för sten\n2 för sax \n3 för påse")
  );

  let computerChoice = Math.floor(Math.random() * 3 + 1);

  // Lika
  if (playerChoice === computerChoice) {
    console.log("Lika! Inga poäng!");
    // Sten vs Sax
  } else if (playerChoice === 1 && computerChoice === 2) {
    console.log("Sten vs Sax. Du vann!");
    playerScore++;
    // Sten vs Påse
  } else if (playerChoice === 1 && computerChoice === 3) {
    console.log("Sten vs Påse. Du förlorade!");
    computerScore++;
    // Sax vs Sten
  } else if (playerChoice === 2 && computerChoice === 1) {
    console.log("Sax vs Sten. Du förlorar!");
    computerScore++;
    // Sax vs Påse
  } else if (playerChoice === 2 && computerChoice === 3) {
    console.log("Sax vs Påse. Du vann!");
    playerScore++;
    // Påse vs Sten
  } else if (playerChoice === 3 && computerChoice === 1) {
    console.log("Påse vs Sten. Du vann!");
    playerScore++;
    // Påse vs Sax
  } else if (playerChoice === 3 && computerChoice === 2) {
    console.log("Påse vs Sax. Du förlorar!");
    computerScore++;
  } else {
    console.log("How did we get here?");
  }
  console.log(`Current score
    Player: ${playerScore}
    Computer: ${computerScore}`);
}

if (playerScore === winningScore) {
  console.log(`Grattis! Du vann med ${playerScore}-${computerScore}`);
} else {
  console.log(`Åh nej, du förlorade med ${playerScore}-${computerScore}`);
}
