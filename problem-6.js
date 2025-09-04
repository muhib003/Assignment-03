/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
//write your code here
var finalSalary = 0;
for(var i = 1; i <= 1; i++){
    var firstPercentage = ((startingSalary * 5) / 100);
    var finalSalary = firstPercentage + startingSalary;
    for(var j = 1; j <= (experience - 1); j++){
        var restPercentage = ((finalSalary * 5) / 100);
        var finalSalary = restPercentage + finalSalary;
    }
}
console.log(finalSalary.toFixed(2));
