import React, {useState} from 'react';
import Header from "../layout/header";
import ContentFrame, {Content} from "../layout/contentFrame";

const menuList = [
    {name: '热门', key: 'hot', offset: 0},
    {name: '关注', key: 'follow', offset: 1}
]

function Test(props){

    return(
        <section>
            {props.content}
        </section>
    )
}

export default function News(props){

    const [active, setActive] = useState(menuList[0]);

    function handleChangeMenu(offset){
        setActive(menuList[offset]);
    }

    return(
        <section style={{display: (props.display? 'block': 'none'), overflow: 'hidden', height: '100%'}}>
            <Header
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
                <Content>
                    <Test content='热门' />
                </Content>
                <Content>
                    <Test content='关注'/>
                </Content>
            </ContentFrame>
        </section>
    )
}