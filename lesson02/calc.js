// exports.(変数 or 関数)で変数や関数を外部に公開
exports.num = 1;

exports.add = (a, b) => {
    return a + b;
};

exports.sub = (a, b) => {
    return a - b;
};


// exports.xxxの他にmodule.exportsという変数が利用可能
// module.exportsを利用するとexports.xxxは上書き
module.exports = {
    num: 2,
    add: (a, b) => {
        return 2* a + b;
    },
    sub: (a, b) => {
        return a - 2*b;
    }
};