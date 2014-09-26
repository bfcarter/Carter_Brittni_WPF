alert("Using your 15% off student card, lets find out how much your purchase will cost.");

var yarnPrice = prompt("What is the cost of your yarn");
//user must use a number for answer
while (yarnPrice ==="" || isNaN (yarnPrice)){

        yarnPrice = prompt ("Please don't leave blank, enter the cost of your yarn");
}
function calcYarnSale(){
    var studentDiscount = .15 * yarnPrice;
    return studentDiscount;

}
calcYarnSale();