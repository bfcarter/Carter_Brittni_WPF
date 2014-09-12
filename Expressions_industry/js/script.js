/*
Brittni Carter
9/11/14
WPF Section 1
Industry Expressions
 */

alert ("let's find out how many new positions need Facebook ads today!");
//ask how many requests for ads were received today
var todayRequest =prompt ("How many requests for ads did you receive today?");
console.log (todayRequest);
//ask how many requests for ads were received yesterday
var yesterdayRequest =prompt("How many requests for ads did you receive yesterday?");
console.log(yesterdayRequest);
var previousRequests =prompt ("How many previous older requests do you have?");
console.log (previousRequests);
//add all of the requests together
var newAds = Number(todayRequest) + Number(yesterdayRequest) + Number(previousRequests);
//send alert to let them know how many need to be created
alert ("You have "+newAds+" that need to be created today");