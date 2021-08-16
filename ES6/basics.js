//Arrow Functions
console.log("Arrow Functions")
let isPositive = num => num > 0;
console.log(isPositive(-10));

//classes , objects and constructor
console.log("Classes and objects")
class House {
    constructor(color) {
        this.color = color;
    }
}

let myobj= new House("Red");
console.log(`Color of my house is: ${myobj.color}`)

//destructing objects
let car = {
    model: "Mercedes Benz S class",
    price: "1 Crore"
}

let {model, price} = car;
console.log(model);
console.log(price);


//Object Literals
console.log("object Literals")
let firstName = "shubam", lastName = "dadhwal"
let person ={
    firstName,
    lastName
};
console.log(person.firstName)
console.log(person.lastName)


//template Strings
console.log("Template Strings")
let fname = "shubam"
let lname = "dadhwal"
console.log(`Hello ${fname} ${lname} , Hope you are doing well!`)


// rest and spread opeartors
console.log("rest and spread opeartors")
let displayColors = function (message, ...colors) {
    console.log(message)
    for (i in colors) {
        console.log(colors[i])
    }
}

let colors = ["Blue", "Pink", "Green"];
displayColors("List of Colors", ...colors);