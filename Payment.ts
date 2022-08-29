export class Payment{

    constructor(readonly client: string, private details: string, public amount: number){}

    format(): string{
        return `${this.client} is owed $${this.amount} for ${this.details}`;
    }
}