/*
Brittni Carter
9/25/14
 WPF Section 1
 Function_Personal
 */



alert ("Let's find out if our 3 items allow us to use our half off coupon!");

var item1 = prompt("What is the cost for your first item?");
//user must use a number for answer
while (item1 ==="" || isNaN(item1)){
//reprompt user
        item1 = prompt ("Please don't leave blank, enter cost of your first item");

}
var item2 = prompt("What is the cost for your Second item?");
//user must use a number for answer
while (item2 ==="" || isNaN(item2)){
//reprompt user
        item2 = prompt ("Please don't leave blank, enter the cost of your second item");

}

var item3 = prompt("What is the cost for your third item?");
//user must use a number for answer
while (item3 ==="" || isNaN(item3)){
//reprompt user
        item3 = prompt ("Please don't leave blank, enter the cost of your third item");
}

var useCoupon = function(item1, item2, item3){
    var itemTotal = (item1 + item2 + item3);
};


if (shopTotal = 100 || shopTotal>100){

    alert = (shopTotal + 'means you can use your coupon');
}
else {
    alert = ("Spend more money!");
}
