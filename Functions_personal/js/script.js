/*
Brittni Carter
 9/25/14
 WPF Section 1
 Function_Wacky
*/
// alert("Using your 15% off student card, lets find out how much your purchase will cost.");

var yarnPrice = prompt("What is the cost of your yarn");
//user must use a number for answer
while (yarnPrice ==="" || isNaN (yarnPrice)){
//ask user not to leave blank or use words
        yarnPrice = prompt ("Please enter the cost of your yarn");
}
var applyDiscount = .15;

function calcYarnSale(yarnPrice, applyDiscount){

    var studentDiscount = .15 * yarnPrice;
    return studentDiscount;

}
calcYarnSale(4,.15);
alert = ("The total after the discount it "+studentDiscount+"");