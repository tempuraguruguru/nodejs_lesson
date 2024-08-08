const { readFile } = require('fs');
console.log('A');

// 第二引数の関数がコールバック
// 処理が終わった後に読み込まれる関数を登録する
readFile(__filename, (err, data) => {
    console.log('B', data);
});

console.log('C');