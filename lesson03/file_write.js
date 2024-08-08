// 非同期
const fs = require('node:fs/promises');
async function main() {
    await fs.writeFile(
        './example.txt',
        'Hello World!',
        { encoding: 'utf-8' } // オプションを選択することで追記モードなどを選択できる
    );
}
main().catch(console.error)

// const fs = require('node:fs/promises');
// async function main() {
//     for (let i = 0; i < 10; i++) {
//         await fs.writeFile(
//             './example.txt',
//             `Hello World!: ${i}\n`,
//             { encoding: 'utf-8', flag: 'a' } // 追記モードでファイルを開く
//         );
//     }
// }
// main().catch(console.error)



// 同期処理
const fs = require('node:fs');
try {
    fs.writeFileSync(
        './example.txt',
        'Hello World!\nHello World!',
        { encoding: 'utf-8' }
    );
} catch (err) {
    console.error(err)
}
