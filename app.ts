import { Invoice } from './invoice.js';
import { Payment } from './Payment.js';
import { renderOnPage } from './listTemplate.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
form.addEventListener('submit', (e: Event) =>{
    e.preventDefault();

    let doc: Invoice | Payment;

    if(type.value === 'invoice'){
        doc = new Invoice (tofrom.value, details.value, amount.valueAsNumber);
        renderOnPage(ul,type.value, doc);
    }
    else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
        renderOnPage(ul,type.value, doc);
    }
});