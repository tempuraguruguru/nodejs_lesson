// 非同期
const fs = require('node:fs/promises');
async function main() {
    const data = await fs.stat('./example.txt');
    console.log(data);
}
main().catch(console.error);


// 同期
const fs = require('node:fs');
try {
    const data = fs.statSync('./example.txt');
    console.log(data);
} catch (err) {
    console.error(err)
}