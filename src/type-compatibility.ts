export {};

let fooCompatibile: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatibile);

fooCompatibile = barCompatible;

console.log(typeof fooCompatibile);

let fooIncompatible: string;
let barInCompatible: number = 1;

// fooIncompatible = barInCompatible;

let fooString: string;
let barString: string = 'string';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;

interface Animal {
    age: number;
    name: string;
}

class Person {
    constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(43, 'Ham');
console.log(me);