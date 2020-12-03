// jshint esversion:6

Array.prototype.befindobject = function (propertyName) {
  const propertyValue = [];
  this.map(function (object) {
    propertyValue.push(object[propertyName]);
  });
  return propertyValue;
};

var sampleinput = [
  { name: "John", age: 26 },
  { name: "siva", age: 27 },
];

console.log(sampleinput.befindobject("name"));
