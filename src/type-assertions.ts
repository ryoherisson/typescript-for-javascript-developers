export {};

let name: any = 'Ham';


// let length = name.length as string;
let length = (name as string).length;
// let length = (<string>name).length; // 非推奨

// length = 'foo';