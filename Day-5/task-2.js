// Task 2

// jshint esversion:6

String.prototype.bevowel = function () {
  return this.split("")
    .map(function (i) {
      if (
        i === "a" ||
        i === "A" ||
        i === "e" ||
        i === "E" ||
        i === "i" ||
        i === "I" ||
        i === "o" ||
        i === "O" ||
        i === "u" ||
        i === "U"
      ) {
        return i;
      }
      return null;
    })
    .join("");
};

console.log("hello".bevowel());
