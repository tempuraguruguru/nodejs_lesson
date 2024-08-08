const express = require('express');
const app = express();

const logMiddleware = (req, res, next) => {
    console.log(req.method, req.path);
    next();
}

const errorMiddleware = (req, res, next) => {
    next(new Error('ミドルウェアからのエラー'));
};

app.get('/',logMiddleware, (req, res) => {
    try {
        res.status(200).send('hello world\n');
    } catch (err) {
        res.status(500).send('Internal Server Error');
        // errorMiddleware;
    }
});

app.get('/:id',logMiddleware,(req, res) => {
    try{
        res.status(200).send(req.params.id); // :idをreq.params.idとして受け取る
    } catch(err){
        res.status(500).send('Internal Server Error');
        // errorMiddleware;
    }
});

// 包括的エラーハンドリング
// 引数が4つ && 最後に定義されている
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Internal Server Error');
});

app.listen(3000, () => {
    console.log('start listening');
});