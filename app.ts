import { Invoice } from './invoice.js';
import { Payment } from './Payment.js';

const invOne = new Invoice('Anas', 'Worked on a website', 600);
const invTwo = new Invoice('Talha', 'Worked the finances', 500);

const payOne = new Payment('Ahmed', 'Sold our stuff', 250);
const payTwo = new Payment('Ahad', 'Did Accounting', 500);

let invoices: Invoice[] = [];
let payments: Payment[] = [];

invoices.push(invOne);
invoices.push(invTwo);

payments.push(payOne);
payments.push(payTwo);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) =>{
    e.preventDefault();
    console.log(type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber);
})