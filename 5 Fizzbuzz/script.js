//loopa igenom tal 1 till 100
for (let i = 1; i <= 100; i++) {
  // om delbart med 5 och 3
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(`${i}, FizzBuzz!`);
    // om delbart med 5
  } else if (i % 5 === 0) {
    console.log(`${i}, Buzz!`);
    // om delbart med 3
  } else if (i % 3 === 0) {
    console.log(`${i}, Fizz!`);
  }
}
