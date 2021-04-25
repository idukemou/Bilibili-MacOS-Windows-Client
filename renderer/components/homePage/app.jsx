import React, {useState} from 'react';
import Header from "../layout/header";
import SearchBarBtn from "../layout/searchBarBtn";
import ContentFrame, {Content} from "../layout/contentFrame";
import '../../styles/app.css';
import Recommend from "./rcmd";

const menuList = [
    {name: '直播', key: 'live', offset: 0},
    {name: '推荐', key: 'recommend', offset: 1},
    {name: '热门', key: 'hot', offset: 2},
    {name: '电影', key: 'movie', offset: 3},
    {name: '电视剧', key: 'tv', offset: 4}
]


export default function App(props){

    const [active, setActive] = useState(menuList[1]);

    function handleChangeMenu(offset){
        setActive(menuList[offset]);
    }

    return(
        <section style={{display: (props.display? 'block': 'none')}}>
            <Header
                left={<SearchBarBtn placeholder="搜索视频、番剧、up主"/>}
                center={
                    <div className="header-menu">
                        {
                            menuList.map((menu, index) => (
                                <a
                                    href="#"
                                    className={`header-menu-item ${active.key === menu.key ? 'active': ''}`}
                                    key={menu.key}
                                    onClick={() => handleChangeMenu(menu.offset)}
                                >
                                    <span>{menu.name}</span>
                                </a>
                            ))
                        }
                    </div>
                }
            />

            <ContentFrame activeIndex={active.offset}>
                <Content color='red'>Box 1</Content>
                <Content> <Recommend/> </Content>
                <Content color='lightblue'>Box 3</Content>
                <Content color='lightgreen'>Box 4</Content>
                <Content color='orange'>Box 5</Content>
            </ContentFrame>
        </section>
    )
}