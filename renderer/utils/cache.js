import {DOWNLOADING, DEFAULT_DOWNLOAD_DIR} from "../../apis/file_manager";
import fs from 'fs';
import {updateDownloadingListAction} from "../redux/actionCreators";
import store from "../redux/store";
import wget from 'wget-improved';
import electron from "electron";

const ipcRenderer = electron.ipcRenderer || false;


export default class MediaTaskHandler{
    constructor() {
        const downloading_list = fs.readFileSync(DOWNLOADING, {encoding: 'utf8', flag: 'r'});
        let list;

        if(downloading_list === '' && downloading_list.length === 0){
            list = [];
        }else{
            list = JSON.parse(downloading_list);
        }

        store.dispatch(updateDownloadingListAction(list));
    }

    pushTask(data){
        try{
            const downloading_list = fs.readFileSync(DOWNLOADING, {encoding: 'utf8', flag: 'r'});
            let list;

            if(downloading_list === '' && downloading_list.length === 0){
                list = [];
            }else{
                list = JSON.parse(downloading_list);
            }

            for(let i=0; i<list.length ;i++){
                if(list[i].cid === data.cid && list[i].bvid === data.bvid){
                    return 2; // task exists
                }
            }

            list.push(data);

            fs.writeFileSync(DOWNLOADING, JSON.stringify(list));
            store.dispatch(updateDownloadingListAction(list));

            return 1;
        }catch(err){
            return 0;
        }
    }

    removeTask(cid){
        const downloading_list = fs.readFileSync(DOWNLOADING, {encoding: 'utf8', flag: 'r'});
        let list;

        if(downloading_list === '' && downloading_list.length === 0){
            list = [];
        }else{
            list = JSON.parse(downloading_list);
        }

        list = list.filter((list) => {
            if(list.cid !== cid){
                return 1;
            }
        });

        fs.writeFileSync(DOWNLOADING, JSON.stringify(list));
        store.dispatch(updateDownloadingListAction(list));
    }
}
