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


var bottlesOfPolish = prompt ("Please type in the amount of bottles of nail polish you have");
//Must input a number
while (isNaN(bottlesOfPolish)){
    bottlesOfPolish = prompt ("Please enter a number representing your age.");
    while (bottlesOfPolish ===""){
        bottlesOfPolish = prompt ("Please don't leave blank, enter your age");
    }
}
console.log(bottlesOfPolish);


if (bottlesOfPolish >= 0 && bottlesOfPolish <= 5){
    bottlesOfPolish = alert(""+userName+" you aren't even close to being a hoarder!");
}


if (bottlesOfPolish >= 6 && bottlesOfPolish <= 10){
    bottlesOfPolish = alert(""+userName+" you have a nice sized collection, a few more and you're a hoarder!");
}

if (bottlesOfPolish >= 11 && bottlesOfPolish <= 20){
    bottlesOfPolish = alert(""+userName+" you are a hoarder, time to invest in a nail polish rack and open a salon.");
}
