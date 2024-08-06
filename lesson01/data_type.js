const obj = {
    foo: 'hello',
    bar: {
        baz: 'world'
    }
};

console.log(obj.foo);
console.log(obj['foo']);
console.log(obj.bar.baz);
console.log(obj['bar']['baz']);


const obj2 = {
    123: '数値',
    '': '空文字列'
};

//   console.log(obj2.123); // SyntaxError
  console.log(obj2[123]); // 数値
//   console.log(obj2.''); // SyntaxError
  console.log(obj2['']); // 空文字列