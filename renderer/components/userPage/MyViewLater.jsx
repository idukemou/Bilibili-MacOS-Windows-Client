import React, {useEffect, useRef, useState} from "react";
import Header from "../layout/header";
import {Button} from "antd";
import store from "../../redux/store";
import {platVideoStatusAction, playVideoInfoAction} from "../../redux/actionCreators";
import {convertDuration, convertTime} from "../../utils/utils";
import electron from "electron";

const ipcRenderer = electron.ipcRenderer || false;

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function MyViewLater(props){
    const [checkList, setCheckList] = useState([]);
    const [checkedAll, setCheckedAll] = useState(false);

    const [enabledEdit, setEnabledEdit] = useState(false);
    const [viewLaterStatus, setViewLaterStatus] = useState(true);
    const [viewLater, setViewLater] = useState([]);

    useEffect(() => {
        if(viewLaterStatus && ipcRenderer){
            ipcRenderer.invoke('get_view_later')
                .then((res) => {
                    if(res.code === 0 && res.data !== null){
                        const temp = res.data.list;
                        setViewLater(temp);
                        setViewLaterStatus(false);
                    }
                })
        }

        return () => {
            ipcRenderer.removeAllListeners('get_view_later');
        }
    },[]);


    function deleteViewLater(){
        console.log(checkList);
    }

    function checkAll(){
        const data = document.getElementsByName("view-later-selector");
        const temp = [];

        if(!checkedAll){
            for(let i=0; i<data.length; i++){
                data[i].checked = true;
                temp.push(data[i].value);
            }
            setCheckList(temp);
        }else {
            for(let i=0; i<data.length; i++){
                data[i].checked = false;
            }
            setCheckList([]);
        }

        setCheckedAll(!checkedAll);
    }

    useEffect(() => {
        setCheckList([]);
        setCheckedAll(false);
    }, [enabledEdit]);


    function onChange(bvid) {
        let temp = [];

        if(checkList.includes(bvid)){
            temp = checkList.filter((item) => { return item !== bvid })
        }else{
            temp = [...checkList, bvid];
        }
        setCheckList(temp);
    }


    return (
        <div id="user-content-wrapper">
            <div className="user-content-header">
                <Header
                    left={enabledEdit && <div>
                        <Button type="link" disabled={checkList.length === 0 && true} onClick={() => deleteViewLater()}>删除</Button>
                        <Button type="link" onClick={() => checkAll()}>{checkedAll ? "反选" : "全选"}</Button>
                    </div>}
                    center={<span>{props.active.name}{viewLater.length !== 0 && `(${viewLater.length})`}</span>}
                    right={<Button type="link" onClick={() => setEnabledEdit(!enabledEdit)}>{enabledEdit ? "取消": "编辑"}</Button>}
                />
            </div>

            <ViewLaterContent
                viewLater={viewLater}
                viewLaterStatus={viewLaterStatus}
                enabledEdit={enabledEdit}
                onChange={onChange}
                setViewLaterStatus={setViewLaterStatus}
            />
        </div>
    )
}


function ViewLaterContent(props){

    const viewRef = useRef(null);

    function playVideo(e, bvid){
        e.preventDefault();
        e.stopPropagation();

        ipcRenderer.send('request_video_play_info', bvid);
        ipcRenderer.once('fetch_video_play_info', async (event, data) => {
            store.dispatch(await playVideoInfoAction(data));
        })
        store.dispatch(platVideoStatusAction(true));
        ipcRenderer.removeAllListeners('request_video_play_info');
    }


    useEffect(() => {}, [props.viewLater]);
    useEffect(() => {}, [props.enabledEdit]);

    return (
        <div className="user-content" ref={viewRef}>
            {
                props.viewLater.length !== 0 && props.viewLater.map((view, index) => (
                    <div className="view-history-item" key={index} onClick={(e)=> playVideo(e, view.bvid)}>
                        <div className="view-history-image-wrapper">
                            <img src={view.pic} alt={view.title}/>

                            {
                                view.business === 'archive' &&
                                <span className="view-duration">
                                        {convertDuration(view.progress !== -1 ? view.progress : view.duration)}  / {convertDuration(view.duration)}
                                    </span>
                            }

                            {
                                view.business === 'live' &&
                                <span className='view-badge'>
                                    {view.badge}
                                </span>
                            }
                        </div>

                        <div className="view-history-title">
                            <span>{view.title}</span>
                        </div>

                        <div className="view-history-at">
                            <span>UP 主: {view.owner.name}</span>
                        </div>

                        {
                            props.enabledEdit && <label htmlFor={view.bvid} className="view-history-selector" onClick={(e) => e.stopPropagation()}>
                                <input
                                    type="checkbox"
                                    name="view-later-selector"
                                    value={view.bvid}
                                    id={view.bvid}
                                    onChange={() => props.onChange(`${view.aid}`)}
                                />
                            </label>
                        }
                    </div>
                ))
            }
        </div>
    )
}
