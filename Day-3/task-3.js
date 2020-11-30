// jshint esversion:7

// Task 3

function squareTheDigits(v) {
  let newValue = v;
  const array = [];
  while (newValue > 0) {
    let digit = newValue % 10;
    newValue = Math.floor(newValue / 10);
    array.push(digit ** 2);
  }
  console.log(array.reverse().join().replace(/,/g, ""));
}

let value = Number(prompt());
squareTheDigits(value);
