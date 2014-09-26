/*
 Brittni Carter
 9/25/14
 WPF Section 1
 Function_Industry
 */
alert("Let's find out the the click through rate for a facebook ad!");
var clicksNum = prompt ("How many clicks did this ad receive?");
//user must use a number for answer
while (isNaN(clicksNum)){
    clicksNum= prompt ("Please enter a number");
    while (clicksNum ===""){
        clicksNum = prompt ("Please don't leave blank, enter the amount of days");
    }
}
var impressionsNum = prompt ("How many impressions did your ad receive?");
//user must use a number for answer
while (impressionsNum===""||isNaN(impressionsNum)){

        impressionsNum = prompt ("Please don't leave blank, enter the amount of days");

}


//function call
var returnNum = calcCtr(clicksNum, impressionsNum);
console.log (returnNum);
var total = calcCtr(clicksNum,impressionsNum);
function calcCtr (clicksNum, impressionsNum){
//round number
var roundCtr = (Math.round((Number(clicksNum) / Number(impressionsNum))));
return roundCtr;
}

alert(("The CTR for this ad is "+total+""));



