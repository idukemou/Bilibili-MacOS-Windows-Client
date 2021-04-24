import {useRef} from "react";
import Header from "../layout/header";
import {Button, Input} from "antd";
import '../../styles/search.css';

export default function Search(props){

    const searchRef = useRef(null);

    function searchRequest(){
        searchRef.current.blur();
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
                        allowClear
                        ref={searchRef}
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
        </section>
    )
}