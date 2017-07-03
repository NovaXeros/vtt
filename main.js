'use strict';

const electron = require('electron')
const {app, BrowserWindow} = electron

var mainWindow = null;

const ipc = require('electron').ipcMain

app.on('ready', function(){
        mainWindow = new BrowserWindow({
            frame: false,
            height: 530,
            width: 450,
            resizable: false
        });
        
        mainWindow.loadURL('file://' + __dirname + '/app/index.html');
});

ipc.on('close-main-window', function () {
        app.quit();
});