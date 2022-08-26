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
let work1: (string|number|boolean)[] = []

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