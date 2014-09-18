/*
Brittni Carter
 9/17/14
 WPF Section 1
 Personal Conditionals
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

var costFullDay = 22
var costHalfDay = 14

