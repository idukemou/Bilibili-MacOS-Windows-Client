const {curly} = require('node-libcurl');

async function getCategoryList(){
    const cmd = "https://api.bilibili.com/x/web-interface/web/channel/category/list";
    let data = null;

    await curly.get(cmd)
        .then((res) => {
            const result = res.data;

            if(result.code !== 0){
                data = result;
            }

            data = {
                success: 1,
                categories: result.data.categories
            }
        });

    return data;
}

export {
    getCategoryList
}