// Task 1

function getSign(arr) {
  var sign1 = arr[0][0],
    sign2 = arr[1][0],
    sign3 = arr[2][0];

  if (
    (sign1 === "+" || sign2 === "+" || sign3 === "+") &&
    (sign1 === "-" || sign2 === "-" || sign3 === "-")
  ) {
    return "+ -";
  } else if (sign1 === "+" || sign2 === "+" || sign3 === "+") {
    return "+";
  } else if (sign1 === "-" || sign2 === "-" || sign3 === "-") {
    return "-";
  } else {
    return "No Sign";
  }
}

var array = prompt().split(" ");
console.log(getSign(array));
