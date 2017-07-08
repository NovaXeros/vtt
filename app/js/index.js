//setup event listener and ipc communication for app.close button press
const ipc = require('electron').ipcRenderer

var closeEl = document.getElementById('close-button');

closeEl.addEventListener('click', function() {
    ipc.send('close-main-window');
});

//get a reference to the select element
var $select = $('#carrier');
 
//clear the current content of the select
$select.html('');
 
//iterate over the data and append a select option

$.each(carriers_var, function(key, val){ 
$select.append('<option id="' + val.ID + '">' + val.Name + '</option>');
});