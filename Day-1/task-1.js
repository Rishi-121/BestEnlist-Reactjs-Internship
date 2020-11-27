// Task 1

/*

Write a JavaScript program to calculate the days left until the next Christmas.

*/

var christmas_Day = new Date("25 December 2020");

var current_Day = new Date();

var difference_In_Time = christmas_Day.getTime() - current_Day.getTime();

var difference_In_Days = difference_In_Time / (1000 * 3600 * 24);

console.log(difference_In_Days);

/*

OutPut:

27.22783925925926

*/
