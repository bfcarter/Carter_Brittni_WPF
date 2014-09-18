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

//age groups for the three social media channels
if (userAge >= 0 && userAge <= 18){
    userAge = alert(""+userName+" Instagram is the most popular social media channel for your age group");
}


if (userAge >= 19 && userAge <= 29){
    userAge = alert(""+userName+" Twitter is the most popular social media channel for your age group");
}

if (userAge >= 30 && userAge <= 40){
    userAge = alert(""+userName+" LinkedIn is the most popular social media channel for your age group");
}

