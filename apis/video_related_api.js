const {curly} = require("node-libcurl");

export async function getVideoRelatedTags(bvid){
    const cmd = `http://api.bilibili.com/x/tag/archive/tags?bvid=${bvid}`;
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
    const cmd = `http://api.bilibili.com/x/web-interface/archive/related?bvid=${bvid}`
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