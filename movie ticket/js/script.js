/**
 Brittni Carter
 Movie Ticket
 */
//Find out users name
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
var discountedPrice = (7.00);
var regPrice = (10.00);
if (userAge >= 0 && userAge <= 10 || userAge >= 55){
    alert ("You will pay $"+discountedPrice+"");
}

else
{
    alert("You will pay $ "+regPrice +"");
}