/*
 Brittni Carter
 9/11/2014
 WPF Section 1
 Expressions_wacky
 */

alert ("Hello, Do you have more pairs of shoes then other people and what would the total amount be?");
var youWin = prompt ("Do you think you will have the most pairs of shoes?");
var yourShoes =prompt ("How many pairs of shoes do you have?");
console.log(yourShoes);
alert ("The other people have 200, 234, 155 and 333");
//Ask the user how many racks of shoes there are
var amountOfRacks =prompt ("How many other people are you being compared with?");
console.log (Number= amountOfRacks);
// there are four racks of shoes
var numRacks = 4;
console.log(numRacks);
//the amount of shoes on the shoe racks
var shoeRacks = [200,234,155,333];
//add together the amount of shoes
var total = shoeRacks[0] +shoeRacks[1] +shoeRacks[2] +shoeRacks[3] + yourShoes;
console.log(total);
//share the total
alert ("all of the shoes together are "+total+"");
console.log (total);
alert ("Do you have the most shoes?");