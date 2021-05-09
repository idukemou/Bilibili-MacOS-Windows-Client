const {curly} = require('node-libcurl');
import {COOKIEJAR} from './file_manager';

export async function getViewHistory(page){
    const cmd = `https://api.bilibili.com/x/v2/history?ps=20&pn=${page}`;
    let data = null;

    await curly.get(cmd, {
        COOKIEJAR: COOKIEJAR,
        COOKIEFILE: COOKIEJAR
    })
        .then(res => {
            data = res.data;
        })

    return data;
}

export async function getViewLater(){
    const cmd = "https://api.bilibili.com/x/v2/history/toview";
    let data = null;

    await curly.get(cmd, {
        COOKIEJAR: COOKIEJAR,
        COOKIEFILE: COOKIEJAR
    })
        .then(res => {
            data = res.data;
        })

    return data;
}