import React, {useEffect, useState} from "react";
import store from "../../redux/store";
import {Button} from "antd";
import LoginPanel from "../common/LoginPanel";

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function UserProfile(props){

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