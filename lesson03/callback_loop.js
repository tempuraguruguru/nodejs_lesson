const { writeFile } = require('fs');

for (let i = 0; i < 10; i++) {
    const text = `write: ${i}`;
    writeFile('./data.txt', text, (err) => {
        if (err) {
            return console.error(err);
        }
        console.log(text);
    });
};

// callbackが苦手なこと
// ループ エラーの補足 直列処理
// → promissの登場