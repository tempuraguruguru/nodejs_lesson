// 非同期
const fs = require('node:fs/promises');
async function main() {
    await fs.unlink('./example.txt');
}
main().catch(console.error)


// 同期
const fs = require('node:fs');
try {
    fs.unlinkSync('./example.txt');
} catch (err) {
    console.error(err);
}