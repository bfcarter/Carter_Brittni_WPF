/*
 Brittni Carter
 9/25/14
 WPF Section 1
 Function_Industry
 */
alert("Let's find out the the click through rate for a facebook ad!");
var clicks = prompt ("How many clicks did this ad receive?");
//user must use a number for answer
while (isNaN(clicks)){
    clicks = prompt ("Please enter a number");
    while (clicks ===""){
        clicks = prompt ("Please don't leave blank, enter the amount of days");
    }
}
var impressions = prompt ("How many impressions did your ad receive?");
//user must use a number for answer
while (impressions ===""||isNaN(impressions)){

        impressions = prompt ("Please don't leave blank, enter the amount of days");

}
//function call
calcCtr(clicks, impressions);

var total = calcCtr(clicksNum,impressionsNum);
function calcCtr (clicks, impressions){

console.log (Math.round((Number(clicksNum) / Number(impressionsNum))

}

alert = (("The CTR for this ad is "+total+""));


var clickThroughRate = clicks / impressions;
return clickThroughRate;