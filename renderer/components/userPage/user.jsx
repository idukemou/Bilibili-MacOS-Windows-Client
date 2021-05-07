import React, {useEffect, useState} from 'react';
import LoginPanel from "../common/LoginPanel";
import {Button, Checkbox, message} from 'antd';
import store from "../../redux/store";
import electron from 'electron';
import {getUserInfoAction, platVideoStatusAction, playVideoInfoAction} from "../../redux/actionCreators";
import '../../styles/user.css';
import Header from "../layout/header";
import {convertDuration, convertTime} from "../../utils/utils";

const ipcRenderer = electron.ipcRenderer || false;

const menuList = [
    {icon: '', name: '历史记录'},
    {icon: '', name: '离线缓存'},
    {icon: '', name: '我的收藏'},
    {icon: '', name: '我的关注'},
    {icon: '', name: '我的消息'},
    {icon: '', name: '稍后再看'},
    {icon: '', name: '我的钱包'},
    {icon: '', name: '设置'}
]

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function UserProfile(props){
    const [profile, setProfile] = useState(store.getState().userInfo);
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        setProfile(store.getState().userInfo);
    }, [store.getState().userInfo.isLogin]);

    function handleLogin(){
        setDisplay(!display);
    }

    function handleSignup(){
        handleLogin();
    }

    function handleUserLogout(){
        if(ipcRenderer){
            // 请求用户登出
            ipcRenderer.invoke('request_user_logout')
                .then(res => {
                    if(res.code === 0){
                        message.success(res.message);
                    }
                })

            // 全局初始化用户登录状态信息
            ipcRenderer.invoke('request_is_user_login')
                .then((data) => {
                    store.dispatch(getUserInfoAction(data));
                    setRefreshPage('logout');
                })
        }
    }

    return(
        <div id="user-login-container">
            {
                !profile.isLogin && <div className="user-login-options">
                    <Button type='primary' onClick={() => handleLogin()}>登录</Button>
                    <Button type='primary' onClick={() => handleSignup()}>注册</Button>
                </div>
            }
            {
                profile.isLogin && <div className="user-profile-outline">
                    <div className="user-profile-basic">
                        <div className="user-avatar">
                            <img src={profile.face} alt="avatar" width="100px" />
                        </div>
                        <div className="user-wallet">
                            <div className="user-username">
                                {profile.uname}
                            </div>
                            <div className="user-wallet-stats">
                                <span>硬币: {profile.money}</span>
                                <span>B币: {profile.wallet.bcoin_balance}</span>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {
                display && <LoginPanel display={handleLogin} setRefreshPage={props.setRefreshPage} />
            }
        </div>
    )
}

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function MyViewHistory(props){

    const [enabledEdit, setEnabledEdit] = useState(false);
    const [viwHistoryStatus, setViewHistoryStatus] = useState(true);
    const [viewHistory, setViewHistory] = useState({
        "cursor": {},
        "tab": [],
        "list": []
    });

    useEffect(() => {
        if(viwHistoryStatus && ipcRenderer){
            ipcRenderer.invoke('get_view_history')
                .then((res) => {
                    if(res.code === 0){
                        setViewHistory(res.data);
                        setViewHistoryStatus(false);
                    }
                })
        }
    },[]);

    function playVideo(e, bvid){

        console.log(e.target.className === "view-history-selector");

        // ipcRenderer.send('request_video_play_info', bvid);
        // ipcRenderer.once('fetch_video_play_info', async (event, data) => {
        //     store.dispatch(await playVideoInfoAction(data));
        // })
        // store.dispatch(platVideoStatusAction(true));
        // ipcRenderer.removeAllListeners('request_video_play_info');
    }

    function checkSingleViewHistory(e){
        e.preventDefault();
        console.log(e);
    }

    function checkAllViewHistory(e){
        console.log(e)
    }


    return (
        <div id="user-content-wrapper">
            <div className="user-content-header">
                <Header
                    left={enabledEdit && <div>
                        <button disabled={true}>删除</button>
                        <Checkbox.Group onChange={() => checkAllViewHistory()}>
                            <button>全选</button>
                        </Checkbox.Group>
                    </div>}
                    center={<span>{props.active.name}</span>}
                    right={<button onClick={() => setEnabledEdit(!enabledEdit)}>{enabledEdit ? "取消": "编辑"}</button>}
                />
            </div>

            <div className="user-content">
                {
                    viewHistory.list.length !== 0 && viewHistory.list.map((view, index) => (
                        <div className="view-history-item" key={index} onClick={(e)=> {view.history.business === 'archive' && playVideo(e, view.history.bvid)}}>
                            <div className="view-history-image-wrapper">
                                {
                                    view.history.business === "article-list" ? <img src={view.covers[0]} alt={view.title}/>: <img src={view.cover} alt={view.title}/>
                                }

                                {
                                    view.history.business === 'archive' &&
                                    <span className="view-duration">
                                        {convertDuration(view.progress !== -1 ? view.progress : view.duration)}  / {convertDuration(view.duration)}
                                    </span>
                                }

                                {
                                    view.history.business === 'live' &&
                                    <span className='view-badge'>
                                    {view.badge}
                                </span>
                                }
                            </div>

                            <div className="view-history-title">
                                <span>{view.title}</span>
                            </div>

                            <div className="view-history-at">
                                <span>{convertTime(view.view_at)}</span>
                            </div>

                            {
                                enabledEdit && <div className="view-history-selector" onClick={(e) => checkSingleViewHistory(e)}>
                                    <Checkbox value={view.history.bvid} onChange={(e) => checkSingleViewHistory(e)} />
                                </div>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

function MyOfflineCaches(props){
    return(
        <div id="user-content-wrapper">
            <div className="user-content-header">
                <Header center={<span>{props.active.name}</span>}/>
            </div>

            <div className="user-content">
                <span>Offline</span>
            </div>
        </div>
    )
}

function MyCollections(props){
    return(
        <div id="user-content-wrapper">
            <div className="user-content-header">
                <Header center={<span>{props.active.name}</span>}/>
            </div>

            <div className="user-content">
                <span>Collection</span>
            </div>
        </div>
    )
}

function MyFollows(props){
    return(
        <div id="user-content-wrapper">
            <div className="user-content-header">
                <Header center={<span>{props.active.name}</span>}/>
            </div>

            <div className="user-content">
            </div>
        </div>
    )
}

function MyMessage(props){
    return(
        <div id="user-content-wrapper">
            <div className="user-content-header">
                <Header center={<span>{props.active.name}</span>}/>
            </div>

            <div className="user-content">
            </div>
        </div>
    )
}

function MyViewLater(props){
    return(
        <div id="user-content-wrapper">
            <div className="user-content-header">
                <Header center={<span>{props.active.name}</span>}/>
            </div>

            <div className="user-content">
            </div>
        </div>
    )
}

function MyWallet(props){
    return(
        <div id="user-content-wrapper">
            <div className="user-content-header">
                <Header center={<span>{props.active.name}</span>}/>
            </div>

            <div className="user-content">
            </div>
        </div>
    )
}

function MySetting(props){
    return(
        <div id="user-content-wrapper">
            <div className="user-content-header">
                <Header center={<span>{props.active.name}</span>}/>
            </div>

            <div className="user-content">
            </div>
        </div>
    )
}


export default function User (props){

    const [refreshPage, setRefreshPage] = useState('');
    const [active, setActive] = useState(menuList[0]);
    const [content, setContent] = useState(<MyViewHistory active={menuList[0]}/>);

    useEffect(() => {}, [refreshPage]);


    function handleChangeMenuList(activeIndex){
        setActive(menuList[activeIndex]);

        switch (activeIndex){
            case 0: setContent(<MyViewHistory active={menuList[activeIndex]}/>)
                break;
            case 1: setContent(<MyOfflineCaches active={menuList[activeIndex]}/>)
                break;
            case 2: setContent(<MyCollections active={menuList[activeIndex]}/>)
                break;
        }
    }


    return(
        <section style={{display: (props.display? 'block': 'none'), height: "100%",  width: '100%'}}>
            <div id="user-page-container">
                <div id="user-navigation-bar-wrapper">

                    {
                        <UserProfile setRefreshPage={setRefreshPage}/>
                    }

                    <div id="user-navigation-container">
                        {
                            menuList.map((menu, index) => (
                                <div
                                    className={`user-navigation-item ${menu.name === active.name && "active"}`}
                                    key={index} onClick={() => handleChangeMenuList(index)}
                                >
                                    <i className="user-navigation-icon">{menu.icon}</i>
                                    <span className="user-navigation-name">{menu.name}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {content}
            </div>
        </section>
    )
}