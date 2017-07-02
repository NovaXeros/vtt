const {clipboard} = require('electron')

var str;

function processFlow() {

var obtained_text = "How cover details obtained - ";
var obtained = document.getElementById("HowObtained");

var underwriter_text = "Underwriter - ";
var underwriter = document.getElementById("Underwriter");

var scheme_text = "Scheme - ";
var scheme = document.getElementById("Scheme");

var sumsinsured_text = "Sums Insured (BUI & CON) - ";
var sumsinsured = document.getElementById("SIValues");

var adcover_text = "AD Cover - Y/N - ";
var adcover = document.getElementById("ADCover");

var personal_text = "Personal Belongings/Personal Possessions cover - ";
var personal = document.getElementById("PP-PB");

var specified_text = "Specified cover & items - ";
var specified = document.getElementById("SpecCover");

var unspecified_text = "Unspecified cover - ";
var unspecified = document.getElementById("UnspecCover");

var standardxs_text = "Standard excesses incl. EOW, etc. - ";
var standardxs = document.getElementById("StandardXS");

var voluntaryxs_text = "Voluntary excesses - ";
var voluntaryxs = document.getElementById("VolXS");

var renewal_text = "Inception/Renewal date - ";
var renewal = document.getElementById("IncRenew");

var history_text = "Previous claims - ";
var history = document.getElementById("PreviousClaims");

var endorsements_text = "Endorsements - ";
var endorsements = document.getElementById("Endorsements");

var jph_text = "Any joint policy holders (JPH) - ";
var jph = document.getElementById("JPHPresent");

str = obtained_text + obtained.value + "\r\n\r\n" +
underwriter_text + underwriter.value + "\r\n" +
scheme_text + scheme.value + "\r\n\r\n" +
sumsinsured_text + sumsinsured.value + "\r\n" +
adcover_text + adcover.value + "\r\n" +
personal_text + personal.value + "\r\n" +
specified_text + specified.value + "\r\n" +
unspecified_text + unspecified.value + "\r\n" +
standardxs_text + standardxs.value + "\r\n" +
voluntaryxs_text + voluntaryxs.value + "\r\n" +
renewal_text + renewal.value + "\r\n\r\n" +
history_text + history.value + "\r\n" +
jph_text + jph.value + "\r\n" +
endorsements_text + endorsements.value;

// alert(str);

clipboard.writeText(str);

}
