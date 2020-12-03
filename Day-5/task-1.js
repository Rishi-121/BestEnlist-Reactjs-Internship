// Task 1

String.prototype.bespecify = function () {
  return this.split("").join(" ");
};

console.log("hello".bespecify());
