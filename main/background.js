import { app, ipcMain } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';
import {
  getCaptchaToken,
  getCountryList,
  isUserLogin,
  sendCaptchaCode, userLoginWithSmscode, userLogout,
} from "../apis/user_login_api";
import { getCategoryList } from "../apis/category_list_api";
import { getRecommendList, getVideoPlayInfo } from "../apis/index_page_api";
import {getViewHistory} from "../apis/user_based_feature_api";
import {getVideoRelatedTags, getVideoSuggestions} from "../apis/video_related_api";
import {getSearchHotWords, getSearchResultsByVideo, getSearchSuggestWords} from "../apis/search_page_api";
import {event} from "next/dist/build/output/log";
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
  await app.whenReady();

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

ipcMain.on('request_recommend_list', async (event, data) => {
  log('start fetching recommend list');
  event.sender.send('fetch_recommend_list', await getRecommendList());
})

ipcMain.handle('request_recommend_list_append', async (event, data) => {
  log('start appending recommend list');
  return await getRecommendList();
})

ipcMain.on('request_video_play_info', async (event, bvid) => {
  log('start fetching video play info');
  event.sender.send('fetch_video_play_info', await getVideoPlayInfo(bvid))
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

ipcMain.handle("get_view_history", async (event, data) => {
  log('start getting view history');
  return await getViewHistory();
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