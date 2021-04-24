const {curly} = require("node-libcurl");

/**
 * Request the captcha information from the Geetest service.
 * @returns {Promise<null>} if success, return the value of gt, challenge, and key.
 *                          Otherwise, return the failed status code and the message.
 */
async function getCaptchaInfo(){
    // [GET] request url to request captcha information
    const cmd = "https://passport.bilibili.com/web/captcha/combine";
    let data = null;

    await curly.get(cmd)
        .then(res => {
            const result = res.data;

            if(result.code !== 0){
                /*
                    Failed Response Example
                    { code: -400, message: 'Request error.', ts: 1618866384 }
                 */
                data = result;
                return;
            }

            /*
                Success Response Example
                {
                  success: 1,
                  gt: 'd712df3d362b20bd5b3d290adf7603bc',
                  challenge: 'e6cb65ac64471bbad86f62da0281f536',
                  key: '93168fa4173e4ddb8b1d19c918e3a03d'
                }
             */
            data = result.data.result;
        });

    return data;
}

async function getCountryList(){
    // [GET] request url to get the country list for sms service
    const cmd = "https://passport.bilibili.com/web/generic/country/list";
    let data = null;

    await curly.get(cmd)
        .then(res => {
            res = res.data;

            if(res.code !== 0){
                data = res;
            }

            /*
                // success response example
                {
                    common: [...],
                    others: [...]
                }
             */
            data = res;
        })

    return data;
}




export {
    getCaptchaInfo,
    getCountryList
}

