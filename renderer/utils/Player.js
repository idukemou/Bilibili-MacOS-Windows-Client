import {convertDuration} from "./utils";

export default class Player{
    constructor(mediaDataSource, container) {
        this.mediaDataSource = {
            type: 'flv',
            isLive: false,
            hasVideo: true,
            hasAudio: true,
            ...mediaDataSource
        }
        this.player = flvjs.createPlayer(this.mediaDataSource);
        this.mediaContainer = document.getElementById(container);
        this.process = null;
        this.init(container);
    }

    /**
     * 初始化播放器并自动播放视频
     * @param container 视频播放容器
     */
    init(container){
        this.player.attachMediaElement(this.mediaContainer);
        this.player.load();
        this.mediaContainer.onloadeddata = () => {
            this.play();
        }
    }

    /**
     * 开始播放视频
     */
    play(){
        this.player.play()
            .then(() => {
                clearInterval(this.process);
                this.getProcessTime();
            })
            .catch((e) => {});
    }

    /**
     * 暂停当前播放进度
     */
    pause(){
        this.player.pause();
    }

    /**
     * 销毁当前FlvPlayer对象
     */
    destroy(){
        this.player.pause();
        this.player.unload();
        clearInterval(this.process);
        this.player.detachMediaElement();
        this.player.destroy();
        this.player = null;
        this.process = null;
    }

    /**
     * 获取当前视频播放时间进度
     * @return 当前播放进度时间
     */
    getCurrentTime(){
        if(this.player){
            return this.player.currentTime;
        }
        return 0;
    }

    /**
     * 设置视频进度位置
     * @param time 要跳转到的视频播放时间
     */
    setCurrentTime(time){
        this.player.currentTime = time;
        this.pushMillionSecond();
    }

    /**
     * 当滑动进度条时，为了防止视频流的卡顿，每次都要调用一次jumCurrentTime来前进0.1秒进度
     */
    pushMillionSecond(){
        this.player.currentTime = this.player.currentTime + 0.1;
    }

    jumpOverTime(time){
        this.setCurrentTime(this.getCurrentTime() + time)
    }

    /**
     * 播放器的静音开关
     * @returns {string|boolean|*} 返回 true 如果当前播放器已经静音，否则返回 false
     */
    muteSwitch(){
        this.player.muted ? this.player.muted = false : this.player.muted = true;
        return this.player.muted
    }

    /**
     * 获取当前播放的数据流视频长度
     * @returns {*} 视频总播放长度
     */
    getDuration() {
        if(isNaN(this.player.duration)){
            return 0;
        }
        return this.player.duration;
    }


    /**
     * 重新播放当前视频
     */
    replayVideo(){
        this.setCurrentTime(0);
        this.play();
    }

    /**
     * 设置视频播放倍速
     * @param rate 需要设置的播放倍速
     */
    setPlaySpeed(rate){
        this.mediaContainer.playbackRate = rate;
    }

    /**
     * 获取播放媒体容器
     * @returns {HTMLElement} 媒体容器元素
     */
    getMediaElement(){
        return this.mediaContainer;
    }

    getProcessTime(){
        if(this.getCurrentTime() <= this.getDuration()){
            this.process = setInterval(() => {
                console.log(convertDuration(this.getCurrentTime() + 1)+"/"+convertDuration(this.getDuration()));
            }, 1000);
        }
    }
}
