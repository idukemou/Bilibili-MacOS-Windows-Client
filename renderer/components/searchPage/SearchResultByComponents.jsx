import React, {useEffect, useState} from "react";

/**
 * Search result component user interface.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function SearchResultByComposition(props){
    const [searchResult, setSearchResult] = useState(props.searchResult);
    const [pageCounter, setPageCounter] = useState(2);

    /**
     * effect handler for loading new data
     */
    useEffect(() => {
        if(props.loading === true){
            loadMore();
        }
    }, [props.loading]);


    /**
     * effect handler to receive searchResults;
     */
    useEffect(() => {
        setSearchResult(props.searchResult);
    }, [props.searchResult]);


    function loadMore(){
        if(pageCounter < 10){
            props.searchKeyword(props.value, pageCounter);
            setPageCounter(pageCounter + 1);
        }
    }

    return (
        <div id="search-page-result-wrapper">
            {
                searchResult !== undefined && searchResult.map((result, index) => (
                    <div key={index} className="search-page-result-item">

                        <div className='search-page-result-item-wrapper'>
                            <div className='search-page-result-item-info-wrapper'>
                                <img src={result.pic} alt={result.title} className='search-page-result-item-image' />
                            </div>

                            <div className='search-page-result-item-title'>
                                <span dangerouslySetInnerHTML={{__html: result.title}} />
                                <button><i className="iconfont icon-gengduo"/></button>
                            </div>

                            <div className='search-page-result-item-author'>
                                <div className='search-page-result-item-author-avatar'>
                                    <img src={result.pic} alt={result.author} />
                                </div>
                                <span>{result.author}</span>
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}