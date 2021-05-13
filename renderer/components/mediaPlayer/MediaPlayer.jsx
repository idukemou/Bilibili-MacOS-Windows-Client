import {useEffect, useRef, useState} from "react";
import store from "../../redux/store";
import {convertDuration} from "../../utils/utils";
import {Popover, Slider} from "antd";

let controlTimer = 0;

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function MediaPlayer(props){
    const progressRef = useRef(null);
    const playerRef = useRef(null);

    const [player, setPlayer] = useState(null);
    const [mediaData, setMediaData] = useState({});
    const [mediaPage, setMediaPage] = useState([]);
    const [mediaContainer, setMediaContainer] = useState(null);
    const [ready, setReady] = useState(false);
    const MEDIA_SPEED = ["2.0", "1.5", "1.25", "1.0", "0.75", "0.5"];

    const [isPlay, setIsPlay] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isEnd, setIsEnd] = useState(false);
    const [showControls, setShowControls] = useState(true);

    const [processTime, setProcessTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [bufferedTime, setBufferedTime] = useState(0);
    const [processor, setProcessor] = useState(0);
    const [volume, setVolume] = useState(100);
    const [speedRate, setSpeedRate] = useState(1);

    const [showFeatureFrame, setShowFeatureFrame] = useState(false);
    const [showSpeedRate, setShowSpeedRate] = useState(false);
    const [showPages, setShowPages] = useState(false);


    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            if(JSON.stringify(store.getState().videoInfo.url) !== '{}'){
                setMediaData(store.getState().videoInfo.url.durl[0]);
            }
        })

        destroy();
        if(flvjs.isSupported() && JSON.stringify(mediaData) !== '{}'){
            setPlayer(flvjs.createPlayer({
                type: 'flv',
                isLive: false,
                hasVideo: true,
                hasAudio: true,
                segments: [
                    {
                        duration: mediaData.length,
                        filesize: mediaData.size,
                        url: mediaData.url
                    }
                ]
            }, {
                lazyLoad: false,
            }));
            setMediaContainer(document.getElementById('media-player'));
            setReady(!ready);
        }

        return () => {
            unsubscribe();
            clearTimeout(controlTimer);
            setProcessTime(0);
            setDuration(0);
            setBufferedTime(0);
        };
    }, [mediaData]);

    useEffect(() => {
        if(player !== null){
            initPlayer();
        }
    }, [ready]);


    useEffect(() => {
        if(JSON.stringify(props.videoInfo) !== '{}') {
            if (props.videoInfo.pages.length > 1) {
                setMediaPage(props.videoInfo.pages);
            }
        }

        return () => {
            setMediaPage([]);
        }
    }, [props.videoInfo]);

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

            document.getElementsByClassName("media-player-container")[0].addEventListener('mousemove', (e) => {
                clearTimeout(controlTimer);
                setShowControls(true);
                controlTimer = setTimeout(() => {
                    setShowControls(false);
                }, 5000);
            });
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
            setIsEnd(true);
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
        if(player === null) return;

        if(isMuted){
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
            setIsEnd(false);
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
        if(player !== null){
            destroy();
        }
        props.setRefresh(props.refresh);
        props.quit();
    }

    function handleShowSpeedRate(){
        setShowFeatureFrame(true);
        setShowControls(false);
        setShowSpeedRate(true);
    }

    function handleShowPages(){
        setShowFeatureFrame(true);
        setShowControls(false);
        setShowPages(true);
    }

    return(
        <>
            <div className="media-player-container" ref={playerRef}>

                {
                    showControls && <div className="media-title-wrapper">
                        <button className="media-button media-control-close" onClick={() => close()}>
                            {
                                <i className="iconfont icon-back" />
                            }
                        </button>

                        <span>{props.title}</span>
                    </div>
                }

                <video id='media-player'/>

                {
                    showControls && (
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
                                <div className="media-control-left-section">
                                    {
                                        isEnd ? (
                                            <button className="media-button media-control-replay" onClick={() => replay()}>
                                                <i className="iconfont icon-replay" />
                                            </button>
                                        ): (
                                            <button className="media-button media-control-play" onClick={() => playSwitcher()}>
                                                {
                                                    isPlay ? <i className="iconfont icon-zanting" /> : <i className="iconfont icon-bofang" />
                                                }
                                            </button>
                                        )
                                    }
                                </div>

                                <div className="media-control-right-section">
                                    {/*多媒体倍速控件*/}
                                    <button className="media-button media-control-speed" onClick={() => handleShowSpeedRate()}>倍速</button>

                                    {/*多媒体分页控件*/}
                                    {
                                        mediaPage.length > 0 && <button className="media-button media-control-pages" onClick={() => handleShowPages()}>分页</button>
                                    }

                                    {/*多媒体音量控件*/}
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

                                    {/*多媒体全屏控件*/}
                                    <button className="media-button media-control-fullscreen" onClick={() => fullscreen()}>
                                        {
                                            isFullScreen? <i className="iconfont icon-fullscreen-exit"/> : <i className="iconfont icon-fangda"/>
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

            {
                showFeatureFrame && (
                    <div id="media-feature-frame-container" onClick={() => {
                        setShowSpeedRate(false);
                        setTimeout(() => {
                            setShowFeatureFrame(false);
                        }, 600);
                    }}>
                        <div className={`media-feature-frame media-speed ${showSpeedRate ? 'media-speed-show' : 'media-speed-hide'}`}>
                            {
                                MEDIA_SPEED.map((speed) => (
                                    <button
                                        key={speed}
                                        className={`media-speed-item ${Number(speedRate) === Number(speed) && 'active'}`}
                                        onClick={() => setPlayerSpeedRate(Number(speed))}
                                    >
                                        {speed}X
                                    </button>
                                ))
                            }
                        </div>

                        {/*<div className={`media-feature-frame media-pages ${showPages ? 'media-speed-show' : 'media-speed-hide'}`} >*/}
                        {/*    {*/}
                        {/*        mediaPage.map((segment) => (*/}
                        {/*            <button*/}
                        {/*                key={segment.cid}*/}
                        {/*                className="media-speed-item"*/}
                        {/*            >*/}
                        {/*                {segment.part}*/}
                        {/*            </button>*/}
                        {/*        ))*/}
                        {/*    }*/}
                        {/*</div>*/}
                    </div>
                )
            }
        </>
    )
}