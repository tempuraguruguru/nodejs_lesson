// exportsで公開されたモジュールをrequire(file_path)で取り込み
const calc = require('./calc');// .jsは省略可能

console.log(calc.num); // 1

let res = calc.add(3, 1);
console.log(res); // 4

res = calc.sub(3, 1);
console.log(res); // 2no

const year = 2002;
console.log(year + "年は" + calc.LeapYear(year) + "日");