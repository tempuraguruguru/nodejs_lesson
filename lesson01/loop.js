const arr = ['foo', 'bar', 'baz'];

const students = [
    { name: 'Alice', age: 10 },
    { name: 'Bob', age: 20 },
    { name: 'Catherine' , age: 30 }
];

// 一番基本のループ
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    console.log(students[i].name);
}

// 配列オブジェクトにはforeach
const arr2 = ['foo', 'bar', 'baz'];

arr2.forEach((element) => {
    console.log(element);
});

// 現環境でメジャー
const arr3 = ['foo', 'bar', 'baz'];

for (const element of arr3) {
    console.log(element);
}


// for...ofか、基本的なfor文の2択で選ぶのがよい
// 添字が必要ない → for...of
// 添字が必要 → for文
