import React from 'react';
import Header from "../layout/header";

const menuList = [
    {
        name: '热门',
        key: 'hot',
        offset: 0
    },
    {
        name: '关注',
        key: 'follow',
        offset: 1
    }
]

export default class News extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            active: menuList[0]
        }
    }

    handleChangeMenu = (offset) => {
        this.setState({
            active: menuList[offset]
        })
    }

    render(){
        return(
            <section style={{display: (this.props.display? 'block': 'none'), overflow: 'hidden', height: '100%'}}>
                <Header
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

                <section id="news-content-container" style={{width: '200%', zIndex: 1000 ,transition:'all 0.3s' ,height:'532px', position: 'absolute', left: `${this.state.active.offset * -1000}px`, overflow: "hidden"}}>
                    <div style={{width: '1000px', height: '532px', float: "left"}}>

                    </div>

                    <div style={{width: '1000px', height:'532px', float: "left", overflow: 'scroll'}}>

                    </div>
                </section>
            </section>
        )
    }
}