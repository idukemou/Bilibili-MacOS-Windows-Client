import React, {useEffect, useState} from 'react';
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

export default function Category(props){

    const [categoryList, setCategoryList] = useState(store.getState().categoryList);

    useEffect(() => {
        store.subscribe(() => {
            setCategoryList(store.getState().categoryList)
        });
    }, [store.getState().categoryList])

    return(
        <section style={{display: (props.display? 'block': 'none')}}>
            <Header
                left={<SearchBarBtn placeholder="搜索视频、番剧、up主或av号"/>}
            />

            <section id="category-page-container">
                {
                    categoryList.success === 1 ?
                        (
                            categoryList.categories.map((category, index) => {
                                if(category.id === 0 || category.id === 100){
                                    return;
                                }
                                return(
                                    <section href="#" className="category-item-wrapper" key={category.id}>
                                        <div className="category-item">
                                            <strong>{category.name}</strong>
                                            <span>{category['channel_count']}</span>
                                        </div>
                                    </section>
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