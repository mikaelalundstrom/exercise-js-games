let play = true;

while (play) {
  console.clear();
  let goal = 1;
  let nmbrOfThrows = 0;

  // loopa medan goal är mindre än 7
  while (goal < 7) {
    let dice = Math.floor(Math.random() * 6 + 1);
    // +1 till nmbrOfThrows
    nmbrOfThrows++;
    console.log(dice);
    //om dice är samma som goal, goal +1
    if (dice === goal) {
      goal++;
      console.log("Bra jobbat!");
    }
  }
  console.log(`Grattis! Du fick stege på ${nmbrOfThrows} kast`);
  play = confirm("Spela igen?");
}
