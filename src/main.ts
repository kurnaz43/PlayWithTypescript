const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
//init win
let win;

function createWindow() {
    //Create Browser window
    win = new BrowserWindow({
        darkTheme: false,
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    //load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    //Devtools
    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    })
}
//run create window function
app.on('ready', createWindow);

//quit whenn all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});