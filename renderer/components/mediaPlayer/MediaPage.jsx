import {useEffect, useState} from "react";
import store from "../../redux/store";
import {platVideoStatusAction, playVideoInfoAction} from "../../redux/actionCreators";
import electron from "electron";
import '../../styles/videoPlayer.css';
import MediaPlayer from "./MediaPlayer";
import MediaInfo from "./MediaInfo";

const ipcRenderer = electron.ipcRenderer || false;

export default function MediaPage(props){

    const [refresh, setRefresh] = useState(false);
    const [status, setStatus] = useState(false);
    const [videoInfo, setVideoInfo] = useState({});


    // 获取最新视频
    useEffect(() => {
        updateVideoProgress();
        setVideoInfo({});
        store.subscribe(() => {
            if(JSON.stringify(store.getState().videoInfo.info) !== '{}'){
                setVideoInfo(store.getState().videoInfo.info);
            }
        })
    }, [refresh]);


    // 视频播放页显示/隐藏状态
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setStatus(store.getState().playVideoStatus);
        })

        return () => {unsubscribe()}
    }, [status]);


    // 上报视频播放进度，并添加到播放历史列表中
    function updateVideoProgress(){
        if(JSON.stringify(videoInfo) !== '{}'){
            if(ipcRenderer){
                ipcRenderer.invoke('update_video_play_progress', {
                    aid: videoInfo.aid,
                    cid: videoInfo.cid,
                    progress: 100,
                })
            }
        }
    }


    // 关闭视频页面，并初始化播放信息
    function exitVideo(){
        updateVideoProgress();
        setVideoInfo({});
        setRefresh(!refresh);
        store.dispatch(platVideoStatusAction(false));
        store.dispatch(playVideoInfoAction({
            url: {},
            info: {}
        }));
    }

    return(
        <section id="media-play-page" style={{display: (status ? 'block': 'none')}}>
            {
                status && <>
                    <MediaPlayer
                        quit={exitVideo}
                        title={videoInfo.title}
                        status={status}
                        setRefresh={setRefresh}
                        refresh={refresh}
                        videoInfo={videoInfo}
                    />

                    <MediaInfo
                        videoInfo={videoInfo}
                        quit={exitVideo}
                        setRefresh={setRefresh}
                        refresh={refresh}
                    />
                </>
            }

        </section>
    )
}