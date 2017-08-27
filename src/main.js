const electron = require('electron');
const clipboard = electron.clipboard;
const app = electron.app;
const CalcWindow = electron.BrowserWindow

const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
    mainWindow = new CalcWindow({
        width: 301,
        height: 500,
        vibrancy: 'dark',
        resizable: false,
        fullscreen: false,
        maximizable: false,
        alwaysOnTop: true,
        title: "Calculatr",
        darkTheme: true,
        titleBarStyle: "hiddenInset",
        name: 'Calculatr'
    });
    mainWindow.setMenu(null);


    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
});

exports.copy = sum => {
    clipboard.writeText(sum.toString())
};