const {clipboard} = require('electron')

var copyButton = document.querySelector("#copy-button")
var resetButton = document.querySelector("#reset-button")

var str;
var spacesOn = true;

function processFlow() {

var obtained_text = "How cover details obtained - ";
var obtained = document.getElementById("how-obtained");

var underwriter_text = "Underwriter - ";
var underwriter = document.getElementById("carrier");

var scheme_text = "Scheme - ";
var scheme = document.getElementById("scheme");

var bui_sumsinsured_text = "Buildings SI - ";
var bui_sumsinsured = document.getElementById("bui-si");

var con_sumsinsured_text = "Contents SI - ";
var con_sumsinsured = document.getElementById("con-si");

var bui_adcover_text = "Buildings AD - ";

var bui_adcover = (document.getElementById("bui-ad-q").checked == true) ? "Yes" : "No";

var con_adcover_text = "Contents AD - ";

var con_adcover = (document.getElementById("con-ad-q").checked == true) ? "Yes" : "No";

var personal_text = "Personal Belongings/Personal Possessions cover - ";
var personal = document.getElementById("pp-si");

var specified_text = "Specified cover & items - ";
var specified = document.getElementById("spec-si-items").value.replace(/\n\r?/g, "\r\n");

var unspecified_text = "Unspecified cover - ";
var unspecified = document.getElementById("unspec-si");

var standardxs_text = "Standard excesses incl. EOW, etc. - ";
var standardxs = document.getElementById("standard-xs");

var voluntaryxs_text = "Voluntary excesses - ";
var voluntaryxs = document.getElementById("voluntary-xs");

var renewal_text = "Inception/Renewal date - ";
var renewal = document.getElementById("inc-renewal");

var history_text = "Previous claims - ";
var history = document.getElementById("prev-claims").value.replace(/\n\r?/g, "\r\n");

var endorsements_text = "Endorsements - ";
var endorsements = document.getElementById("endorsements").value.replace(/\n\r?/g, "\r\n");

var jph_text = "Any joint policy holders (JPH) - ";
var jph = document.getElementById("jph").value.replace(/\n\r?/g, "\r\n");

if (underwriter.value == "Please select") {

	alert("Please select underwriter first!");

} else {
  
str = obtained_text + obtained.value + (spacesOn == true ? "\r\n\r\n" : "\r\n") +
underwriter_text + underwriter.value + "\r\n" +
scheme_text + scheme.value + (spacesOn == true ? "\r\n\r\n" : "\r\n") +
renewal_text + renewal.value + "\r\n" +
jph_text + jph + (spacesOn == true ? "\r\n\r\n" : "\r\n") +
bui_sumsinsured_text + bui_sumsinsured.value + "\r\n" +
bui_adcover_text + bui_adcover + "\r\n" +
con_sumsinsured_text + con_sumsinsured.value + "\r\n" +
con_adcover_text + con_adcover + "\r\n" +
personal_text + personal.value + "\r\n" +
unspecified_text + unspecified.value + "\r\n" +
specified_text + specified + (spacesOn == true ? "\r\n\r\n" : "\r\n") +
standardxs_text + standardxs.value + "\r\n" +
voluntaryxs_text + voluntaryxs.value + (spacesOn == true ? "\r\n\r\n" : "\r\n") +
history_text + history + "\r\n" +
endorsements_text + endorsements;

// alert(str);

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

var mouse_is_down = false;
var current_i = 0;    

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
				resetButton.style.color = "#3b5166"
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


