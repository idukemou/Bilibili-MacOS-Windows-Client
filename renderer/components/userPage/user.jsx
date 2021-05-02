import React, {useEffect, useState} from 'react';
import LoginPanel from "../common/LoginPanel";
import {Button, message} from 'antd';
import store from "../../redux/store";
import electron from 'electron';
import {getUserInfoAction} from "../../redux/actionCreators";
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

export default function User (props){

    const [refreshPage, setRefreshPage] = useState('');
    const [display, setDisplay] = useState(false);
    const [profile, setProfile] = useState(store.getState().userInfo);
    const [active, setActive] = useState(menuList[0]);
    const [viwHistoryStatus, setViewHistoryStatus] = useState(true);
    const [viewHistory, setViewHistory] = useState({
        "cursor": {},
        "tab": [],
        "list": []
    });

    useEffect(() => {
        console.log('[user activity]');
    }, [refreshPage]);

    useEffect(() => {
        setProfile(store.getState().userInfo);
    }, [store.getState().userInfo.isLogin]);

    useEffect(() => {
        if(viwHistoryStatus && ipcRenderer){
            ipcRenderer.invoke('get_view_history')
                .then((res) => {
                    console.log(res);
                    setViewHistory(res);
                    setViewHistoryStatus(false);
                })
        }
    },[]);



    function handleLogin(){
        setDisplay(!display);
    }

    function handleSignup(){
        handleLogin();
    }

    function handleChangeMenuList(activeIndex){
        setActive(menuList[activeIndex]);
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
        <section style={{display: (props.display? 'block': 'none'), height: "100%",  width: '100%'}}>
            <div id="user-page-container">
                <div id="user-navigation-bar-wrapper">
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
                    </div>

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

                <div id="user-content-wrapper">
                    <div className="user-content-header">
                        <Header center={<span>{active.name}</span>}/>
                    </div>

                    <div className="user-content">
                        {
                            viewHistory.list.length !== 0 && <div>
                                {
                                    viewHistory.list.map((view) => (
                                        <div className="view-history-item">
                                            <div className="view-history-image-wrapper">
                                                <img src={view.cover} alt={view.title}/>
                                                {
                                                    view.history.business === 'archive' && <span className="view-duration">
                                                        {
                                                            convertDuration(view.progress !== -1 ? view.progress : view.duration)}/{convertDuration(view.duration)
                                                        }
                                                    </span>
                                                }

                                                {
                                                    view.history.business === 'live' && <span className='view-badge'>
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
                                        </div>
                                    ))
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>

            {
                display && <LoginPanel display={handleLogin} setRefreshPage={setRefreshPage} />
            }
        </section>
    )
}