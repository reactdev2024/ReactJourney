// var declaration
// we can reassigned value & accessible to globally 
var name = "Tausif Shaikh";
console.log("========================================");
console.log("Before change variable value = " + name);
name = "Maitri";
console.log("After change variable value = " + name);
console.log("========================================");
// let declaration
// we can reassigned value but we can only accessible within function scope 
let cityName = "XXX";
function PrintCityName() {
    let cityName = "Mumbai - India";
    console.log("========================================");
    console.log("Let declaration before change value = " + cityName);
    cityName = "Ahemdabad - Gujrat";
    console.log("Let declaration after change value = " + cityName);
    console.log("========================================");
}
console.log(cityName);
PrintCityName();        // print Eziway
console.log(name);      // print Maitri

// const declaration
// we can't reassigned value but we can accessible globally
const companyName = "Eziway Software Solution Pvt Ltd";
console.log("========================================");
console.log("before change company name = " + companyName);
console.log("========================================");
// if you uncomment below 2 line then due to error it will not display output.
//companyName = "Saint Gobain Pvt Ltd."; // Error:  Assignment to constant variable
//console.log("after change company name = "+companyName);  // this line will not execute before of above error.