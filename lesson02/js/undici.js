const { request } = require('undici');

request('https://www.yahoo.co.jp').then((res) =>{
    return res.body.text()}).then((body) => {
        console.log(body);
    }
);