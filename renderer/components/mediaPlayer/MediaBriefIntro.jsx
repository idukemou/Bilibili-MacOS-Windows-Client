import {useEffect, useState} from "react";
import store from "../../redux/store";
import {platVideoStatusAction, playVideoInfoAction} from "../../redux/actionCreators";
import {convertTime, convertViews} from "../../utils/utils";
import electron from "electron";

const ipcRenderer = electron.ipcRenderer || false;
/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function MediaBriefIntro(props){

    const {videoInfo, setRefresh, refresh} = props;

    const [tags, setTags] = useState([]);
    const [suggestVideos, setSuggestVideos] = useState([])


    useEffect(() => {
        if(ipcRenderer && tags.length <= 0){
            ipcRenderer.invoke("get_video_related_tags", videoInfo.bvid)
                .then(res => {
                    if(res.code === 0){
                        setTags(res.data);
                    }
                })
        }

        return () => {
            ipcRenderer.removeAllListeners("get_video_related_tags");
            setTags([]);
        }
    }, []);


    useEffect(() => {
        if(ipcRenderer && suggestVideos.length <= 0 ){
            ipcRenderer.invoke("get_video_suggest_videos", videoInfo.bvid)
                .then(res => {
                    if(res.code === 0){
                        setSuggestVideos(res.data);
                    }
                })
        }

        return () => {
            ipcRenderer.removeAllListeners("get_video_suggest_videos");
            setSuggestVideos([]);
        }
    }, []);


    function playVideo(bvid){
        setSuggestVideos([]);
        setTags([]);

        if(ipcRenderer){
            ipcRenderer.invoke("fetch_video_play_info", bvid)
                .then(data => {
                    store.dispatch(playVideoInfoAction(data));
                })
        }

        store.dispatch(platVideoStatusAction(true));
        setRefresh(!refresh);
    }


    return (
        <>
            <div className="brief-intro-info">

                <div className="brief-intro-upper-info">
                    <div className="brief-intro-upper-profile">
                        <div className="brief-intro-upper-avatar">
                            <img src={videoInfo.owner.face} alt=""/>
                        </div>

                        <div className="brief-intro-upper-username">
                            <span className="brief-intro-username">{videoInfo.owner.name}</span>
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
                    <span>{videoInfo.title}</span>
                </div>

                <div className="brief-intro-video-meta-info">
                    <div className="brief-intro-video-meta-item">
                        <i className="iconfont icon-bofang1" />
                        <span>{convertViews(videoInfo.stat.view)}</span>
                    </div>

                    <div className="brief-intro-video-meta-item">
                        <i className="iconfont icon-danmushu" />
                        <span>{convertViews(videoInfo.stat.danmaku)}</span>
                    </div>

                    <div className="brief-intro-video-meta-item">
                        <i className="iconfont icon-time" />
                        <span>{convertTime(videoInfo.pubdate)}</span>
                    </div>

                    <div className="brief-intro-video-meta-item">
                        <span>{videoInfo.bvid}</span>
                    </div>
                </div>

                <div className="brief-intro-action-btns">
                    <button className="brief-intro-action-btn">
                        <i className="icon-thumbsup iconfont" />
                        <span>{convertViews(videoInfo.stat.like)}</span>
                    </button>

                    <button className="brief-intro-action-btn">
                        <i className="icon-thumbs-down iconfont" />
                        <span>{convertViews(videoInfo.stat.dislike)}</span>
                    </button>

                    <button className="brief-intro-action-btn">
                        <i className="icon-Bbi iconfont" />
                        <span>{convertViews(videoInfo.stat.coin)}</span>
                    </button>

                    <button className="brief-intro-action-btn">
                        <i className="icon-star iconfont" />
                        <span>{convertViews(videoInfo.stat.favorite)}</span>
                    </button>

                    <button className="brief-intro-action-btn">
                        <i className="icon-share1 iconfont" />
                        <span>{convertViews(videoInfo.stat.share)}</span>
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