// Task 1

// jshint esversion:6

Array.prototype.begetduplicate = function () {
  const duplicateValues = [];
  this.forEach((value) => {
    if (this.filter((x) => x === value).length > 1) {
      duplicateValues.push(value);
    }
  });

  return Array.from(new Set(duplicateValues));
};

var sampleinput = [1, 2, 4, 5, 2, 5];
console.log(sampleinput.begetduplicate());
