// 非同期
const fs = require('node:fs/promises');
async function main() {
    const data = await fs.readFile('./example.txt', 'utf8');
    console.log(data)
}
main().catch(console.error)


// 同期
const fs = require('node:fs');
// xxxSyncは同期関数なので、try-catchでエラーを処理できる
try {
    const data = fs.readFileSync('./example.txt', 'utf8');
    console.log('ファイルの内容:', data);
} catch (err) {
    console.error(err);
}