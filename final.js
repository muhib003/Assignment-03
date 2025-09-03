/** Problem -01 ( Divide the Asset ) */
var area = 2060;
//write your code here
var finalAsset = (area / 2);
console.log(finalAsset);

/** Problem -02 ( Cycle or Laptop ) */
var money = 30000;
//write your code here
if(money >= 25000){
    console.log("Laptop");
}
else if(money >=10000 && money < 25000){
    console.log("Cycle");
}
else{
    console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 6 ;
//write your code here
for(var i = 1; i <=lastDay; i++){
    if(i % 3 === 0){
        console.log(i,"- medicine")
    }else{
        console.log(i, "- rest");
    }
}

/** Problem 04 - (Delete / Store) */
var fileName= "slipdf.txt";
//write your code here
if(fileName.includes("#") || fileName.includes(".pdf") || fileName.includes(".docx")){
    console.log("Store")
}else{
    console.log("Delete");
}