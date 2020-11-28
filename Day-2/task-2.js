// Task 2

function generateRandomNumber() {
  var randomNum = Math.floor(Math.random() * 1000000 + 99999);
  if (randomNum > 1000000) {
    randomNum = Math.floor(Math.random() * 1000000 + 99999);
  }
  return randomNum;
}

console.log(generateRandomNumber());

// 886931

// 597056

// 323132
