const {curly} = require('node-libcurl');
const path = require('path');
const cookieJar = path.join(__dirname, '/cookie/cookiejar.txt');

export async function getViewHistory(){
    const cmd = "https://api.bilibili.com/x/web-interface/history/cursor?ps=20";
    let data = null;

    await curly.get(cmd, {
        COOKIEJAR: cookieJar,
        COOKIEFILE: cookieJar
    })
        .then(res => {
            const result = res.data;
            data = result;
        })

    return data;
}