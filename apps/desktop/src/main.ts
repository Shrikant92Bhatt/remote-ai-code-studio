import { app, BrowserWindow } from 'electron';
import path from 'node:path';

function createWindow() {
  const window = new BrowserWindow({
    width: 1440,
    height: 900,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  const url = process.env.RAIC_WEB_URL ?? 'http://localhost:3000';
  void window.loadURL(url);
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
