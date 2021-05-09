import {useEffect, useRef, useState} from "react";
import store from "../../redux/store";
import {platVideoStatusAction, playVideoInfoAction} from "../../redux/actionCreators";
import {convertDuration, convertTime, convertViews} from "../../utils/utils";
import '../../styles/videoPlayer.css';
import {Popover, Slider} from "antd";
import ContentFrame, {Content} from "../layout/contentFrame";
import electron from "electron";

const ipcRenderer = electron.ipcRenderer || false;

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function MediaPlayer(props){
    const progressRef = useRef(null);
    const playerRef = useRef(null);

    const [player, setPlayer] = useState(null);
    const [url, setUrl] = useState(store.getState().videoInfo.url);
    const [mediaContainer, setMediaContainer] = useState(null);
    const [ready, setReady] = useState(false);

    const [isPlay, setIsPlay] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const [processTime, setProcessTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [bufferedTime, setBufferedTime] = useState(0);
    const [processor, setProcessor] = useState(null);
    const [volume, setVolume] = useState(100);
    const [speedRate, setSpeedRate] = useState(1);


    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            if(JSON.stringify(store.getState().videoInfo.url) !== '{}'){
                setUrl(store.getState().videoInfo.url.durl[0].url);
            }
        })

        return () => {
            unsubscribe();
        }
    }, [url]);

    useEffect(() => {
        destroy();
        if(flvjs.isSupported() && url.length > 10){
            setPlayer(flvjs.createPlayer({
                type: 'flv',
                isLive: false,
                hasVideo: true,
                hasAudio: true,
                url: url
            }, {
                lazyLoad: false,
            }));
            setMediaContainer(document.getElementById('media-player'));
            setReady(!ready);
        }
    }, [url]);


    useEffect(() => {
        if(player !== null){
            initPlayer();
        }
    }, [ready]);

    function initPlayer(){
        if(player !== null && mediaContainer !== null){
            player.attachMediaElement(mediaContainer);
            player.unload();
            player.load();

            mediaContainer.onloadeddata = () => {
                play();
                setDuration(getDuration());
                setVolume(getPlayerVolume());
            }

            mediaContainer.onplay = () => {
                clearInterval(processor);
                setIsPlay(true);
                setProcessor(setInterval(() => {
                    setProcessTime(getCurrentTime());
                }, speedRate * 1000))
            }

            mediaContainer.onended = () => {
                clearInterval(processor);
            }

            mediaContainer.onprogress = () => {
                if(mediaContainer.buffered.length > 0){
                    setBufferedTime(mediaContainer.buffered.end(0));
                }
            }
        }
    }

    function play(){
        if(player !== null){
            player.play()
                .then(() => {})
                .catch((e) => {});
        }
    }

    function pause(){
        clearInterval(processor);
        if (player !== null){
            player.pause();
            setIsPlay(false);
        }
    }

    function destroy(){
        if(player !== null){
            pause();
            player.unload();
            player.detachMediaElement();
            player.destroy();
            setPlayer(null);
        }
    }

    function getCurrentTime(){
        if (player === null) return 0;

        if(convertDuration(player.currentTime) === convertDuration(player.duration)){
            return player.duration;
        }else{
            return player.currentTime;
        }
    }

    function setCurrentTime(time){
        if(player !== null){
            player.currentTime = time;
        }
    }

    function appendSeek(time){
        player.currentTime = player.currentTime + time;
    }

    function pushSeek(){
        appendSeek(0.125);
    }

    function getDuration(){
        if(player !== null){
            return player.duration;
        }
        return 0;
    }

    function setPlayerVolume(volume){
        if(player !== null){
            player.volume = volume / 100;
        }
    }

    function getPlayerVolume(){
        if(player !== null){
            return player.volume;
        }
    }

    function muteSwitcher(){
        if(isMuted && player !== null){
            player.muted = false;
            setIsMuted(false);
        }else{
            player.muted = true;
            setIsMuted(true);
        }
    }

    function playSwitcher(){
        isPlay ? pause(): play();
    }

    function replay(){
        if(player !== null){
            pause();
            setCurrentTime(0);
            play();
        }
    }

    function setPlayerSpeedRate(rate){
        if(mediaContainer !== null){
            mediaContainer.playbackRate = rate;
            setSpeedRate(rate);
        }
    }

    function handleChangeVolume(value){
        setPlayerVolume(value);

        if(value > 0){
            setIsMuted(false);
        }else{
            setIsMuted(true);
        }
    }

    function handleProgressChange({target: {value}}){
        pause();
        setProcessTime(value);
    }

    function mouseDownEvent(){
        setProcessTime(progressRef.current.value);
    }

    function mouseUpEvent(){
        if(processTime >= bufferedTime){
            setTimeout(() => {
                pushSeek();
            }, 1000);
        }

        if(mediaContainer.buffered.length > 0){
            if(processTime <= mediaContainer.buffered.start(0)){
                setTimeout(() => {
                    pushSeek();
                }, 1000);
            }
        }

        setCurrentTime(processTime);
        play();
    }

    function fullscreen(){
        if(!isFullScreen){
            playerRef.current.requestFullscreen();
            setIsFullScreen(true);
        }else{
            document.exitFullscreen();
        }

        playerRef.current.addEventListener('fullscreenchange', () => {
            const state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
            !state && setIsFullScreen(false);

        })
    }

    function close(){
        destroy();
        props.setRefresh(props.refresh);
        props.quit();
    }


    return(
        <>
            <div className="media-player-container" ref={playerRef}>

                <div className="media-title-wrapper">
                    <button className="media-button media-control-close" onClick={() => close()}>
                        {
                            <i className="iconfont icon-close" />
                        }
                    </button>

                    <span>{props.title}</span>
                </div>

                <video id='media-player'/>

                <div className="media-controls">
                    <div className="progress-bar-wrapper">
                        <span>{convertDuration(processTime)}</span>
                        <input
                            ref={progressRef}
                            type="range"
                            min={0}
                            max={duration}
                            value={processTime}
                            onInput={(e) => handleProgressChange(e)}
                            onMouseUp={() => mouseUpEvent()}
                            onMouseDown={() => mouseDownEvent()}
                            className="progress-bar"
                            style={{
                                background: `linear-gradient(to right, 
                                                   rgb(250, 107, 147) 0%, rgb(250, 107, 147) ${(processTime/duration) * 100}%, 
                                                   #777 ${(processTime/duration) * 100}%, #777 ${(bufferedTime/duration) * 100}%, 
                                                   #444 ${(bufferedTime/duration) * 100}%, #444 100%
                                            )`
                            }}
                        />
                        <span>{convertDuration(duration)}</span>
                    </div>

                    <div className="media-control-buttons">
                        <button className="media-button media-control-play" onClick={() => playSwitcher()}>
                            {
                                isPlay ? <i className="iconfont icon-zanting" /> : <i className="iconfont icon-bofang" />
                            }
                        </button>
                        <button className="media-button media-control-speed" onClick={() => setPlayerSpeedRate(2)}>2X</button>
                        <button className="media-button media-control-speed" onClick={() => setPlayerSpeedRate(1)}>原速</button>

                        <Popover
                            content={
                                <div style={{height: 120}}>
                                    <Slider vertical defaultValue={100} onChange={(e) => handleChangeVolume(e)} />
                                </div>
                            }
                            placement="top"
                        >
                            <button className="media-button media-control-mute" onClick={() => muteSwitcher()}>
                                {
                                    isMuted ? <i className="iconfont icon-jingyin"/> : <i className="iconfont icon-yinliang" />
                                }
                            </button>
                        </Popover>

                        <button className="media-button media-control-replay" onClick={() => replay()}>
                            <i className="iconfont icon-replay" />
                        </button>

                        <button className="media-button media-control-fullscreen" onClick={() => fullscreen()}>
                            {
                                isFullScreen? <i className="iconfont icon-fullscreen-exit"/> : <i className="iconfont icon-fangda"/>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}


/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function MediaInfo(props){

    const [active, setActive] = useState(0);
    const menuList = [
        {name: '简介'},
        {name: '评论'}
    ]

    function menuListLayout(data, index, extra){
        return(
            <button
                key={index}
                className={`video-detail-info-header-option ${active === index && 'active'}`}
                onClick={() => setActive(index)}
            >
                {data}{extra}
            </button>
        )
    }

    return(
        <div className="video-detail-info-container">
            <div className="video-detail-info-header">
                {
                    props.videoInfo.stat && menuList.map((menu, index) => {
                        return menuListLayout(menu.name, index, (index === 1 && <span>{props.videoInfo.stat.reply}</span>))
                    })
                }
            </div>

            <ContentFrame className="video-detail-info-content" activeIndex={active}>
                <Content className={"video-detail-info-content-item"}>
                    {
                        JSON.stringify(props.videoInfo) !== '{}' && <BriefIntro {...props} />
                    }
                </Content>
                <Content className={"video-detail-info-content-item"}>
                    <VideoReviews/>
                </Content>
            </ContentFrame>
        </div>
    )
}

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function BriefIntro(props){

    const [tags, setTags] = useState([]);
    const [suggestVideos, setSuggestVideos] = useState([])

    useEffect(() => {
        if(ipcRenderer && tags.length <= 0){
            ipcRenderer.invoke("get_video_related_tags", props.videoInfo.bvid)
                .then(res => {
                    if(res.code === 0){
                        setTags(res.data);
                    }
                })
        }

        if(ipcRenderer && suggestVideos.length <= 0 ){
            ipcRenderer.invoke("get_video_suggest_videos", props.videoInfo.bvid)
                .then(res => {
                    if(res.code === 0){
                        setSuggestVideos(res.data);
                    }
                })
        }
    }, []);


    function playVideo(bvid){

        setSuggestVideos([]);
        setTags([]);

        ipcRenderer.send('request_video_play_info', bvid);
        ipcRenderer.once('fetch_video_play_info', async (event, data) => {
            store.dispatch(await playVideoInfoAction(data));
        })

        store.dispatch(platVideoStatusAction(true));

        props.setRefresh(!props.refresh);
        ipcRenderer.removeAllListeners('request_video_play_info');
    }


    return (
        <>
            <div className="brief-intro-info">

                <div className="brief-intro-upper-info">
                    <div className="brief-intro-upper-profile">
                        <div className="brief-intro-upper-avatar">
                            <img src={props.videoInfo.owner.face} alt=""/>
                        </div>

                        <div className="brief-intro-upper-username">
                            <span className="brief-intro-username">{props.videoInfo.owner.name}</span>
                            <span className="brief-intro-fans">{convertViews(412513)}粉丝</span>
                        </div>
                    </div>

                    <div className="is-followed">
                         <button>
                             <i className="iconfont icon-icon-test" />
                             <span>关注</span>
                         </button>
                    </div>
                </div>

                <div className="brief-intro-video-title">
                    <span>{props.videoInfo.title}</span>
                </div>

                <div className="brief-intro-video-meta-info">
                    <div className="brief-intro-video-meta-item">
                        <i className="iconfont icon-bofang1" />
                        <span>{convertViews(props.videoInfo.stat.view)}</span>
                    </div>

                    <div className="brief-intro-video-meta-item">
                        <i className="iconfont icon-danmushu" />
                        <span>{convertViews(props.videoInfo.stat.danmaku)}</span>
                    </div>

                    <div className="brief-intro-video-meta-item">
                        <i className="iconfont icon-time" />
                        <span>{convertTime(props.videoInfo.pubdate)}</span>
                    </div>

                    <div className="brief-intro-video-meta-item">
                        <span>{props.videoInfo.bvid}</span>
                    </div>
                </div>

                <div className="brief-intro-action-btns">
                    <button className="brief-intro-action-btn">
                        <i className="icon-thumbsup iconfont" />
                        <span>{convertViews(props.videoInfo.stat.like)}</span>
                    </button>

                    <button className="brief-intro-action-btn">
                        <i className="icon-thumbs-down iconfont" />
                        <span>{convertViews(props.videoInfo.stat.dislike)}</span>
                    </button>

                    <button className="brief-intro-action-btn">
                        <i className="icon-Bbi iconfont" />
                        <span>{convertViews(props.videoInfo.stat.coin)}</span>
                    </button>

                    <button className="brief-intro-action-btn">
                        <i className="icon-star iconfont" />
                        <span>{convertViews(props.videoInfo.stat.favorite)}</span>
                    </button>

                    <button className="brief-intro-action-btn">
                        <i className="icon-share1 iconfont" />
                        <span>{convertViews(props.videoInfo.stat.share)}</span>
                    </button>
                </div>
            </div>

            <div className="brief-intro-video-tags">
                {
                    tags.length > 0 &&  tags.map((tag, index) => (
                        <button className="brief-intro-video-tag" key={index}>
                            <span>{tag.tag_name}</span>
                        </button>
                    ))
                }
            </div>

            <div className="brief-intro-video-related-suggestions">
                {
                    suggestVideos.length > 0 &&  suggestVideos.map((suggest, index) => (
                        <div className="brief-intro-video-related-suggestion" key={index} onClick={() => playVideo(suggest.bvid)}>

                            <div className="brief-intro-video-suggestion-cover">
                                <img src={suggest.pic} alt={suggest.title} />
                                <span>{suggest.duration}</span>
                            </div>

                            <div className="brief-intro-video-suggestion-info">
                                <span className="brief-intro-video-suggestion-info-title">{suggest.title}</span>

                                <div className="brief-intro-video-suggestion-meta-info">

                                    <div className="brief-intro-video-suggestion-video-supper">
                                        <i className="iconfont icon-UPzhu" />
                                        <span className="brief-intro-video-suggestion-upper-username">{suggest.owner.name}</span>
                                    </div>


                                    <div className="brief-intro-video-suggestion-video-stats">
                                        <div className="brief-intro-video-suggestion-video-stats-wrapper">
                                            <div className="brief-intro-video-suggestion-video-stat">
                                                <i className="iconfont icon-bofang1" />
                                                <span>{convertViews(suggest.stat.view)}</span>
                                            </div>

                                            <div className="brief-intro-video-suggestion-video-stat">
                                                <i className="iconfont icon-danmushu" />
                                                <span>{convertViews(suggest.stat.danmaku)}</span>
                                            </div>
                                        </div>

                                        <button className="watch-later-btn">
                                            <i className="iconfont icon-gengduo" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function VideoReviews(props){
    return(
        <span>reviews</span>
    )
}

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function VideoDetail(props){

    const [status, setStatus] = useState(store.getState().playVideoStatus);
    const [videoInfo, setVideoInfo] = useState(store.getState().videoInfo.info);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {

        if(JSON.stringify(videoInfo) !== '{}'){
            if(ipcRenderer){
                ipcRenderer.invoke('update_video_play_progress', {
                    aid: videoInfo.aid,
                    cid: videoInfo.cid,
                    progress: 100,
                }).then(res => {})
            }
        }

        setVideoInfo({});
        store.subscribe(() => {
            if(JSON.stringify(store.getState().videoInfo.info) !== '{}'){
                setVideoInfo(store.getState().videoInfo.info);
            }
        })
    }, [refresh]);

    useEffect(() => {
        store.subscribe(() => {
            setStatus(store.getState().playVideoStatus);
        })
    }, [status]);


    function exitVideo(){
        if(JSON.stringify(videoInfo) !== '{}'){
            if(ipcRenderer){
                ipcRenderer.invoke('update_video_play_progress', {
                    aid: videoInfo.aid,
                    cid: videoInfo.cid,
                    progress: 100,
                }).then(res => {})
            }
        }

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
                    <MediaPlayer quit={exitVideo} title={videoInfo.title} status={status} setRefresh={setRefresh} refresh={refresh} />
                    <MediaInfo videoInfo={videoInfo} quit={exitVideo} setRefresh={setRefresh} refresh={refresh} />
                </>
            }

        </section>
    )
}