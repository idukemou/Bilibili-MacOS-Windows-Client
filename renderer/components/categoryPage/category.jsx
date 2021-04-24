import React from 'react';
import Header from "../layout/header";
import SearchBarBtn from "../layout/searchBarBtn";
import Nodata from "../layout/nodata";

import electron from 'electron';
import store from '../../redux/store';
import '../../styles/category.css';

import {getCategoryListAction} from "../../redux/actionCreators";

const ipcRenderer = electron.ipcRenderer || false;
if(ipcRenderer){
    ipcRenderer.send('request_category_list');
    ipcRenderer.on('fetch_category_list', (event, data) => {
        store.dispatch(getCategoryListAction(data));
    });
}

export default class Category extends React.Component{
    constructor(props) {
        super(props);
        this.state = store.getState()
        store.subscribe(() => {
            this.setState(store.getState())
        });
    }

    render() {
        return(
            <section style={{display: (this.props.display? 'block': 'none')}}>
                <Header
                    left={<SearchBarBtn placeholder="搜索视频、番剧、up主或av号"/>}
                />

                <section id="category-page-container">
                    {
                        this.state.categoryList.success === 1 ?
                        (
                            this.state.categoryList.categories.map((category, index) => {
                                if(category.id === 0 || category.id === 100){
                                    return;
                                }
                                return(
                                    <a href="#" className="category-item-wrapper" key={category.id}>
                                        <div className="category-item">
                                            <strong>{category.name}</strong>
                                            <span>{category.channel_count}</span>
                                        </div>
                                    </a>
                                )
                            })
                        ):
                        (
                            <Nodata/>
                        )
                    }
                </section>
            </section>
        )
    }
}