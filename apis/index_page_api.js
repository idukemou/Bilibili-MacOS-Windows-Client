const {curly} = require("node-libcurl");
const path = require("path");
import {COOKIEJAR}  from './file_manager';

async function getRecommendList(){
    let cmd = "https://api.bilibili.com/x/web-interface/index/top/rcmd?fresh_type=3";
    let data = "";

    await curly.get(cmd, {
        COOKIEJAR: COOKIEJAR,
        COOKIEFILE: COOKIEJAR
    })
        .then((res) => {
            const result = res.data;

            if(result.code !== 0){
                data = result;
                return;
            }
            data = result.data;
        });

    return data;
}

async function getVideoFlvUrl(bvid, cid){
    let cmd = `http://api.bilibili.com/x/player/playurl?bvid=${bvid}&cid=${cid}&qn=112&fnval=0&fnver=0&fourk=1`;
    let data = null;

    await curly.get(cmd)
        .then(res => {
            const result = res.data;

            if(result.code !== 0){
                data = result;
                return;
            }

            data = result;
        })

    return data;
}

async function getVideoDetails(bvid){
    let cmd = `http://api.bilibili.com/x/web-interface/view?bvid=${bvid}`;
    let data = null;

    await curly.get(cmd)
        .then(res => {
            const result = res.data;

            if(result.code !== 0){
                data = result;
                return;
            }

            data = result.data;
        });

    return data;
}

async function getVideoPlayInfo(bvid){
    const videoDetail = await getVideoDetails(bvid);
    const videoUrl = await getVideoFlvUrl(bvid, videoDetail.cid);
    return {
        info: videoDetail,
        url: videoUrl.data
    };
}



export {
    getRecommendList,
    getVideoPlayInfo,
    getVideoFlvUrl,
    getVideoDetails
}