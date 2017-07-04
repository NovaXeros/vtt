'use strict';

const electron = require('electron')
const {app, BrowserWindow} = electron

var mainWindow = null;

const ipc = require('electron').ipcMain

app.on('ready', function(){
        mainWindow = new BrowserWindow({
            frame: false,
            width: 480,
            minHeight: 550,
            resizable: false
        });
        
        mainWindow.loadURL('file://' + __dirname + '/app/index.html');
});

ipc.on('close-main-window', function () {
        app.quit();
});
