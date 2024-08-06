// varは変数のスコープを確認しなくて良い
if(true){
    var foo = 5;
}
console.log(foo);

// constはスコープ内で再代入不可な変数、letはスコープ内で再代入可能な変数
if(true){
    const bar = 5;
}
console.log(bar);


const foo = 5;
console.log(foo);
foo = 'test'; // fooはconstなのでtype errorが発生
console.log(foo);


const abc = 'abc'; // OK
const _abc = '_abc'; // OK
const abc123 = 'abc123'; // OK
// const 123 = '123'; // NG 数字先頭の定義はできない


// fooをletにすることで再代入可能
let foo = 5;
console.log(foo);
foo = 'test';
console.log(foo);


// 変数型の優先順位は const > let > var