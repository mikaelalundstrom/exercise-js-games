let word1 = prompt("Skriv in ett ord:");
let word2 = prompt("Skriv in ett till ord:");
let sameLetterCounter = 0;

//loopa längden av första ordet
for (let i = 0; i < word1.length; i++) {
  // om samma bokstav på samma plats, counter++
  if (word1[i] === word2[i]) {
    sameLetterCounter++;
  }
}

alert(
  `Dina ord ${word1} & ${word2} har ${sameLetterCounter} gemensamma bokstäver på samma plats i orden.`
);
