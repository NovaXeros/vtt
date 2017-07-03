//setup the eventlistener for app.close button
const ipc = require('electron').ipcRenderer

var closeEl = document.getElementById('close-button');

closeEl.addEventListener('click', function() {
    ipc.send('close-main-window');
});

//jquery select element assignment
var $select = $('#carrier');
 
//clear the current content of the select
$select.html('');
 
//iterate over the json data set in carriers.js and add to Select

$.each(carriers_var, function(key, val){ 
$select.append('<option id="' + val.ID + '">' + val.Name + '</option>');
});
