import Header from "../layout/header";
import React, {useEffect, useState} from "react";
import store from "../../redux/store";
import wget from 'wget-improved';
import {DEFAULT_DOWNLOAD_DIR} from "../../../apis/file_manager";
import electron from "electron";
import {Progress} from 'antd';

const ipcRenderer = electron.ipcRenderer || false;

export default function MyOfflineCaches(props){

    const [downloadingList, setDownloadingList] = useState(store.getState().downloadingList);

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setDownloadingList(store.getState().downloadingList);
        });

        return () => {
            unsubscribe();
        }
    }, [downloadingList]);

    function removeTask(cid){
        global.MediaHandler.removeTask(cid);
    }

    return(
        <div id="user-content-wrapper">
            <div className="user-content-header">
                <Header center={<span>{props.active.name}</span>}/>
            </div>

            <div className="user-content">
                {
                    downloadingList.map((list, index) => (
                       <DownloadItem list={list} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

function DownloadItem(props){

    const list = props.list;
    const [downloadProcess, setDownloadProcess] = useState(0);
    const [fileSize, setFileSize] = useState(0);
    const [downloadStatus, setDownloadStatus] = useState('');
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        if(downloadStatus === 'active'){
            setTimer(
                setInterval(() => {
                    ipcRenderer.invoke('upload_video_heart_beat', {
                        aid: list.aid,
                        bvid: list.bvid,
                        cid: list.cid,
                        progress: downloadProcess
                    })
                        .then(res => {
                            console.log(res);
                        })
                }, 15000)
            )
        }

        if(downloadStatus === 'done'){
            clearInterval(timer);
        }


        return () => {
            clearInterval(timer);
            ipcRenderer.removeAllListeners('upload_video_heart_beat');
        }
    }, [downloadStatus, downloadProcess]);

    function downloadTask(data){
        const options = {
            headers: {
                'Referer': 'https://www.bilibili.com',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_3_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36'
            }
        }

        if(ipcRenderer){
            ipcRenderer.invoke('request_video_flv_url', {bvid: data.bvid, cid: data.cid})
                .then((res) => {
                    return res;
                })
                .then((res) => {
                    if(res.code !== 0){
                        console.log('failed to request download resource');
                        return;
                    }

                    let download = wget.download(res.data.durl[0].url, DEFAULT_DOWNLOAD_DIR+`/${data.title}.flv`, options);

                    download.on('start', function(fileSize) {
                        setFileSize(fileSize);
                    });

                    download.on('end', function(output) {
                        setDownloadStatus('done');
                    });

                    download.on('progress', function(progress) {

                        if(downloadStatus !== 'active'){
                            setDownloadStatus('active');
                        }

                        if(typeof progress === 'number'){
                            setDownloadProcess(Math.round(progress * 100));
                            // console.log(progress);
                        }
                    });

                    download.on('error', function(err) {
                        setDownloadStatus('exception');
                    });
                });
        }
    }

    return(
        <div onClick={() => downloadTask(list)}>
            {list.title}<br/>
            <Progress percent={downloadProcess} status={downloadStatus}/>
        </div>
    )
}