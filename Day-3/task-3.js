// jshint esversion:7

// Task 3

function squareTheDigits(v) {
  var newValue = v;
  var array = [];
  while (newValue > 0) {
    let digit = newValue % 10;
    newValue = Math.floor(newValue / 10);
    array.push(digit ** 2);
  }
  console.log(array.reverse().join().replace(/,/g, ""));
}

var value = Number(prompt());
squareTheDigits(value);
