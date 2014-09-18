/*
Brittni Carter
 9/17/14
 WPF Section 1
 Personal Conditionals - I take my dog to daycare while I am at work
 */

alert("Lets find out how much it will cost to drop off your dog to doggie daycare!");

//find out how many days the dog will need to be dropped off

var daysOfDayCare = prompt ("How many days a week will you need to use the daycare?");
//Must input a number
while (isNaN(daysOfDayCare)){
    daysOfDayCare = prompt ("Please enter a number");
    while (daysOfDayCare ===""){
        daysOfDayCare = prompt ("Please don't leave blank, enter the amount of days");
    }
}
console.log(daysOfDayCare);

var hoursAtDayCare = prompt ("How many hours per day will you need to use the daycare?");
//Must input a number
while (isNaN(hoursAtDayCare)){
    hoursAtDayCare = prompt ("Please enter a number");
    while (hoursAtDayCare ===""){
        hoursAtDayCare = prompt ("Please don't leave blank, enter the amount of days");
    }
}
console.log(hoursAtDayCare);
//prices for full day and half day daycare
var costFullDay = 22;
var costHalfDay = 14;

//if input is above or below 4 hours it determines if its a half or full day
if (hoursAtDayCare >= 0 && hoursAtDayCare <= 4){
    hoursAtDayCare = costHalfDay
}
console.log (costHalfDay);
if (hoursAtDayCare >= 4 && hoursAtDayCare <= 8){
    hoursAtDayCare = costFullDay
}
console.log (costFullDay);
//hours per day multiplied by the amount of days
var totalCostFullDay = daysOfDayCare*costFullDay;

var totalCostHalfDay = daysOfDayCare*costHalfDay;

alert(""+totalCost+" Instagram is the most popular social media channel for your age group");