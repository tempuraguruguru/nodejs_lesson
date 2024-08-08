const promiseFunc = new Promise((resolve, reject) => {
    // 非同期で行う処理を記述する
    // エラーが起きた時はrejectを呼び出す
    if (errorが起きた時) {
        return reject(エラー内容);
    }
    // 成功した時はresolveを呼び出す
    resolve(成功時の内容);
});

promiseFunc.then(成功=resolve時に実行する関数)
promiseFunc.catch(失敗=reject時に実行する関数)

// thenで成功時をつなげる、失敗時はcatchに飛ぶ
// ネストが深くなりにくい
promiseA()
    .then((data) => promiseB(data))
    .then((data) => promiseC(data))
    .catch((err) => console.log(err)) // エラーを1箇所で書くことが可能

// ループはまだ苦手 + 条件分岐