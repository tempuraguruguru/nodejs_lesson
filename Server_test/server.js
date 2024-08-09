const express = require('express');
const path = require('node:path');
const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017');
const app = express();

// Node.jsからmongodbに接続
async function main() {
    // サーバーのlisten前に接続する
    await client.connect();
    const db = client.db('my-app');
    // ...

    const logMiddleware = (req, res, next) => {
        console.log(req.method, req.path);
        next();
    }
    const errorMiddleware = (req, res, next) => {
        next(new Error('ミドルウェアからのエラー'));
    };
    // ejsをビューエンジンに指定
    app.set('view engine', 'ejs');
    app.get('/', async (req, res) => {
        try{
            const users = await db.collection('user').find().toArray();
            const names = users.map((user) => {return user.name});
            res.render(path.join(__dirname, 'views', 'index.ejs'), { users: names });
            // res.render(path.resolve(__dirname, 'views/index.ejs'));
        } catch(err){
            console.error(err);
            res.status(500).send('Internal Server Error');
            // errorMiddleware
        }
    });
    app.get('/user/:id',logMiddleware,(req, res) => {
        try{
            res.status(200).send(req.params.id); // :idをreq.params.idとして受け取る
        } catch(err){
            res.status(500).send('Internal Server Error');
            // errorMiddleware;
        }
    });

    // APIの作成
    app.post('/api/user', express.json(), async (req, res) => {
        const name = req.body.name;
        if (!name) {
            res.status(400).send('Bad Request');
            return;
        }
        await db.collection('user').insertOne({ name: name });
        res.status(200).send('Created');
    });

    // publicディレクトリ以下のファイルを静的ファイルとして配信
    app.use('/static', express.static(path.join(__dirname, 'public')));
    // 包括的エラーハンドリング  引数が4つ && 最後に定義されている
    app.use((err, req, res, next) => {
        console.error(err);
        res.status(500).send('Internal Server Error');
    });
    app.listen(3000, () => {
        console.log('start listening');
    });
}

main();