import {useEffect, useRef, useState} from "react";
import store from "../../redux/store";
import {platVideoStatusAction, playVideoInfoAction} from "../../redux/actionCreators";

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function Video(props){

    let flvPlayer = null;
    const [url, setUrl] = useState(store.getState().videoInfo.url);
    const videoUrl = 'https://upos-hz-mirrorakam.akamaized.net/upgcxcode/95/54/297805495/297805495-1-32.flv?e=ig8euxZM2rNcNbRj7zUVhoM17buBhwdEto8g5X10ugNcXBlqNxHxNEVE5XREto8KqJZHUa6m5J0SqE85tZvEuENvNo8g2ENvNo8i8o859r1qXg8xNEVE5XREto8GuFGv2U7SuxI72X6fTr859r1qXg8gNEVE5XREto8z5JZC2X2gkX5L5F1eTX1jkXlsTXHeux_f2o859IB_&uipk=5&nbs=1&deadline=1619409834&gen=playurlv2&os=akam&oi=2906822554&trid=4c49f3bfa44f482fa4088ce35f8dc88cu&platform=pc&upsig=ee4a0643df0275a65c505b28ae63a29d&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&hdnts=exp=1619409834~hmac=947b3a497a1a870d01641c53b44c62689bf45889a78a680d15919365508eb0b2&mid=0&orderid=0,1&agrr=1&logo=80000000'

    useEffect(() => {
        store.subscribe(() => {
            if(JSON.stringify(store.getState().videoInfo.url) !== '{}'){
                const temp = store.getState().videoInfo.url.durl[0].url;
                setUrl(temp);
            }
        })
    }, [store.getState().videoInfo.url]);

    useEffect(() => {
        if(flvjs.isSupported()){
            player_load(url);
        }
    })

    useEffect(() => {
        if(!status){
            player_destroy();
        }
    }, [props.status])


    function player_load(url){
        if(flvPlayer !== null || flvPlayer !== undefined){
            player_destroy();
        }

        flvPlayer = flvjs.createPlayer({
            type: 'flv',
            hasVideo: true,
            hasAudio: true,
            url: url
        });

        flvPlayer.attachMediaElement(document.getElementById('playerContainer'));
        flvPlayer.load();
    }

    function player_start(){
        if(flvPlayer !== null){
            flvPlayer.play();
        }
    }

    function player_pause(){
        if(flvPlayer !== null){
            flvPlayer.pause();
        }
    }

    function player_destroy(){
        if(flvPlayer !== null){
            flvPlayer.pause();
            flvPlayer.unload();
            flvPlayer.detachMediaElement();
            flvPlayer.destroy();
            flvPlayer = null;
        }
    }

    return(
        <div style={{width:640, height:480, border: '1px solid #000'}}>
            <video id='playerContainer' width='640px' height='480px' controls={true}></video>
            <button onClick={() => player_start()}>play</button>
            <button onClick={() => player_pause()}>pause</button>
            <button onClick={() => player_destroy()}>destroy</button>
        </div>
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

    useEffect(() => {
        store.subscribe(() => {
            setStatus(store.getState().playVideoStatus);
        })
    }, [store.getState().playVideoStatus]);


    function exitVideo(){
        store.dispatch(platVideoStatusAction(false));
        store.dispatch(playVideoInfoAction({
            url: {},
            info: {}
        }));
    }

    return(
        <section style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: '10000',
            backgroundColor: 'lightpink',
            display: (status ? 'block': 'none')
        }}>
            {
                status ? <Video status={status} /> : ''
            }
            <br/><br/><br/><br/>
            <button onClick={() => exitVideo()}>cancel</button>
        </section>
    )
}