// Task 1

Array.prototype.beaddobject = function (propertyName, propertyValue) {
  this.forEach(function (object) {
    object[propertyName] = propertyValue;
  });
  return this;
};
var sampleinput = [
  { name: "John", age: 26 },
  { name: "siva", age: 27 },
];
console.log(sampleinput.beaddobject("Country", "India"));
