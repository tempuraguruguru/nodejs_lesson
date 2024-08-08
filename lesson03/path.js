// 文字列処理なので同期処理
const path = require('node:path');

const joinPath = path.join('./src', 'example.txt');
// src/example.txt
console.log(joinPath) // ディレクトリとファイル名の統合

const resolvePath = path.resolve('./src', 'example.txt');
// /path/to/src/example.txt
console.log(resolvePath) // 絶対パスの取得