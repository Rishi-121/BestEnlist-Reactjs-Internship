// jshint esversion:6

// Task 2

function secondLargestNum(arr) {
  const newArray = Array.from(new Set(arr.sort()));
  return newArray[newArray.length - 2];
}

let array = prompt().split(" ");
array = array.map(Number, array);
console.log(secondLargestNum(array));
