import {parseCookieJarFile} from "./user_login_api";
import {COOKIEJAR} from './file_manager';

const {curly} = require("node-libcurl");
const path = require('path');
const querystring = require("querystring");

export async function getVideoRelatedTags(bvid){
    const cmd = `https://api.bilibili.com/x/tag/archive/tags?bvid=${bvid}`;
    let data = null;

    await curly.get(cmd)
        .then((res) => {
            const result = res.data;

            if(result.code !== 0){
                data = {code: -1, data: []};
                return;
            }

            data = result;
        })

    return data;
}

export async function getVideoSuggestions(bvid){
    const cmd = `https://api.bilibili.com/x/web-interface/archive/related?bvid=${bvid}`
    let data = null;

    await curly.get(cmd)
        .then((res) => {
            const result = res.data;

            if(result.code !== 0){
                data = {code: -1, data: []};
                return;
            }

            data = result;
        })

    return data;
}

export async function updateVideoPlayProgress(aid, cid, progress){
    const cmd = `https://api.bilibili.com/x/v2/history/report`;
    let data = null;

    const cookies = await parseCookieJarFile();

    await curly.post(cmd, {
        COOKIEJAR: COOKIEJAR,
        COOKIEFILE: COOKIEJAR,
        POSTFIELDS: querystring.stringify({
            "aid": aid,
            "cid": cid,
            "progress": progress,
            "platform": "ios",
            "csrf": cookies['bili_jct']
        })
    })
        .then(res => {
            data = res.data;
        })

    return data;
}

export async function uploadVideoHeartBeat(aid, bvid, cid, progress){
    const cmd = `https://api.bilibili.com/x/click-interface/web/heartbeat`;
    let data = null;

    const cookies = await parseCookieJarFile();

    await curly.post(cmd, {
        COOKIEJAR: COOKIEJAR,
        COOKIEFILE: COOKIEJAR,
        POSTFIELDS: querystring.stringify({
            "aid": aid,
            "cid": cid,
            "bvid": bvid,
            "played_time": progress,
            "realtime": progress,
            "csrf": cookies['bili_jct']
        })
    })
        .then(res => {
            data = res;
        });

    return data;
}