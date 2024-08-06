function isGlobal() {
    console.log(this === global);
};
isGlobal(); // true


function printName() {
    console.log(this.name);
};
printName(); // undefined


function printName2() {
    console.log(this.name);
};
const obj = {
    name: 'obj-name',
    printName2: printName2
};
obj.printName2(); // obj-name


function printName3() {
    // const a = this; // thisを他の変数に避難させることで回避もできる(非推奨)
    setTimeout(function () {
        console.log(this.name); // ここのthisはsetTimeout(~)のfunction()を指している
    }, 1000);
    console.log(this.name); // ここのthisはprintName3()を指している
};
const obj2 = {
    name: 'obj-name',
    printName3: printName3
};
obj2.printName3(); // undefined
// functionがあったらthisが違うところを指す場合がある


function printName4() {
    setTimeout(function () {
        console.log(this.name);
        // setTimeoutのコンテキストをprintNameのthisに固定する
    }.bind(this), 1000);
};
const obj4 = {
    name: 'obj-name',
    printName4: printName4
};
obj4.printName4(); // obj-name


function printName5() {
    // Arrow Functionのthisは呼び出し元になる=printNameと一致する
    setTimeout(() => {
        console.log(this.name)
    }, 1000);
}
const obj5 = {
    name: 'obj-name',
    printName5: printName5
};
obj5.printName5(); // obg-name