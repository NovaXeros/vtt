/*

Functions and code declared in this file are for the automated functions initialised on loading of the
index file, and not started or stopped by the user.

*/

//setup event listener and ipc communication for app.close button press
const ipc = require('electron').ipcRenderer
var closeEl = document.getElementById('close-button');

// Populate the carrier dropdown box with data in the carriers_var object
var $select = $('#carrier'); 
$select.html('');
$.each(carriers_var, function(key, val){ 
$select.append('<option id="' + val.ID + '">' + val.Name + '</option>');
});

// Populate elements with labels
var labels = document.getElementsByTagName('LABEL');
for (var i = 0; i < labels.length; i++) {
    if (labels[i].htmlFor != '') {
         var elem = document.getElementById(labels[i].htmlFor);
         if (elem)
            elem.label = labels[i];         
    }
}

// Enable debug menu
function KeyPress(e) {
	var debugMenu = document.getElementById("debug-menu");
	
	var evtobj = window.event? event : e
	if (evtobj.keyCode == 66 && evtobj.ctrlKey) {
	if (debugMenu.style.display == "none") {
		debugMenu.style.display = "inline";
	} else {
		debugMenu.style.display = "none";
	};
	};
};

// Detect when a button is pressed on the document
document.onkeydown = KeyPress;	

// Detect when the close button is clicked and trigger the close-main-window de-render
closeEl.addEventListener('click', function() {
    ipc.send('close-main-window');
});
