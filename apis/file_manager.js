const USER_HOME = process.env.HOME || process.env.USERPROFILE;
const path = require('path');
const fs = require('fs');

export const APP_DIRECTORY = path.join(USER_HOME, '.bilibili');
export const DEFAULT_DOWNLOAD_DIR = path.join(USER_HOME, 'Desktop');
export const COOKIEJAR = path.join(APP_DIRECTORY, '.cookiejar');
export const CONFIG = path.join(APP_DIRECTORY, 'bilibili.config.json');
export const DOWNLOADING = path.join(APP_DIRECTORY, 'bilibili.downloading.json');
export const DOWNLOADED = path.join(APP_DIRECTORY, 'bilibili.downloaded.json');

export function program_init(){
    if(!path_checker(APP_DIRECTORY)){

        // create app directory while initialization
        fs.mkdirSync(APP_DIRECTORY);

        // create cookiejar file while initialization
        if(!path_checker(COOKIEJAR)) createFile(COOKIEJAR);

        // create global config file while initialization
        if(!path_checker(CONFIG)) createFile(CONFIG)

        // create downloading task file while initialization
        if(!path_checker(DOWNLOADING)) createFile(DOWNLOADING);

        // create downloaded task file while initialization
        if(!path_checker(DOWNLOADED)) createFile(DOWNLOADED);
    }
}


/**
 * Create file by given pathname.
 * @param pathname pathname for creating file
 * @returns {boolean} return false if pathname is not given
 */
function createFile(pathname){
    if(pathname.length === 0) return false;
    fs.openSync(pathname, 'w+');
}


/**
 * Check if given pathname is exits.
 * @param pathname pathname for checking
 * @returns {boolean} true if folder path exits, otherwise return false
 */
function path_checker(pathname){
    if(pathname.length === 0) return false;
    return fs.existsSync(pathname);
}