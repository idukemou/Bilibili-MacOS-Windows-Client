import { app, ipcMain, session } from 'electron';
import installExtension, { REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';
import serve from 'electron-serve';
import { createWindow } from './helpers';
import {
  getCaptchaToken,
  getCountryList,
  isUserLogin, parseCookieJarFile,
  sendCaptchaCode, userLoginWithSmscode, userLogout,
} from "../apis/user_login_api";
import { getCategoryList } from "../apis/category_list_api";
import { getRecommendList, getVideoPlayInfo, getVideoFlvUrl, getVideoDetails} from "../apis/index_page_api";
import {getViewHistory, getViewLater} from "../apis/user_based_feature_api";
import {
  getVideoRelatedTags,
  getVideoSuggestions,
  updateVideoPlayProgress,
  uploadVideoHeartBeat
} from "../apis/video_related_api";
import {getSearchHotWords, getSearchResultsByVideo, getSearchSuggestWords} from "../apis/search_page_api";
import {program_init} from "../apis/file_manager";

// const disk = require("diskusage");
// const os = require("os");
//
// let path = os.platform() === 'win32' ? 'c:' : '/';
//
// disk.check(path, (err, info) => {
//   if(err) {
//     console.log(err);
//     return;
//   }
//
//   console.log("total: ", info.total);
//   console.log("available: ", info.available);
//   console.log("free: ", info.free);
// })



const isProd = process.env.NODE_ENV === 'production';
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady()
      .then(() => {
        installExtension(REACT_DEVELOPER_TOOLS)
            .then((name) => console.log(`Added Extension:  ${name}`))
            // .catch((err) => console.log('An error occurred: ', err));
      })
      .then(() => {
        installExtension(REDUX_DEVTOOLS)
            .then((name) => console.log(`Added Extension:  ${name}`))
            // .catch((err) => console.log('An error occurred: ', err));
      })


  program_init(); // create app initial folder and files

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 680,
    minWidth: 1000,
    minHeight: 680,
    maxWidth: 1000,
    maxHeight: 680,
    frame: true
  });

  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
  }
})();



function log(message){
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth();
  const day = time.getDate();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();

  console.log("[node-libcurl] ", `${year}-${month}-${day} ${hour}:${min}:${sec}: `, message);
}



app.on('window-all-closed', () => {
  app.quit();
});

/* ipcMain event listener functions */
ipcMain.on('request_country_list', async (event, data) => {
  log('start fetching country list');
  event.sender.send('fetch_country_list', await getCountryList());
})

ipcMain.on('request_category_list', async (event, data) => {
  log('start fetching category list');
  event.sender.send('fetch_category_list', await getCategoryList());
})


ipcMain.handle('fetch_recommend_list', async (event, data) => {
  log('start fetching recommend list');
  return await getRecommendList();
})

ipcMain.handle('request_recommend_list_append', async (event, data) => {
  log('start appending recommend list');
  return await getRecommendList();
})

ipcMain.handle('fetch_video_play_info', async(event, bvid) => {
  log('start fetching video play info');
  return await getVideoPlayInfo(bvid);
})

ipcMain.handle('request_video_flv_url', async(event, data) => {
  log('start requesting video flv url');
  console.log(data);
  await getVideoDetails(data.bvid);
  return await getVideoFlvUrl(data.bvid, data.cid);
})

ipcMain.on('request_video_play_url', async (event, bvid) => {
  log('start fetching video play url');
  event.sender.send('fetch_video_play_url', await getVideoPlayInfo(bvid))
});

ipcMain.handle("request_captcha_token", async (event, data) => {
  log('start fetching captcha token');
  return await getCaptchaToken();
})

ipcMain.handle('send_captcha_code', async (event, data) => {
  log('start sending captcha code');
  return await sendCaptchaCode(data);
})

ipcMain.handle("request_user_login", async (event, data) => {
  log("start requesting user login");
  return await userLoginWithSmscode(data);
})

ipcMain.handle("request_is_user_login", async (event, data) => {
  log('start requesting is user login');
  return await isUserLogin();
})

ipcMain.handle("request_user_logout", async (event, data) => {
  log('start requesting user logout');
  return await userLogout();
})

ipcMain.handle("get_view_history", async (event, page) => {
  log('start getting view history');
  return await getViewHistory(page);
})

ipcMain.handle("get_video_related_tags", async(event, data) => {
  log("start getting video related tags");
  return await getVideoRelatedTags(data);
})

ipcMain.handle("get_video_suggest_videos", async(event, data) => {
  log("start getting video related suggestions");
  return await getVideoSuggestions(data);
})

ipcMain.handle("get_search_hot_words", async (event, data) => {
  log("start getting search hot words");
  return await getSearchHotWords();
});

ipcMain.handle("get_search_suggest_words", async (event, data) => {
  log("start getting search suggest words");
  return await getSearchSuggestWords(data);
})

ipcMain.handle("get_search_results_by_video", async (event, data) => {
  log("start getting search results under category video");
  return await getSearchResultsByVideo(data.keyword, data.page);
})

ipcMain.handle("update_video_play_progress", async (event, data) => {
  log('start updating the video play progress');
  return await updateVideoPlayProgress(data.aid, data.cid, data.progress);
})

ipcMain.handle('upload_video_heart_beat', async (event, data) => {
  log('start uploading the video heart beat');
  return await uploadVideoHeartBeat(data.aid, data.bvid, data.cid, data.progress);
})

ipcMain.handle("get_view_later", async (event, data) => {
  log('start getting view later list');
  return await getViewLater();
})