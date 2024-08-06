// ECMAScriptを使う場合は .js ではなく .mjs にする必要あり
// import, export でモジュールの公開と読み込みが可能
export const num = 1;

export const add = (a, b) => {
    return a + b;
};

export const sub = (a, b) => {
    return a - b;
};

export const pow = (n, a) => {
    let res = n;
    for(let i = 1; i < a; i++){
        res *= n;
    }
    return res;
}

// defaultがついてる
export default function () {
    console.log('calc');
}