

alert ("Let's find out if our 4 items allow us to use our half off coupon!");

var item1 = prompt("What is the cost for your first item?");
//user must use a number for answer
while (isNaN(item1)){
    item1 = prompt ("Please enter a number");
    while (item1 ===""){
        item1 = prompt ("Please don't leave blank, enter cost of your first item");
    }
}
var item2 = prompt("What is the cost for your Second item?");
//user must use a number for answer
while (isNaN(item2)){
    item2 = prompt ("Please enter a number");
    while (item2 ===""){
        item2 = prompt ("Please don't leave blank, enter the amount of days");
    }
}

var useCoupon = function(item1, item2, item3, item4){
    var discout = item1 + item2 +item3 + item4
}