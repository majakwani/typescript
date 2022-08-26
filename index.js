var character = 'Anas Jakwani';
console.log(character);
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    console.log(input);
});
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(10));
var names = ['Anas', 'Talha', 'Haris'];
names.push('Ahad');
var mixed = ['Anas', 22, false, 'Ahad', 27, true];
var work = [];
// for more than one datatype array
var work1 = [];
var obj;
obj = { name: 'Anas',
    age: 22,
    marital: 'Single',
    married: false };
// One more way to define an object
var obj1;
console.log(obj);
var every;
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
var greet;
greet = function () {
    console.log("Hello World");
};
greet();
function add(a, b) {
    return a + b;
}
add(10, 20);
var minus = function (a, b) {
    return a - b;
};
var calc;
calc = function (numOne, numTwo, action) {
    var result1;
    if (action === "add") {
        result1 = numOne + numTwo;
    }
    else {
        result1 = numOne - numTwo;
    }
    return result1;
};
console.log(calc(10, 25, "add"));
