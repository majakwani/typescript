import { Invoice } from "./invoice.js";
import { Payment } from "./Payment.js";

export function renderOnPage(parent: HTMLUListElement, value: string ,doc: Invoice | Payment){
    const li = document.createElement('li');
    const h4 = document.createElement('h4');
    h4.innerText = value;

    li.append(h4);

    const p = document.createElement('p');
    p.innerText = doc.format();

    li.append(p);
    parent.append(li);
} 