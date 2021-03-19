export {};

class Mahotsukai {}
class Souryo {}

// classは複数の機能を継承できない
class Taro extends Mahotsukai {}

interface Kenja {
    ionazun(): void;
}

interface Senshi {
    kougeki(): void;
}

// interfaceであれば複数実装できる
class Jiro implements Kenja, Senshi {
    ionazun(): void {
        console.log('ionazun');
    }

    kougeki(): void {
        console.log('kougeki');
    }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();