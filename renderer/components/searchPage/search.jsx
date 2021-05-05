import {useEffect, useRef, useState} from "react";
import Header from "../layout/header";
import {Button, Input} from "antd";
import '../../styles/search.css';
import electron from "electron";

const ipcRenderer = electron.ipcRenderer || false;

export default function Search(props){

    const searchRef = useRef(null);

    const [value, setValue] = useState("");

    const [hotWords, setHotWords] = useState([]);
    const [searchHistory, setSearchHistory] = useState([]);

    const [showSuggestWords, setShowSuggestWords] = useState(false);
    const [suggestWords, setSuggestWords] = useState([]);
    const [timer, setTimer] = useState(null);
    const [locker, setLocker] = useState(false);


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
            console.log(value);
            ipcRenderer.invoke("get_search_suggest_words", value)
                .then((data) => {
                    if(data.code === 0){
                        setSuggestWords(data.result);
                    }
                })
        }
    }, [locker]);

    function searchRequest(){
        searchRef.current.blur();
    }

    function handleWordChange({target: {value}}){
        clearTimeout(timer);
        setLocker(false);

        if(value.length === 0){
            setShowSuggestWords(false);
            setSuggestWords([]);
            return;
        }

        setShowSuggestWords(true);
        setValue(value);

        setTimer(setTimeout(() => {
            setLocker(true);
        }, 200));
    }

    function searchKeyword(keyword){
        setShowSuggestWords(false);
        setSuggestWords([]);
        searchRef.current.value = keyword;
    }

    return(
        <section className={`search-page-container ${props.pageStatus ? '': 'search-page-hide'}`}>
            <Header
                center={
                    <Input
                        id='search-bar'
                        placeholder="搜索视频、番剧或up主"
                        prefix={<i className='iconfont icon-search'/>}
                        onPressEnter={() => searchRequest()}
                        onChange={(e) => handleWordChange(e)}
                        ref={searchRef}
                        allowClear
                    />
                }

                right={
                    <Button
                        type='link'
                        className="search-cancel-button"
                        onClick={() => props.setPageStatus(false)}
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
                                <button key={index} className="search-page-hot-word-item">
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
                            <div className="search-page-suggest-word" key={index} onClick={() => searchKeyword(suggest.value)}>
                                <i className="iconfont icon-search"/>
                                <span dangerouslySetInnerHTML={{__html:suggest.name}} /><br/>
                            </div>
                        ))
                    }
                </div>
            }
        </section>
    )
}