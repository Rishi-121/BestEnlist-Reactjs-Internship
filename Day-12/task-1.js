// jshint esversion:6

let array1 = [1, 2, 3, 4, 5, 6];
let array2 = JSON.parse(JSON.stringify(array1)); // Deep Copy
array2.push(7);

console.log(array1, array2);

// [1, 2, 3, 4, 5, 6] [1, 2, 3, 4, 5, 6, 7]
