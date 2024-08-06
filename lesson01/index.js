const { readFile } = require('fs');

console.log('A');

// __filname は自分自身のファイルパスが入る
readFile(__filename, (err, data) => {
    // ファイルの読み込みが終わった時に呼び出される
    console.log('B');
});

console.log('C');

// ファイルを読み込みを前提とした処理を書くとダメ