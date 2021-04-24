import { app, ipcMain } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';
import { getCountryList } from "../apis/user_login_api";
import { getCategoryList } from "../apis/category_list_api";
import { getRecommendList } from "../apis/index_page_api";


const isProd = process.env.NODE_ENV === 'production';

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

app.on('window-all-closed', () => {
  app.quit();
});

/* ipcMain event listener functions */
ipcMain.on('request_country_list', async (event, data) => {
  event.sender.send('fetch_country_list', await getCountryList());
})

ipcMain.on('request_category_list', async (event, data) => {
  event.sender.send('fetch_category_list', await getCategoryList());
})

ipcMain.on('request_recommend_list', async (event, data) => {
  event.sender.send('fetch_recommend_list', await getRecommendList());
})

ipcMain.handle('request_recommend_list_append', async (event, data) => {
  console.log("客户端接受到了");
  const result = await getRecommendList();
  console.log("客户端返回了");
  return result;
})