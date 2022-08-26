type strOrNum = string | number;

const character: string = 'Anas Jakwani';
console.log(character);
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    console.log(input);
});

const circ = (diameter: number) =>{
    return diameter * Math.PI;
}

console.log(circ(10));

let names = ['Anas', 'Talha', 'Haris'];

names.push('Ahad');

let mixed = ['Anas', 22, false, 'Ahad', 27, true];  

let work : string[] = [];
// for more than one datatype array
let work1: (strOrNum|boolean)[] = []

let obj: object;
obj = { name : 'Anas',
        age: 22,
        marital: 'Single',
        married: false};
// One more way to define an object
let obj1: {
    name: string,
    age: number,
    married: boolean
};
console.log(obj);

let every: any;
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
          married: false};
console.log(every);

let greet: Function;

greet = (): void =>{
    console.log("Hello World");
}

greet();
function add (a:number, b:number): number{
    return a+b;
}

add(10, 20);

const minus = (a: number, b: number): number =>{
    return a - b;
}

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string): number => {
    if(action === "add"){
        return numOne + numTwo;
    }
    else if(action === "sub"){
        return numOne - numTwo;
    }
}

console.log(calc(10, 20, "sub"));