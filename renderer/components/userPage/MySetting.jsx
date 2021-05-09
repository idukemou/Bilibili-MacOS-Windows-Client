import {message} from "antd";
import store from "../../redux/store";
import {getUserInfoAction} from "../../redux/actionCreators";
import Header from "../layout/header";
import React from "react";

export default function MySetting(props){

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
                    props.setRefreshPage('logout');
                })
        }
    }

    return(
        <div id="user-content-wrapper">
            <div className="user-content-header">
                <Header center={<span>{props.active.name}</span>}/>
            </div>

            <div className="user-content">
                <div className="setting-item setting-user-logot" onClick={() => handleUserLogout()}>
                    <span>退出登录</span>
                </div>

                <style jsx>
                    {`
                      .user-content{
                        background-color:rgb(244, 244, 244);
                      }
                      .setting-item{
                        width: 100%;
                        height: 50px;
                        background-color: #fff;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        padding: 0 16px;
                        cursor:pointer;
                        transition: all 0.2s;
                      }
                      
                      .setting-item:hover{
                        background-color: rgb(251, 113, 154);
                        color: #fff;
                        box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      }
                    `}
                </style>
            </div>
        </div>
    )
}