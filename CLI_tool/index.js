const path = require('node:path');
const { parseArgs } = require('node:util');
const { getPackageName } = require('./lib/name');
const { readMarkdownFileSync, writeHTML } = require('./lib/file');

const { values } = parseArgs({
    strict: false
});

if (values.name) {
    const name = getPackageName();
    console.log(name);
    return;
};

if (values.file) {
    const filepath = path.resolve(__dirname, values.file);
    const markdownStr = readMarkdownFileSync(filepath);
    writeHTML(markdownStr, values.out);
    return;
};
console.log('オプションがありません');


// const { values, positionals } = parseArgs({
//     strict: false
// });
// // values: --xxの後に何が入っているか
// // positionals: xxの前に--がないとき
// console.log(values, positionals);

// ツールの利用者が自分だけならば、同期処理を用いても問題ない