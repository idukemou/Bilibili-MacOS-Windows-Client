import React from 'react';
import Header from "../layout/header";
import SearchBarBtn from "../layout/searchBarBtn";
import ContentFrame, {Content} from "../layout/contentFrame";
import '../../styles/app.css';
import Recommend from "./rcmd";

const menuList = [
    {
        name: '直播',
        key: 'live',
        offset: 0
    },
    {
        name: '推荐',
        key: 'recommend',
        offset: 1
    },
    {
        name: '热门',
        key: 'hot',
        offset: 2
    },
    {
        name: '电影',
        key: 'movie',
        offset: 3
    },
    {
        name: '电视剧',
        key: 'tv',
        offset: 4
    }
]


export default class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            active: menuList[1]
        }
    }

    handleChangeMenu = (offset) => {
        this.setState({
            active: menuList[offset]
        })
    }

    render(){
        return(
            <section style={{display: (this.props.display? 'block': 'none')}}>
                <Header
                    left={<SearchBarBtn placeholder="搜索视频、番剧、up主"/>}
                    center={
                        <div className="header-menu">
                            {
                                menuList.map((menu, index) => (
                                    <a
                                        href="#"
                                        className={`header-menu-item ${this.state.active.key === menu.key ? 'active': ''}`}
                                        key={menu.key}
                                        onClick={() => this.handleChangeMenu(menu.offset)}
                                    >
                                        <span>{menu.name}</span>
                                    </a>
                                ))
                            }
                        </div>
                    }
                />

                <ContentFrame activeIndex={this.state.active.offset}>
                    <Content color='red' sid={0}>
                        Box 1
                    </Content>

                    <Content sid={1}>
                        <Recommend/>
                    </Content>

                    <Content color='lightblue' sid={2}>Box 3</Content>
                    <Content color='lightgreen' sid={3}>Box 4</Content>
                    <Content color='orange' sid={4}>Box 5</Content>
                </ContentFrame>
            </section>
        )
    }
}