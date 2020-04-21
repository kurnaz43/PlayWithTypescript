"use strict";
var _a = require('electron'), app = _a.app, BrowserWindow = _a.BrowserWindow;
var path = require('path');
var url = require('url');
//init win
var win;
function createWindow() {
    //Create Browser window
    win = new BrowserWindow({
        darkTheme: false,
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    //load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));
    //Devtools
    win.webContents.openDevTools();
    win.on('closed', function () {
        win = null;
    });
}
//run create window function
app.on('ready', createWindow);
//quit whenn all windows are closed
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
