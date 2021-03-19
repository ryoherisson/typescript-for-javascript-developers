export {};

class VisaCard {
    constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('Ham');
console.log(myVisaCard);
// myVisaCard.owner = 'Bacon';