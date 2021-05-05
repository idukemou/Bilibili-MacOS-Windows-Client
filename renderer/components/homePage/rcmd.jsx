import React, {useEffect, useRef, useState} from 'react';
import store from "../../redux/store";
import electron from 'electron';
import {
    getRecommendListAction,
    playVideoInfoAction,
    appendRecommendListAction,
    platVideoStatusAction
} from "../../redux/actionCreators";
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
    const data = props.videoInfo;
    const interval = 1;

    const [offsetTop, setOffsetTop] = useState(0);
    const [display, setDisplay] = useState(true);

    useEffect(() => {

        if( (props.clientData.scrollTop - offsetTop * interval > 0) || (offsetTop - (240 * interval) - props.clientData.scrollTop > props.clientData.clientHeight) ){
            setDisplay(false);
        }else{
            setDisplay(true)
        }
    });

    useEffect(() => {
        setOffsetTop(box.current.offsetTop + 220);
    }, [offsetTop]);


    function playVideo(bvid){

        ipcRenderer.send('request_video_play_info', bvid);
        ipcRenderer.once('fetch_video_play_info', async (event, data) => {
            store.dispatch(await playVideoInfoAction(data));
        })

        store.dispatch(platVideoStatusAction(true));
        ipcRenderer.removeAllListeners('request_video_play_info');
    }


    /**
     * return UI Component
     */
    return(
        <div className='rcmd-item' ref={box} onClick={() => playVideo(data.bvid)}>
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
    const [locker, setLocker] = useState(false);
    const [counter, setCounter] = useState(0);

    /**
     * Effect for update value of commendList
     */
    useEffect(() => {
        store.subscribe(() => {
            setRecommendList(store.getState().recommendList);
        });
    }, [store.getState().recommendList]);


    /**
     * Effect for update value of loading
     */
    useEffect(() => {
        if(props.loading && !locker && counter < 10){
            loadMore();
            setLocker(false);
            setCounter(counter + 1);
        }
    }, [props.loading]);


    /**
     * request more data from API
     */
    function loadMore(){
        setLocker(true);
        if(ipcRenderer){
            ipcRenderer.invoke('request_recommend_list_append')
                .then(data => {
                    const temp = recommendList.concat(data.item);
                    // setRecommendList(temp);
                    store.dispatch(appendRecommendListAction(temp));
                });
        }
    }


    /**
     * return UI Components
     */
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