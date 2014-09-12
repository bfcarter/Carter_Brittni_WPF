/*
Brittni Carter
9/11/14
WPF Section 01
Expressions_Personal
 */
alert("Welcome,let's find out how much dog food you will need for a year.");
// how much dog food will I need for a year?
var yourAns = prompt ("How many cans of food do you think you use each year?");
console.log (yourAns);
//how many cans of wet food do I use each day?
var foodCans =prompt ("How many cans of dog food do you use each day?");
console.log(foodCans);
//ask how many days are in a year
var askDays =prompt ("How many days are in a year?");
console.log(askDays);
//days in a year multiplied by the amount of food used each day
var daysInYear = 365;

var yearFood = daysInYear * foodCans;

alert("you will need "+yearFood+" cans of food this year");

alert("Were you correct?");


