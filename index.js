"use strict";
const character = 'Anas Jakwani';
console.log(character);
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    console.log(input);
});
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(10));
let names = ['Anas', 'Talha', 'Haris'];
names.push('Ahad');
let mixed = ['Anas', 22, false, 'Ahad', 27, true];
let work = [];
// for more than one datatype array
let work1 = [];
let obj;
obj = { name: 'Anas',
    age: 22,
    marital: 'Single',
    married: false };
// One more way to define an object
let obj1;
console.log(obj);
let every;
every = "Anas";
console.log(every);
every = 22;
console.log(every);
every = false;
console.log(every);
every = [1, "no", false];
console.log(every);
every = { name: "Anas",
    age: 22,
    married: false };
console.log(every);
let greet;
greet = () => {
    console.log("Hello World");
};
greet();
function add(a, b) {
    return a + b;
}
add(10, 20);
const minus = (a, b) => {
    return a - b;
};
let calc;
calc = (numOne, numTwo, action) => {
    let result1;
    if (action === "add") {
        result1 = numOne + numTwo;
    }
    else {
        result1 = numOne - numTwo;
    }
    return result1;
};
console.log(calc(10, 25, "add"));
