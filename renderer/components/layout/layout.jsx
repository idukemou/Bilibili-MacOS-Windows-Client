import React from 'react';
import '../../styles/layout.css';
import App from "../homePage/app";
import Category from "../categoryPage/category";
import News from "../newsPage/news";
import User from "../userPage/user";
import store from '../../redux/store'
import {countAvailableClientHeightAction} from "../../redux/actionCreators";

const menuList = [
    {
        name: '首页',
        href: '/app',
        icon: 'icon-shouye'
    },
    {
        name: '分区',
        href: '/category',
        icon: 'icon-category'
    },
    {
        name: '动态',
        href: '/news',
        icon: 'icon-dongtai'
    },
    {
        name: '我的',
        href: '/user',
        icon: 'icon-bilibili-line'
    }
]

export default class Layout extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            page: '/app',
            autoHeight: 0,
            scroll: {
                app: 0,
                category: 0,
                news: 0,
                user: 0
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        switch(nextState.page){
            case '/app':
                this.section.scrollTo(0, nextState.scroll.app);
                break;
            case '/category':
                this.section.scrollTo(0, nextState.scroll.category);
                break;
            case '/news':
                this.section.scrollTo(0, nextState.scroll.news);
                break;
            case '/user':
                this.section.scrollTo(0, nextState.scroll.user);
        }

        return true;
    }

    init = () => {
        this.setState({
            autoHeight: window.innerHeight - 60
        },() => {
            store.dispatch(countAvailableClientHeightAction({
                width: window.innerWidth,
                height: window.innerHeight - 120
            }));
        });
    }

    componentDidMount() {
        const _this = this;
        this.init();

        /* 自动设置全局导航和全局内容区块的高度和位置 */
        window.addEventListener('resize', (e) => {
            _this.init();
        });

        /* 设置页面的实时高度 */
        this.section.addEventListener('scroll', () => {

            let top = _this.section.scrollTop;
            const newState = JSON.parse(JSON.stringify(this.state));

            switch(_this.state.page){
                case '/app':
                    newState.scroll.app = top;
                    break;
                case '/category':
                    newState.scroll.category = top;
                    break;
                case '/news':
                    newState.scroll.news = top;
                    break;
                case '/user':
                    newState.scroll.user = top;
            }

            this.setState(newState)
        });
    }

    handleChangePage = (page) => {
        this.setState({
            page
        })
    }

    render() {
        return(
            <>
                <section id="layout-container">
                    <section id="layout-content-container" ref={section => this.section = section}>

                        <App display={this.state.page === '/app' ?  true: false} />
                        <Category display={this.state.page === '/category' ?  true: false} />
                        <News display={this.state.page === '/news' ?  true: false} />
                        <User display={this.state.page === '/user' ?  true: false} />

                        <style jsx>
                            {`
                              #layout-content-container{
                                width: 100%;
                                height: ${this.state.autoHeight}px;
                              }
                            `}
                        </style>
                    </section>

                    <footer id="layout-navigation-container">
                        {
                            menuList.map((menu, index) => (
                                <a
                                    className={`
                                        layout-navigation-item 
                                        ${(menu.href.includes(this.state.page) ? 'active': '')}
                                    `}
                                    key={menu.href}
                                    onClick={() => this.handleChangePage(menu.href)}
                                >
                                    <i className={`iconfont ${menu.icon} layout-navigation-icon`}></i>
                                    <span>{menu.name}</span>
                                </a>
                            ))
                        }
                    </footer>
                </section>
            </>
        )
    }
}