<<<<<<< Updated upstream
// undiciのversion管理
=======
>>>>>>> Stashed changes
// yahooのhtmlのbodyタグの取得をECMAでコーディング
import { request } from 'undici'

request('https://www.yahoo.co.jp').then((res) =>{
    return res.body.text()}).then((body) =>{
        console.log(body);
    }
<<<<<<< Updated upstream
)
=======
)
>>>>>>> Stashed changes
