import {useEffect, useState} from "react";
import ContentFrame, {Content} from "../layout/contentFrame";
import MediaReviews from "./MediaReviews";
import MediaBriefIntro from "./MediaBriefIntro";

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function MediaInfo(props){

    const {quit, videoInfo, refresh, setRefresh} = props;

    const [active, setActive] = useState(0);
    const menuList = [{name: '简介'}, {name: '评论'}];

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
                    videoInfo.stat && menuList.map((menu, index) => {
                        return menuListLayout(menu.name, index, (index === 1 && <span>{videoInfo.stat.reply}</span>))
                    })
                }
            </div>

            <ContentFrame className="video-detail-info-content" activeIndex={active}>

                <Content className={"video-detail-info-content-item"}>
                    {
                        JSON.stringify(videoInfo) !== '{}' && <MediaBriefIntro {...props} />
                    }
                </Content>

                <Content className={"video-detail-info-content-item"}>
                    <MediaReviews {...props} />
                </Content>

            </ContentFrame>
        </div>
    )
}