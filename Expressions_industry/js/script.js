/*
Brittni Carter
9/11/14
WPF Section 1
Industry Expressions
 */

alert ("How many new positions need Facebook ads today?");

var todayRequest = Prompt ("How many requests for ads did you receive today?");
console.log ("todayRequest");

var yesterdayRequest = prompt("How many requests for ads did you receive yesterday?");
console.log("yesterdayRequest")

var previousRequests = prompt ("How many previous older requests do you have?");
console.log ("previousRequests")

var newAds = todayRequest + yesterdayRequest + previousRequests;

Alert ("You have "+newAds+" that need to be created today")