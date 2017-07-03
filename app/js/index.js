const ipc = require('electron').ipcRenderer

var closeEl = document.getElementById('close-button');

closeEl.addEventListener('click', function() {
    ipc.send('close-main-window');
});
