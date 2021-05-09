import React, {useEffect, useRef, useState} from "react";
import Header from "../layout/header";
import {Button, Input} from "antd";
import '../../styles/search.css';
import electron from "electron";
import ContentFrame, {Content} from "../layout/contentFrame";
import SearchResultByComposition from "./SearchResultByComponents";

const ipcRenderer = electron.ipcRenderer || false;

export default function Search(props){

    const searchRef = useRef(null);

    const [value, setValue] = useState("");
    const [timer, setTimer] = useState(null);
    const [locker, setLocker] = useState(false);

    const [hotWords, setHotWords] = useState([]);
    const [searchHistory, setSearchHistory] = useState([]);

    const [showSuggestWords, setShowSuggestWords] = useState(false);
    const [suggestWords, setSuggestWords] = useState([]);

    const [showSearchResult, setShowSearchResult] = useState(false);
    const [searchResult, setSearchResult] = useState([])

    function closeSearchPage(){
        setLocker(false);
        clearTimeout(timer);
        setValue("");
        setHotWords([]);
        setSearchHistory([]);
        setShowSuggestWords(false);
        setSuggestWords([]);
        setShowSearchResult(false);
        setSearchResult([]);
        props.setPageStatus(false);
    }

    useEffect(() => {
        if(ipcRenderer){
            ipcRenderer.invoke("get_search_hot_words")
                .then((res) => {
                   if(res.code === 0){
                       setHotWords(res.list);
                   }
                });
        }
    }, [props.pageStatus]);

    useEffect(() => {
        if(ipcRenderer && locker){
            ipcRenderer.invoke("get_search_suggest_words", value)
                .then((data) => {
                    if(data.code === 0){
                        setSuggestWords(data.result);
                    }
                })
        }
    }, [locker]);


    function handleWordChange({target: {value}}){
        setValue(value);

        clearTimeout(timer);
        setLocker(false);
        setShowSearchResult(false);
        setSearchResult([]);

        if(value.length === 0){
            setShowSuggestWords(false);
            setSuggestWords([]);
            return;
        }

        setShowSuggestWords(true);

        setTimer(setTimeout(() => {
            setLocker(true);
        }, 300));
    }

    function searchKeyword(keyword, page){
        setValue(keyword);
        setShowSuggestWords(false);
        setSuggestWords([]);
        searchRef.current.blur();
        setShowSearchResult(true);

        if(ipcRenderer){
            ipcRenderer.invoke('get_search_results_by_video', {keyword: keyword, page: page})
                .then((res) => {
                    if(res.code === 0){
                        const newData = searchResult.concat(res.data.result);
                        setSearchResult(newData);
                    }
                })
        }
    }

    return(
        <section className={`search-page-container ${props.pageStatus ? '': 'search-page-hide'}`}>
            <Header
                center={
                    <Input
                        id='search-bar'
                        placeholder="搜索视频、番剧或up主"
                        prefix={<i className='iconfont icon-search'/>}
                        onPressEnter={() => searchKeyword(value, 1)}
                        onChange={(e) => handleWordChange(e)}
                        ref={searchRef}
                        value={value}
                        allowClear
                    />
                }

                right={
                    <Button
                        type='link'
                        className="search-cancel-button"
                        onClick={() => closeSearchPage()}
                    >
                        取消
                    </Button>
                }
            />

            <section className="search-page-default-options">
                <div className="search-page-hot-search-wrapper">
                    <div className="search-page-default-options-header">
                        <span>大家都在搜</span>
                    </div>

                    <div className="search-page-default-content">
                        {
                            hotWords.map((word, index) => (
                                <button key={index} className="search-page-hot-word-item" onClick={() => searchKeyword(word.keyword, 1)}>
                                    <span>{word.keyword}</span>
                                </button>
                            ))
                        }
                    </div>
                </div>

                <div className="search-page-search-history">
                    <div className="search-page-default-options-header">
                        <span>搜索历史</span>
                    </div>

                    <div className="search-page-default-content">

                    </div>
                </div>
            </section>

            {
                showSuggestWords && <div className="search-page-suggest-words">
                    {
                        suggestWords !== undefined && suggestWords.map((suggest, index) => (
                            <div className="search-page-suggest-word" key={index} onClick={() => searchKeyword(suggest.value, 1)}>
                                <i className="iconfont icon-search"/>
                                <span dangerouslySetInnerHTML={{__html:suggest.name}} /><br/>
                            </div>
                        ))
                    }
                </div>
            }

            {
                showSearchResult &&
                <div id="search-page-result-container">
                    <Header
                        left={
                            <>
                                <span>综合</span>
                                <span>番剧(0)</span>
                                <span>直播(0)</span>
                                <span>用户(0)</span>
                                <span>影视(0)</span>
                            </>
                        }
                    />

                    <ContentFrame>
                        <Content>
                            <SearchResultByComposition searchResult={searchResult} value={value} searchKeyword={searchKeyword}/>
                        </Content>
                    </ContentFrame>

                    {
                        searchResult !== undefined && (
                            searchResult.length <= 0 && <span>加载数据中...</span>
                        )
                    }
                </div>
            }
        </section>
    )
}