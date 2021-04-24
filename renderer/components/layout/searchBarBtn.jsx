import '../../styles/header.css';
import {useState} from "react";
import Search from "../searchPage/search";

export default function SearchBarBtn(props){

    const [pageStatus, setPageStatus] = useState(false);
    const placeholder = props.placeholder || '';

    return(
        <>
            <button className='search-bar-btn-container' onClick={() => setPageStatus(!pageStatus)}>
                <i className="iconfont icon-search"></i>
                <span>{placeholder}</span>
            </button>

            <Search setPageStatus={setPageStatus} pageStatus={pageStatus} />
        </>
    )
}