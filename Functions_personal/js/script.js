alert("This is in the js file");

var yarnPrice = prompt("What is the cost of your yarn");
//user must use a number for answer
while (isNaN(yarnPrice)){
    yarnPrice = prompt ("Please enter a number");
    while (yarnPrice ===""){
        yarnPrice = prompt ("Please don't leave blank, enter the cost of your yarn");
    }
}
function calcYarnSale(){
    var studentDiscount = .15 * yarnPrice;
    return studentDiscount;

}
calcYarnSale();