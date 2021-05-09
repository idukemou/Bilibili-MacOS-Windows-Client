import React, {useEffect, useState} from 'react';
import '../../styles/user.css';
import UserProfile from "./UserProfile";
import MyViewHistory from "./MyViewHistory";
import MyOfflineCaches from "./MyOfflineCaches";
import MyCollections from "./MyCollections";
import MyFollows from "./MyFollows";
import MyMessage from "./MyMessage";
import MyViewLater from "./MyViewLater";
import MyWallet from "./MyWallet";
import MySetting from "./MySetting";

const menuList = [
    {icon: '', name: '历史记录'},
    {icon: '', name: '离线缓存'},
    {icon: '', name: '我的收藏'},
    {icon: '', name: '我的关注'},
    {icon: '', name: '我的消息'},
    {icon: '', name: '稍后再看'},
    {icon: '', name: '我的钱包'},
    {icon: '', name: '设置'}
];

export default function User (props){

    const [refreshPage, setRefreshPage] = useState('');
    const [active, setActive] = useState(menuList[0]);
    const [content, setContent] = useState(<MyViewHistory active={menuList[0]}/>);

    useEffect(() => {}, [refreshPage]);


    function handleChangeMenuList(activeIndex){
        setActive(menuList[activeIndex]);

        switch (activeIndex){
            case 0: setContent(<MyViewHistory active={menuList[activeIndex]} />)
                break;
            case 1: setContent(<MyOfflineCaches active={menuList[activeIndex]} />)
                break;
            case 2: setContent(<MyCollections active={menuList[activeIndex]} />)
                break;
            case 3: setContent(<MyFollows active={menuList[activeIndex]} />)
                break;
            case 4: setContent(<MyMessage active={menuList[activeIndex]} />)
                break;
            case 5: setContent(<MyViewLater active={menuList[activeIndex]} />)
                break;
            case 6: setContent(<MyWallet active={menuList[activeIndex]} />)
                break;
            case 7: setContent(<MySetting active={menuList[activeIndex]} setRefreshPage={setRefreshPage} />)
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