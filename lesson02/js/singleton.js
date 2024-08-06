const a = require('./a'); // a.jsを読み込み（実行）
const b = require('./b'); // b.jsを読み込み（実行）
const calc = require('./calc');

console.log(calc.num); // a -> bだと10, b -> aだと5が出力