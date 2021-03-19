export {};

let name = 'Atsushi';

name = 'Ham';

// 実質定数
let nickname = 'Ham' as const;
nickname = 'Ham';

// as const を書くと readonlyになる
let profile = {
    name: 'Atsushi',
    height: 178
} as const;

// profile.name = 'Ham';
// profile.height = 180;