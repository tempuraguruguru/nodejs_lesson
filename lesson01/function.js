// 通常
function add(a, b) {
    return a + b;
}
const value = add(1, 2);
console.log(value);


// 引数にオブジェクト
function setName(obj) {
    obj.name = 'Bob';
}
const person = { name: 'Alice' };
console.log(person.name); // Alice
setName(person); // 参照渡し
console.log(person.name); // Bob


// 関数(function)は関数式として変数に代入
const add2 = function(a, b) {
    return a + b;
}
// Callbackに無名関数
setTimeout(function() {
    console.log('1s')
}, 1000);


// 引数にデフォルトの値を設定
function add3(a, b = 2) {
    return a + b;
}
const total = add3(1);
console.log(total); // 3
const total2 = add3(1, 3);
console.log(total2); // 4


// 以下の二つの挙動はほぼ同じ
function add4(a, b) { // 通常
    return a + b;
}
const add5 = (a, b) => { // Arrow Function
    return a + b;
};

// thisの扱いに差がある
const double = a => a * 2; // Arrow Functionは、1つしかない引数の括弧(a), 関数内部の処理が1行{ a*2 }, 返り値 return a, を省略可能
console.log(double(3)); // 6