/*
 Brittni Carter
 9/17/14
 WPF Section 1
 Wacky Conditionals
 */

alert("Let's find out if you are a nail polish hoarder!");

var userName = prompt ("Please type in your name");
while (userName ===""){
    userName = prompt ("Please type in your name. \n Cannot continue if left blank")
}
console.log(userName);

//find out how many bottles of nail polish they have
var bottlesOfPolish = prompt ("Please type in the amount of bottles of nail polish you have bought in the last 6 months.");
//Must input a number
while (isNaN(bottlesOfPolish)){
    bottlesOfPolish = prompt ("Please enter a number representing the amount of polish.");
    while (bottlesOfPolish ===""){
        bottlesOfPolish = prompt ("Please don't leave blank, enter a number");
    }
}
console.log(bottlesOfPolish);
//how many old bottles of polish do you have?
var oldBottlesOfPolish = prompt ("Please type in the amount of bottles of nail polish you have older then 6 months.");
//Must input a number
while (isNaN(oldBottlesOfPolish)) {
    oldBottlesOfPolish = prompt("Please enter a number representing the amount of polish.");
    while (oldBottlesOfPolish === "") {
        oldBottlesOfPolish = prompt("Please don't leave blank, enter a number");
    }
}
//add old and new

var totalNailPolish = Number(oldBottlesOfPolish)+Number(bottlesOfPolish);
console.log (totalNailPolish);

//find out if they are a hoarder
    if (totalNailPolish >= 0 && totalNailPolish <= 5){
    totalNailPolish = alert(""+userName+" you aren't even close to being a hoarder!");
}

    if (totalNailPolish >= 6 && totalNailPolish <= 10){
    totalNailPolish = alert(""+userName+" you have a nice sized collection, a few more and you're a hoarder!");
}

    if (totalNailPolish >= 11 && totalNailPolish <= 20){
        totalNailPolish = alert(""+userName+" you are a hoarder, time to invest in a nail polish rack and open a salon.");
}