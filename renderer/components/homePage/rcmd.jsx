import React, {useEffect, useRef, useState} from 'react';
import store from "../../redux/store";
import electron from 'electron';
import { getRecommendListAction } from "../../redux/actionCreators";
import { convertDuration, convertViews } from "../../utils/utils";

const ipcRenderer = electron.ipcRenderer || false;

if(ipcRenderer){
    ipcRenderer.send('request_recommend_list');
    ipcRenderer.on('fetch_recommend_list', async (event, data) => {
        store.dispatch(await getRecommendListAction(data))
    });
}


/**
 * Recommend UI Component.
 * @param props the props from its parent component
 * @returns {JSX.Element} the UI parts used for rendering
 * @constructor none
 */
function RecommendUI(props){

    const box = useRef(null);
    const [offsetTop, setOffsetTop] = useState(0);
    const [display, setDisplay] = useState(true);


    useEffect(() => {
        if((props.clientData.scrollTop - offsetTop > 0) || (offsetTop - (240) - props.clientData.scrollTop > props.clientData.clientHeight)){
            setDisplay(false);
        }else{
            setDisplay(true);
        }
    });

    useEffect(() => {
        setOffsetTop(box.current.offsetTop + 220);
    }, [offsetTop]);

    const data = props.videoInfo;

    return(
        <div className='rcmd-item' ref={box}>
            <div className={'rcmd-item-wrapper'} style={{display: (display ? 'block': 'none')}}>
                <div className='rcmd-item-info-wrapper'>
                    <img src={data.pic} alt={data.title} className='rcmd-item-image' />
                    <div className='rcmd-item-stat'>
                        <span className='rcmd-item-duration'> {convertDuration(data.duration)} </span>
                        <span className='rcmd-item-views'> {convertViews(data.stat.view)}观看 </span>
                    </div>
                </div>
                <div className='rcmd-item-title-wrapper'>
                    <div className='rcmd-item-owner'>
                        <img src={data.owner.face} alt={data.owner.name} />
                    </div>
                    <div className='rcmd-item-title'>
                        <strong> {data.title} </strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

/**
 * Recommend Section Component
 * @param props the props from parent component
 * @returns {JSX.Element} the Recommend UI parts used for rendering
 * @constructor none
 */
export default function Recommend(props){

    const [recommendList, setRecommendList] = useState(store.getState().recommendList);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        store.subscribe(() => {
            setRecommendList(store.getState().recommendList);
        });
    }, [store.getState().recommendList]);

    useEffect(() => {
        if(props.loading && counter <= 20){
            loadMore();
            console.log('rcmd.js.75 =====> loadMore');
            setCounter(counter+1);
        }
    }, [props.loading]);

    function loadMore(){
        if(ipcRenderer){
            ipcRenderer.invoke('request_recommend_list_append')
                .then(data => {
                    const temp = recommendList.concat(data.item);
                    setRecommendList(temp);
                });
        }
    }

    return(
        <>
            {
                recommendList.map((list, index) => (
                    <RecommendUI key={index} videoInfo={list} {...props} />
                ))
            }
        </>
    )
}