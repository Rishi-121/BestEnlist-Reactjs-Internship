// Task 1

// jshint esversion:6

Date.prototype.addDays = function (day) {
  let date = new Date(this.valueOf());
  date.setDate(date.getDate() + day);
  return date;
};

// We need each individual dates within the start_date to the end_date
function begetdatebetween(start_date, end_date) {
  let dateArray = [];
  let currentDate = start_date;
  while (currentDate <= end_date) {
    dateArray.push(new Date(currentDate));
    currentDate = currentDate.addDays(1);
  }
  return dateArray;
}

begetdatebetween(new Date(), new Date().addDays(2)).forEach(function (date) {
  console.log(date);
});
