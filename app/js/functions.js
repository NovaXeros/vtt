const {clipboard} = require('electron')

// Final Output String
var str;

// Switches
var spacesOn = true;
var mouse_is_down = false;
var current_i = 0;    

// Elements
var boxInputsTextAreas = document.getElementsByTagName('TEXTAREA');
var boxInputsText = document.getElementsByClassName("inputText");
var boxInputsNumeric = document.getElementsByClassName("inputNumeric");
var boxInputsCheckbox = document.getElementsByClassName("inputCheckbox");

// Buttons
var copyButton = document.querySelector("#copy-button");
var spacesButton = document.querySelector("#space-button");
var resetButton = document.querySelector("#reset-button");


// Time-delay Reset Button
resetButton.onmousedown = function(){
    mouse_is_down = true;
    
    setTimeout(
        (function(index){
            return function(){
                if(mouse_is_down && current_i === index){
                    //do thing when hold

			document.getElementById("template-form").reset();

			resetButton.innerText = "Reset!";
			resetButton.className = "button-slow";
			setTimeout(function(){
				document.getElementById("reset-button").style.color = "#3b5166"
				setTimeout(function(){
					resetButton.className = "button-fast"
					resetButton.innerText = "Hold to Reset";
					resetButton.style.color = "#FFFFFF";
				}, 700);
			}, 500);
                    
                };
            };
        })(++current_i), 1000); // time you want to hold before fire action
};

resetButton.onmouseup = function(){
    mouse_is_down = false;
    current_i++;
    
};


//Toggle linebreaks button
spacesButton.onclick = function(){
	if (spacesOn == true) {
		spacesButton.title = "Turn spacers on"
		spacesButton.style.backgroundImage = "url('./img/spaces-white-off.png')";
		spacesOn = false;
	} else {
		spacesButton.title = "Turn spacers off"
		spacesButton.style.backgroundImage = "url('./img/spaces-white-on.png')";
		spacesOn = true;
	};
};

//Debug Menu "fill lines with test"
function fillBlanks() {
	var i;
	for (i = 0; i < boxInputsText.length; i++) {
		boxInputsText[i].value = (boxInputsText[i].tagName == 'TEXTAREA') ? "Test Line 1\r\nTest Line 2\r\nTest Line 3" : "Test Line";
	};

	for (i = 0; i < boxInputsNumeric.length; i++) {
		boxInputsNumeric[i].value = "101";
	};

	document.getElementById("carrier").value = "None"

};

// Check if box contains pound sign and add if not
function checkCurrencyInd(stringForChecking) {

	if (stringForChecking != "") {
		return (stringForChecking.indexOf("£") == -1) ? "£" + stringForChecking : stringForChecking;
	} else {
		return stringForChecking;
	};

};

// Code for adding box contents to STR for output.
function processFlow() {

// Convert checkboxes to English readable output

boxInputsCheckbox[0].value = (boxInputsCheckbox[0].checked == true) ? "Yes" : "No";
boxInputsCheckbox[1].value = (boxInputsCheckbox[1].checked == true) ? "Yes" : "No";

if (boxInputsText[1].value == "Please select") {

	alert("Please select underwriter first!");

} else {

// String Start and how cover details obtained
str = boxInputsText[0].label.innerHTML + boxInputsText[0].value + (spacesOn == true ? "\r\n\r\n" : "\r\n")

// Underwriter
str += boxInputsText[1].label.innerHTML + boxInputsText[1].value + "\r\n" 

// Scheme
str += boxInputsText[2].label.innerHTML + boxInputsText[2].value + (spacesOn == true ? "\r\n\r\n" : "\r\n") 

// Inception or Renewal Date
str += boxInputsText[3].label.innerHTML + boxInputsText[3].value + "\r\n"

// Joint Policy Holders
str += boxInputsTextAreas[0].label.innerHTML + boxInputsTextAreas[0].value.replace(/\n\r?/g, "\r\n") + (spacesOn == true ? "\r\n\r\n" : "\r\n")

// Buildings SI
str += boxInputsNumeric[0].label.innerHTML + checkCurrencyInd(boxInputsNumeric[0].value) + " - "

// Buildings AD
str += boxInputsCheckbox[0].label.innerHTML + boxInputsCheckbox[0].value + "\r\n"

// Contents SI
str += boxInputsNumeric[1].label.innerHTML + checkCurrencyInd(boxInputsNumeric[1].value) + " - "

// Contents AD
str += boxInputsCheckbox[1].label.innerHTML + boxInputsCheckbox[1].value + "\r\n"

// PP/PB SI
str += boxInputsNumeric[2].label.innerHTML + checkCurrencyInd(boxInputsNumeric[2].value) + "\r\n"

// Unspecified Cover SI
str += boxInputsNumeric[3].label.innerHTML + checkCurrencyInd(boxInputsNumeric[3].value) + "\r\n"

// Specified Cover/Items
str += boxInputsTextAreas[1].label.innerHTML + boxInputsTextAreas[1].value.replace(/\n\r?/g, "\r\n") + (spacesOn == true ? "\r\n\r\n" : "\r\n")

// Standard Excess values
str += boxInputsText[6].label.innerHTML + boxInputsText[6].value + "\r\n" 

// Voluntary Excess values
str += boxInputsNumeric[4].label.innerHTML + checkCurrencyInd(boxInputsNumeric[4].value) + (spacesOn == true ? "\r\n\r\n" : "\r\n")

// Previous Claims
str += boxInputsTextAreas[2].label.innerHTML + boxInputsTextAreas[2].value.replace(/\n\r?/g, "\r\n") + "\r\n"

// Endorsements
str += boxInputsTextAreas[3].label.innerHTML + boxInputsTextAreas[3].value.replace(/\n\r?/g, "\r\n");

clipboard.writeText(str);

copyButton.innerText = "Copied!";
copyButton.className = "button-slow";
	setTimeout(function(){
		copyButton.style.color = "#3b5166"
		setTimeout(function(){
			copyButton.className = "button-fast"
			copyButton.innerText = "Copy to Clipboard";
			copyButton.style.color = "#FFFFFF";
		}, 700);
	}, 500);
};

};
