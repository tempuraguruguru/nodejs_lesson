// defaultがついてるやつは読み込み方が変わる
import defaultCalc, { num, add, sub, pow } from './calc.mjs';

// 呼び出したタイミングで読み込まれる
// import('./calc.mjs').then(
//     (module) => {
//         console.log(module.add(1, 2))
//     }
// )

console.log(num);

let res = add(3, 1);
console.log(res); // 4

res = sub(3, 1);
console.log(res); // 2

const value = pow(2, 1);
console.log(value);

defaultCalc();