import React, {useEffect, useState} from 'react';
import LoginPanel from "../common/LoginPanel";
import {Button} from 'antd';
import store from "../../redux/store";

export default function User (props){

    const [display, setDisplay] = useState(false);
    const [profile, setProfile] = useState(store.getState().userInfo);


    useEffect(() => {
        setProfile(store.getState().userInfo);
    }, [store.getState().userInfo.isLogin]);

    function handleLogin(){
        setDisplay(!display);
    }

    return(
        <section style={{display: (props.display? 'block': 'none')}}>
            {
                !profile.isLogin && <Button type='primary' onClick={() => handleLogin()}>登录</Button>
            }
            {
                display && <LoginPanel display={handleLogin}/>
            }
            
            {
                profile.isLogin && <img src={profile.face} alt="avatar"/>
            }

        </section>
    )
}