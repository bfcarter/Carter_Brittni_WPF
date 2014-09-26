

alert ("Let's find out if our 3 items allow us to use our half off coupon!");

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
        item2 = prompt ("Please don't leave blank, enter the cost of your second item");
    }
}

var item3 = prompt("What is the cost for your third item?");
//user must use a number for answer
while (isNaN(item3)){
    item3 = prompt ("Please enter a number");
    while (item3 ===""){
        item3 = prompt ("Please don't leave blank, enter the cost of your third item");
    }
}

var useCoupon = function(item1, item2, item3){
    var itemTotal = (item1 + item2 + item3);
};


for (shopTotal = 100; shopTotal>100;shopTotal++){
    console.log (shopTotal + 'means you can use your coupon');
}


var shopTotal = useCoupon(50,60,70);