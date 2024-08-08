// callbackは完了時に一度だけ発生
// ストリーム処理は何度も処理が発生

const EventEmitter = require('events');

// EventEmitterの基底クラスを継承して独自イベントを扱うEventEmitterを定義
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// myeventという名前のeventを受け取るリスナーを設定
myEmitter.on('myevent', (data) => {
    console.log('on myevent:', data);
});
// myeventを発行
myEmitter.emit('myevent', 'one');

setTimeout(() => {
    // myeventを発行
    myEmitter.emit('myevent', 'two');
}, 1000);


// データを少しずつ貯めて、一定量貯まったらイベントを発生させる
// Streamを利用することで、断続的に発生するイベントの制御、データの流量の調整、変換処理など連続するデータの流れを効率的に扱うことが可能
// どんな時に便利か？
// ex) 100GBのファイルを読み込む場合、従来は100GBをすべて読み込まなくてはいけない。100GBのメモリが必要
// しかし、ストリーム処理を用いて1GBずつ読み込むことで少しずつ処理することができる

stream.on('error', (err) => {
    console.error(err);
});

// エラーハンドリングがめっちゃ大事
// もしAさんがプロセス1でエラーが起こしてしまったとき、プロセス1はクラッシュする
// このとき、Bさん、Cさんもプロセス1を発生させていた場合、この2人のプロセス1もクラッシュする