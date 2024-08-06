// undiciのversion管理
// yahooのhtmlのbodyタグの取得をECMAでコーディング
import { request } from 'undici'

request('https://www.yahoo.co.jp').then((res) =>{
    return res.body.text()}).then((body) =>{
        console.log(body);
    }
)
