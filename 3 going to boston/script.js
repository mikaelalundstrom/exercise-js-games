let nmbrOfDice = 3;
let score = 0;

//loopa så länge nmbrOfDice är större än 0
while (nmbrOfDice > 0) {
  //reset highest dice
  let diceHighest = 0;
  //loopa genom nmbrOfDice
  for (let i = 0; i < nmbrOfDice; i++) {
    let diceThrow = Math.floor(Math.random() * 6 + 1);
    console.log(diceThrow);
    // if diceThrow är större än diceHighest, spara det
    if (diceThrow > diceHighest) {
      diceHighest = diceThrow;
    }
  }
  //lägg till diceHighest till score
  score += diceHighest;
  console.log(`Your highest roll was ${diceHighest} and your current score is ${score}`);
  //minska nmbrOfDice med 1
  nmbrOfDice--;
  console.log(`You have ${nmbrOfDice} dice left.`);
}

console.log(`Game finished! You got ${score} points!`);
