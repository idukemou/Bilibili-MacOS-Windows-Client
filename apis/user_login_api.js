const {curly} = require("node-libcurl");
const querystring = require("querystring");
const {session} = require("electron");
const path = require('path');
const fs = require('fs');
const cookieJar = path.join(__dirname, '/cookie/cookiejar.txt');

/**
 * Check if user has login.
 * @returns {Promise<null>} return true if user has sign in, otherwise return false.
 */
async function isUserLogin(){
    const cmd = "https://api.bilibili.com/x/web-interface/nav";
    let data = null;

    await curly.get(cmd, {
        COOKIEJAR: cookieJar,
        COOKIEFILE: cookieJar
    })
        .then(res => {
            const result = res.data;

            if(result.code !== 0){
                data = result.data;
            }

            data = result.data;
        })

    return data;
}

/**
 * Request the captcha information from the Geetest service.
 * @returns {Promise<null>} if success, return the value of gt, challenge, and key.
 *                          Otherwise, return the failed status code and the message.
 */
async function getCaptchaToken(){
    // [GET] request url to request captcha information
    const cmd = "https://passport.bilibili.com/web/captcha/combine?plat=6";
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

            data = res;
        })
    return data;
}


async function sendCaptchaCode(args){

    const cmd = "https://passport.bilibili.com/web/sms/general/v2/send";
    const {tel, cid, key, challenge, validate, seccode} = args;
    let data = null;

    await curly.post(cmd, {
        postFields: querystring.stringify({
            "tel": tel,
            "cid": cid,
            "type": "21",
            "captchaType": "6",
            "key": key,
            "challenge": challenge,
            "validate": validate,
            "seccode": seccode
        })
    })
        .then(res => {
            data = res.data;
        })

    return data;
}

async function userLoginWithSmscode(args){

    const cmd = "https://passport.bilibili.com/web/login/rapid";
    const {cid, tel, smsCode} = args;
    let data = null;

    await curly.post(cmd, {
        VERBOSE: true,
        FOLLOWLOCATION: true,
        COOKIEFILE: cookieJar,
        COOKIEJAR: cookieJar,
        postFields: querystring.stringify({
            "cid": cid,
            "tel": tel,
            "smsCode": smsCode
        })
    })
        .then(res => {
            const result = res.data;
            data = result.data;
        })

    return data;
}

function userLogout(){
    return new Promise((resolve) => {
        fs.writeFile(cookieJar, '', () => {
            resolve({
                code: 0,
                message: '退出成功'
            })
        })
    });
}


function sessionTest(){
    console.log("====session====");
    session.defaultSession.cookies.get({})
        .then((cookies) => {
            console.log(cookies);
        });
}

function setCookie(name, value){
    const cookie = {
        url: 'https://www.bilibili.com',
        name,
        value
    };

    session.defaultSession.cookies.set(cookie)
        .then(() => {
            console.log('set cookie successfully');
        });
}



export {
    setCookie,
    sessionTest,
    userLoginWithSmscode,
    sendCaptchaCode,
    isUserLogin,
    userLogout,
    getCaptchaToken,
    getCountryList
}

