// Task 1

function checkRepeatedNumbers(v) {
  var lastTwoDigits = +String(v).slice(String(v).length - 2, String(v).length);
  if (lastTwoDigits % 11 != 0) {
    if (v % 11 == 0 && lastTwoDigits % 11 == 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
}

var value = Number(prompt());
console.log(checkRepeatedNumbers(value));
