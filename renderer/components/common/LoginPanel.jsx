import {useEffect, useRef, useState} from "react";
import {Input, message} from 'antd';
import '../../styles/login.css';
import Header from "../layout/header";
import store from "../../redux/store";
import electron from "electron";
import {getCountryListAction, getUserInfoAction} from "../../redux/actionCreators";

const ipcRenderer = electron.ipcRenderer || false;
let captchaToken = {
    gt: "",
    challenge: "",
    key: "",
    validate: "",
    seccode: ""
}

if(ipcRenderer){
    ipcRenderer.send("request_country_list");
    ipcRenderer.once("fetch_country_list", (event, data) => {
        store.dispatch(getCountryListAction(data));
    });
}

/**
 * Country list panel.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function CountryListSelect(props){
    const [countryList, setCountryList] = useState(store.getState().countryList);
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        setCountryList(store.getState().countryList);
    }, [store.getState().countryList])

    useEffect(() => {
        props.show && setDisplay(true);
    }, [props.show]);

    function closePanel(){
        props.handleShowCountryList();
        setTimeout(() => {
            setDisplay(false);
        }, 600);
    }

    function selectCountry(data){
        props.changeCountry(data);
        closePanel();
    }

    return (
        <section
            className={`login-panel-wrapper country-selector-wrapper country-selector-${props.show ? 'show' : 'hide'}`}
            style={{display: (display? 'block': 'none')}}
        >
            <Header
                left={
                    <span className="iconfont icon-back login-close-btn" onClick={() => closePanel()}/>
                }
                center={
                    <span>选择国家地区</span>
                }
            />

            <section className="country-selector-content">
                {
                    countryList.map((countryItem) => (
                        <div
                            className="country-list-item"
                            key={countryItem.id}
                            onClick={() => selectCountry({
                                id: countryItem.id,
                                cname: countryItem.cname,
                                country_id: countryItem.country_id
                            })}>
                            {countryItem.cname}
                        </div>
                    ))
                }
            </section>
        </section>
    )
}


function CaptchaPanel(props){

    function appendCaptchaPanel(captcha){
        captcha.appendTo(document.getElementById("captcha-panel-wrapper"));

        captcha.onSuccess(() => {
            const result = captcha.getValidate();
            console.log([result.geetest_validate, result.geetest_seccode]);
            captchaToken.validate = result.geetest_validate;
            captchaToken.seccode = result.geetest_seccode;
            props.setShowCaptchaPanel(false);
            props.sendCaptchaCode();
        })
    }

    function showCaptchaPanel(){
        window.initGeetest({
            gt: captchaToken.gt,
            challenge: captchaToken.challenge,
            offline: false,
            new_captcha: true,
            product: "popup",
            width: "340px",
            https: true
        }, appendCaptchaPanel)
    }

    useEffect(() => {
        showCaptchaPanel();
    })

    return(
        <div id="captcha-panel-container">
            <div id="captcha-panel-wrapper"></div>
        </div>
    )
}



/**
 * Login main panel.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function LoginPanel(props){

    const data = {
        loginMethod: {
            smscode: "smscode",
            password: "password",
            unknown: "unknown"
        },
        title: {
            smscode: "手机号登录注册",
            password: "密码登录",
            unknown: "未知登录方式"
        }
    }

    // method: smscode | password | qrcode
    const [loginMethod, setLoginMethod] = useState(data.loginMethod.smscode);
    const [show, setShow] = useState(true);
    const [tel, setTel] = useState();
    const [captchaCode, setCaptchaCode] = useState();
    let title = data.title[loginMethod];
    const [country, setCountry] = useState({
        id: 1,
        cname: "中国大陆",
        country_id: 86
    });
    const [showCountryList, setShowCountryList] = useState(false);
    const [showCaptchaPanel, setShowCaptchaPanel] = useState(false);

    function closePenal(){
        setShow(false);
        setTimeout(() => {
            props.display();
        }, 600);
    }

    function changeLoginMethod(){
        switch (loginMethod) {
            case 'smscode':
                setLoginMethod(data.loginMethod.password);
                break;
            case 'password':
                setLoginMethod(data.loginMethod.smscode);
                break;
            default:
                setLoginMethod(data.loginMethod.unknown);
        }
    }

    function handleShowCountryList(){
        setShowCountryList(!showCountryList);
    }

    function changeCountry(data){
        setCountry(data);
    }

    function displayCaptchaPanel(){
        if(showCaptchaPanel === true || tel.length < 6) return;
        ipcRenderer.invoke('request_captcha_token')
            .then((data) => {
                captchaToken.gt = data.gt;
                captchaToken.challenge = data.challenge;
                captchaToken.key = data.key;
                return true;
            })
            .then(res => {
                res && setShowCaptchaPanel(true);
            })
    }

    function handleTelChange({target: {value}}){
        setTel(value);
    }

    function handleCaptchaCodeChange({target: {value}}){
        setCaptchaCode(value);
    }

    function sendCaptchaCode(){
        // {tel, cid, key, challenge, validate, seccode}
        if(ipcRenderer){
            ipcRenderer.invoke("send_captcha_code",{
                "tel": tel,
                "cid": country.id,
                "key": captchaToken.key,
                "challenge": captchaToken.challenge,
                "validate": captchaToken.validate,
                "seccode": captchaToken.seccode
            })
                .then(res => {
                    // {code: 1015, message: "短信发送次数已达上限"}
                    console.log(res);
                    if(res.code !== 0){
                        message.warning(res.message);
                    }
                })
        }
    }

    function userLogin(){
        if(captchaCode.length !== 6) return;
        ipcRenderer.invoke("request_user_login", {
            cid: country.id,
            tel: tel,
            smsCode: captchaCode
        })
            .then(res => {
                if(res.status === 0){
                    if(ipcRenderer){
                        ipcRenderer.invoke('request_is_user_login')
                            .then((data) => {
                                store.dispatch(getUserInfoAction(data));
                            })
                    }
                    closePenal();
                    message.success("登录成功");
                }
            })
    }

    return (
        <section id="login-panel-container"
            onClick={(e) => {
                e.preventDefault();
                if(e.target.id === 'login-panel-container'){
                    closePenal();
                }
            }}
        >
            <section id="login-panel-container-wrapper" className={`login-panel-${show ? 'show' : 'hide'}`}>
                <section className={`login-panel-wrapper`}>
                    <Header
                        left={
                            <span className="iconfont icon-close login-close-btn" onClick={() => closePenal()} />
                        }
                        center={
                            <span>{title}</span>
                        }
                        right={
                            <a href="#" onClick={() => changeLoginMethod()}>{loginMethod === 'smscode' ? data.title.password : data.title.smscode}</a>
                        }
                    />

                    <section className="login-panel-content">
                        {
                            loginMethod === 'smscode' && <div className="login-panel-content-wrapper">
                                <div className="login-panel-input-filed">
                                    <div className="login-panel-input-item country-selector" onClick={() => handleShowCountryList()}>
                                        <span>{country.cname}</span>
                                        <i className="iconfont icon-next" />
                                    </div>

                                    <div className="login-panel-input-item phone-number">
                                        <span className="input-item-title">+{country.country_id}</span>
                                        <Input
                                            onChange={(e) => handleTelChange(e)}
                                            placeholder="请输入手机号码"
                                            maxLength={16}
                                            allowClear={true}
                                            className="phone-number-input"
                                        />
                                        <span className="getCaptcha" onClick={() => displayCaptchaPanel()}>
                                            获取验证码
                                        </span>
                                    </div>

                                    <div className="login-panel-input-item">
                                        <span className="input-item-title">验证码</span>
                                        <Input
                                            onChange={(e) => handleCaptchaCodeChange(e)}
                                            placeholder="请输入验证码"
                                            maxLength={8}
                                            allowClear={true}
                                            className="captcha-input"
                                        />
                                    </div>

                                    {
                                        showCaptchaPanel && <div className="login-panel-input-item captcha-item">
                                            {showCaptchaPanel && <CaptchaPanel setShowCaptchaPanel={setShowCaptchaPanel} sendCaptchaCode={sendCaptchaCode}/>}
                                        </div>
                                    }
                                </div>

                                <a
                                    href="#"
                                    className="smscode-validate-login-btn"
                                    onClick={() => userLogin()}
                                >
                                    验证登录
                                </a>
                            </div>
                        }

                        {
                            loginMethod === 'password' && <section id="login-panel-content-wrapper"></section>
                        }
                    </section>
                </section>

                <CountryListSelect
                    show={showCountryList}
                    handleShowCountryList={handleShowCountryList}
                    changeCountry={changeCountry}
                />
            </section>
        </section>
    )
}
