const {curly} = require("node-libcurl");

export async function getSearchHotWords(){
    const cmd = "http://s.search.bilibili.com/main/hotword";
    let data = null;

    await curly(cmd)
        .then((res) => {
            const result = res.data;

            if(result.code !== 0){
                data = result;
                return;
            }

            data = {
                code: 0,
                list: result.list
            };
        })

    return data;
}

export async function getSearchSuggestWords(keyword){
    const cmd = encodeURI(`https://s.search.bilibili.com/main/suggest?main_ver=v1&highlight=&term=${keyword}`);
    let data = null;

    await curly(cmd)
        .then((res) => {
            const result = res.data;

            if(result.code !== 0){
                data = result;
                return;
            }

            data = {
                code: 0,
                result: result.result.tag
            };
        })

    return data;
}