/*
 Brittni Carter
 9/17/14
 WPF Section 1
 Industry Conditional - Social Media (marketing)
 */
alert("Thank you for your time, please answer the following questions");
//Which Social Media Channel is most popular for your age group?

var userName = prompt ("Please type in your name");
while (userName ===""){
    userName = prompt ("Please type in your name. \n Cannot continue if left blank")
}
console.log(userName);

//Ask the user their age
var userAge = prompt ("Please type in your age");
//Must input a number
while (isNaN(userAge)){
    userAge = prompt ("Please enter a number representing your age.");
    while (userAge ===""){
        userName = prompt ("Please don't leave blank, enter your age");
    }
}
console.log(userAge);

//Ask the user which channel is their favorite
var userChannel = prompt ("what social media channel do you use the most? (Twitter, LinkedIn or Instagram");
while (userChannel ==="") {
    userChannel= prompt("Please enter one Twitter, LinkedIn or Twitter");
}
var favChannel = ["Twitter", "LinkedIn","Instagram"];
console.log (favChannel);
//how long is this array?
console.log(favChannel.length);
//age groups for the three social media channels
if (favChannel[0]&&userAge >= 0 && userAge <= 18){
    userAge = alert(""+userName+" You don't match your peers! Instagram is the most popular social media channel for your age group");
}

if (favChannel[0]&&userAge >= 19 && userAge <= 29){
    userAge = alert(""+userName+" You are just like your peers! Twitter is the most popular social media channel for your age group");
}

if (favChannel[0]&&userAge >= 30 && userAge <= 40){
    userAge = alert(""+userName+" You don't match your peers! LinkedIn is the most popular social media channel for your age group");
}

if (favChannel[1]&&userAge >= 0 && userAge <= 18){
    userAge = alert(""+userName+" You don't match your peers! Instagram is the most popular social media channel for your age group");
}

if (favChannel[1]&&userAge >= 19 && userAge <= 29){
    userAge = alert(""+userName+" You don't match your peers! Twitter is the most popular social media channel for your age group");
}

if (favChannel[1]&&userAge >= 30 && userAge <= 40){
    userAge = alert(""+userName+" You are just like your peers! LinkedIn is the most popular social media channel for your age group");
}

if (favChannel[2]&&userAge >= 0 && userAge <= 18){
    userAge = alert(""+userName+" You are just like your peers! Instagram is the most popular social media channel for your age group");
}

if (favChannel[2]&&userAge >= 19 && userAge <= 29){
    userAge = alert(""+userName+" You don't match your peers! Twitter is the most popular social media channel for your age group");
}

if (favChannel[2]&&userAge >= 30 && userAge <= 40){
    userAge = alert(""+userName+" You don't match your peers! LinkedIn is the most popular social media channel for your age group");
}