const express = require('express');
const path = require('node:path');
const app = express();

const logMiddleware = (req, res, next) => {
    console.log(req.method, req.path);
    next();
}

const errorMiddleware = (req, res, next) => {
    next(new Error('ミドルウェアからのエラー'));
};

// ejsをビューエンジンに指定
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    try{
        const users = ['alpha', 'bravo', 'charlie', 'delta'];
        res.render(path.join(__dirname, 'views', 'index.ejs'), { users: users });
        // res.render(path.resolve(__dirname, 'views/index.ejs'));
    } catch(err){
        res.status(500).send('Internal Server Error');
        // errorMiddleware
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