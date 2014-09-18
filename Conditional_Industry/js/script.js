/*
 Brittni Carter
 9/17/14
 WPF Section 1
 Industry Conditional - Staffing (marketing)
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
while (isNaN(userAge)){
    userAge = prompt ("Please enter a number representing your age.");
    while (userAge ===""){
        userName = prompt ("Please don't leave blank, enter your age")
    }
}

//Must input a number

Console.log(userAge);

//age groups for the three social media channels
if (userAge >= 0 && userAge <= 18){
    userAge = prompt
}

//Ask when they are most active on social media

var userActivity = prompt ("Which social media channel do you use most? Twitter, Facebook or Instagram");

console.log(userActivity);

