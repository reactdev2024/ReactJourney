//========= Normal JavaScript function ===============
// Normal Javascript Function before ES6
function PrintName(name) {
    return "Hello my name is " + name; 
}

//Calling PrintName function
console.log(PrintName("Tausif"));


//========== ES6 arrow function ========================
let PrintUserName = (name) => {
    return "This username is print by arrow function " + name;
}

console.log(PrintUserName("Maitri"));

//if arrow function have only one parameter then we can also as below
// here we remove (name) as name only
// if we use multiple parameter then we can wrap parameter in round brackets as (name,age)
let PrintUserNameWithSingleParam = name => {
    return "This username is print by arrow function with single parameter " + name;
}

console.log(PrintUserNameWithSingleParam("Maitri Joshi"))

// if we have result in one line the we can do as shown below without return keyword
let Sqrt = () =>  5 * 5 ;
console.log(Sqrt());

const printName = (name) => {
    console.log( "Hi, "+name );
};
printName("Tausif");

// function with multiple parameter
const PrintUserDetail = (name,age,birthDate ) => { 
    console.log("My name "+name +" I am "+age+" years old "+ "my birthday is "+birthDate) 
};
  
PrintUserDetail ("Maitri Joshi",28,"23 March 1997");

// Arrow Function with Default Parameters:
const sum = (x, y = 20) => { console.log(x + y)};
sum(10); //output 30
sum(10,40); //output 50
