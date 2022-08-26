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

let mixed = ['Anas', 22, false, 'Ahad', 27, true]