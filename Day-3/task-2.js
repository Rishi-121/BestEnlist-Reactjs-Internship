// Task 2

function secondLargestNum(arr) {
  var newArray = Array.from(new Set(arr.sort()));
  return newArray[newArray.length - 2];
}
var array = prompt().split(" ");
array = array.map(Number, array);
console.log(secondLargestNum(array));
