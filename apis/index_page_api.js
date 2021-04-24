const {curly} = require("node-libcurl");

async function getRecommendList(){
    let cmd = "https://api.bilibili.com/x/web-interface/index/top/rcmd?fresh_type=3";
    let data = "";

    console.log("API 接受到了");

    await curly.get(cmd,)
        .then((res) => {
            const result = res.data;

            if(result.code !== 0){
                data = result;
                return;
            }
            data = result.data;
        });

    console.log("API 结束了");
    return data;
}

export {
    getRecommendList
}