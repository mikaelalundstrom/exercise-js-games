let play = confirm("Dags att spela Knockout! Vill du spela?");

while (play) {
  // clean console if play again
  console.clear();
  let score = 0;

  let knockOutNmbr = parseInt(prompt("Välj ett knockout nummer! 6, 7, 8 eller 9"));
  console.log(`Ditt knockout nummer är ${knockOutNmbr}`);

  let goal = parseInt(prompt("Välj en målsiffra att uppnå, t.ex. 50 eller 100"));
  console.log(`Din målsiffra är ${goal}`);

  //loopa medans score är mindre än goal
  while (score < goal) {
    let dice1 = Math.floor(Math.random() * 6 + 1);
    let dice2 = Math.floor(Math.random() * 6 + 1);
    let diceThrow = dice1 + dice2;

    //om diceThrow är knockOutNmbr
    if (diceThrow === knockOutNmbr) {
      score -= 10;
      console.log(`Knockout!! Du kastade ${diceThrow}, åh nej! -10 poäng!`);
      //add diceThrow to score
    } else {
      score += diceThrow;
      console.log(`Du kastade ${dice1} & ${dice2}, Vilket gav dig ${diceThrow} poäng.`);
    }

    console.log(`Current score: ${score}`);
  }
  console.log(`Grattis! Du vann!`);
  play = confirm(`Grattis! Du vann! Spela igen?`);
}
