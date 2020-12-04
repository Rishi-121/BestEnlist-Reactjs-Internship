// Task 1

Array.prototype.beremoveobject = function (propertyName, propertyValue) {
  this.forEach(function (object) {
    delete object[propertyName];
  });
  return this;
};

var sampleinput = [
  { name: "John", age: 26, Country: "India" },
  { name: "siva", age: 27, Country: "India" },
];
console.log(sampleinput.beremoveobject("Country", "India"));
