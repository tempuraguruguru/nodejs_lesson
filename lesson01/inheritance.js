// 配列の長さを標準出力に表示する
Array.prototype.showLength = function() {
    // thisは生成された配列自身をさす
    console.log(this.length);
}

Array.prototype.shows = function(){
    for(let i = 0; i < this.length; i++){
        console.log(this[i]);
    }
}

const a = [1, 2, 3];
console.log(a); // [ 1, 2, 3 ]
a.showLength(); // 3
a.shows();