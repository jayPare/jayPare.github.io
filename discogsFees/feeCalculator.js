//TODO: Double check if those country are really not supported, can't find them on Paypal
// "Aland Islands"
// "AF", "Afghanistan"
// "AX", "Aland Islands"
// "AS", "American Samoa"
// "AQ", "Antarctica"
// "IO", "British Indian Ocean Territory"
// "CF", "Central African Republic"
// "CX", "Christmas Island"
// "CC", "Cocos Islands"
// "CU", "Cuba"
// "CW", "Curacao"
// "TL", "East Timor"
// "GQ", "Equatorial Guinea"
// "GH", "Ghana"
// "GI", "Gibraltar"
// "GU", "Guam"
// "GG", "Guernsey"
// "GN", "Guinea"
// "HT", "Haiti"
// "ID", "India"
// "IR", "Iran"
// "IQ", "Iraq"
// "IM", "Isle Of Man"
// "JE", "Jersey"
// "XK", "Kosovo"
// "LB", "Lebanon"
// "LR", "Liberia"
// "LY", "Libya"
// "MO", "Macau"
// "YT", "Mayotte"
// "MM", "Myanmar"
// "MP", "Northern Mariana Islands"
// "KP", "North Korea"
// "PK", "Pakistan"
// "PS", "Palestine"
// "PR", "Puerto Rico"
// "BL", "Saint Barthelemy"
// "MF", "Saint Martin"
// "SX", "Sint Maarten"
// "SS", "South Sudan"
// "SD", "Sudan"
// "SY", "Syria"
// "TK", "Tokelau"
// "TR", "Turkey"
// "VI", "U.S. Virgin Islands"
// "UZ", "Uzbekistan"
// "VA", "Vatican"
// "VE", "Vietnam"
// "EH", "Western Sahara"
// "VA", "Vatican"

//TODO: Fill ddl with JS instead of 3495493429 options in HTML.

//TODO: Add support for AU GST and NZ GST.

//TODO: Add following countries support:
//code: "AU", name: "Australia"
//code: "CN", name: "China"
//code: "HK", name: "Hong Kong"
//code: "IL", name: "Israel"
//code: "JP", name: "Japan"
//code: "MX", name: "Mexico"
//code: "RU", name: "Russia"
//code: "KR", name: "South Korea"
//code: "CH", name: "Switzerland"
//code: "TW", name: "Taiwan"
//code: "TH", name: "Thailand"
//code: "GB", name: "United Kingdom"

const currencySymbol = {
  USD: "$",
  GBP: "£",
  EUR: "€",
  CAD: "CA$",
  AUD: "A$",
  JPY: "JP¥",
  CHF: "CHF",
  MXN: "MX$",
  BRL: "R$",
  NZD: "NZ$",
  SEK: "SEK",
  DKK: "DDK",
};

const eeaCountries = [
  "Austria",
  "Belgium",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "French Guiana",
  "Germany",
  "Greece",
  "Guadeloupe",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Martinique",
  // TODO: Need to add support.
  "Mayotte",
  "Monaco",
  "Netherlands",
  "Norway",
  "Poland",
  "Portugal",
  "Reunion",
  "Romania",
  "San Marino",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  // TODO: Need to add support.
  "Vatican",
];

ukCountries = [
  //TODO: Add Support.
  "Guernsey",
  //TODO: Add Support.
  "Isle of Man",
  //TODO:"Add Support"
  "Jersey",
  "United Kingdom",
];

const europeI = [
  "Austria",
  "Belgium",
  // TODO: Add support
  "Channel Islands",
  "Cyprus",
  "Estonia",
  "France",
  "French Guiana",
  "Guadeloupe",
  "Martinique",
  "Reunion",
  "Mayotte",
  "Germany",
  "Gibraltar",
  "Greece",
  "Ireland",
  "Isle Of Man",
  "Italy",
  "Luxembourg",
  "Malta",
  "Monaco",
  "Montenegro",
  "Netherlands",
  "Portugal",
  "San Marino",
  "Slovakia",
  "Slovenia",
  "Spain",
  "United Kingdom",
  "Vatican",
];

const northernEurope = [
  // TODO: Add support
  "Aland Islands",
  "Denmark",
  "Faroe Islands",
  "Finland",
  "Greenland",
  "Iceland",
  "Norway",
  "Sweden",
];

const allOtherPPCountry = [
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua & Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Azerbaijan Republic",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia & Herzegovina",
  "Botswana",
  "British Virgin Islands",
  "Brunei",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "Columbia",
  "Comoros",
  "Cook Islands",
  "Costa Rica",
  "Croatia",
  "Democratic Republic of the Congo",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Eritrea",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "French Polynesia",
  "Gabon",
  "Gambia",
  "Georgia",
  "Greenland",
  "Grenada",
  "Guatemala",
  "Guinea-Bissau",
  "Guyana",
  "Honduras",
  "Iceland",
  "Indonesia",
  "Ivory Coast",
  "Jamaica",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Lesotho",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Oman",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn",
  "Qatar",
  "Republic of the Congo",
  "Rwanda",
  "Saint Helena",
  "Saint Kitts & Nevis",
  "Saint Lucia",
  "Saint Pierre & Miquelon",
  "Saint Vincent & Grenadines",
  "Samoa",
  "Sao Tome & Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Sri Lanka",
  "Suriname",
  "Svalbard & Jan Mayen",
  "Swaziland",
  "Tajikistan",
  "Tanzania",
  "Togo",
  "Tonga",
  "Trinidad & Tobago",
  "Tunisia",
  "Turkmenistan",
  "Turks & Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "Uruguay",
  "Vanuatu",
  "Venezuela",
  "Wallis & Futuna Islands",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

let csv = "";
var xmlhttp;

function showState() {
  if (document.getElementById("ddlDestination").value == "United States") {
    document.getElementById("zipCodeFormGroup").classList.remove("d-none");
    document.getElementById("zipCode").required = true;
  } else {
    document.getElementById("zipCodeFormGroup").classList.add("d-none");
    document.getElementById("zipCode").required = false;
  }
}

function usTaxes(item) {
  var taxes = $.csv.toObjects(csv);

  var result = taxes.find(
    (taxes) => taxes["Postcode / ZIP"] === item.zipCode.toString()
  );

  item.taxRate = result["Rate %"] / 100;
}

function validate() {
  var taxes = $.csv.toObjects(csv);
  var form = document.getElementById("formCalculate");

  if (document.getElementById("ddlDestination").value == "United States") {
    // Is zip code valid?
    zipCode = document.getElementById("zipCode").value;

    var result = taxes.find(
      (taxes) => taxes["Postcode / ZIP"] === zipCode.toString()
    );

    if (!result) {
      document.getElementById("zipCode").setCustomValidity("Invalid Zip Code");
      document.getElementById("zipCode").reportValidity();
    }
  }

  return form.checkValidity();
}

function calculateTax(item) {
  switch (item.destination) {
    case "Austria":
    case "Bulgaria":
    case "Estonia":
    case "France":
    case "Slovakia":
    case "United Kingdom":
      item.taxRate = 0.2;
      break;

    case "Czech Republic":
    case "Belgium":
    case "Latvia":
    case "Lithuania":
    case "Netherlands":
    case "Spain":
      item.taxRate = 0.21;
      break;

    case "Croatia":
    case "Cyprus":
    case "Denmark":
    case "Sweden":
      item.taxRate = 0.25;
      break;

    case "Finland":
    case "Greece":
      item.taxRate = 0.24;
      break;

    case "Germany":
    case "Romania":
      item.taxRate = 0.19;
      break;

    case "Hungary":
      item.taxRate = 0.27;
      break;

    case "Ireland":
    case "Poland":
    case "Portugal":
      item.taxRate = 0.23;
      break;

    case "Italy":
    case "Slovenia":
      item.taxRate = 0.22;
      break;

    case "Luxembourg":
      item.taxRate = 0.16;
      break;

    case "Malta":
      item.taxRate = 0.18;
      break;

    case "United States":
      usTaxes(item);
      break;

    default:
      item.taxRate = 0.0;
      break;
  }

  return (item.itemPrice + item.shippingPrice) * item.taxRate;
}

function setDdlColor(element) {
  element.style.color = "#212529";
}

function loadCSV(url) {
  xmlhttp = null;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  }

  if (xmlhttp != null) {
    xmlhttp.onreadystatechange = state_Change;
    xmlhttp.open("GET", url, true);
    xmlhttp.send(null);
  } else {
    alert("Your browser does not support XMLHTTP.");
  }
}

function setCountryDdl() {
  // Move the current country from IP on top of the list.
  fetch("https://api.ipregistry.co/?key=y63j7gejdjdze6uk")
    .then(function (response) {
      return response.json();
    })
    .then(function (payload) {
      // In Your Country(ddlDestination) drop down list.
      var select = document.querySelector("#ddlDestination");
      var optionLabels = Array.from(select.options).map((opt) => opt.value);
      if (optionLabels.includes(payload.location.country.name)) {
        var option =
          select.options[optionLabels.indexOf(payload.location.country.name)];
        select.removeChild(option);
        select.insertBefore(option, select.childNodes[2]);
      }
      // In Destination Country(ddlSource) drop down list.
      select = document.querySelector("#ddlSource");
      optionLabels = Array.from(select.options).map((opt) => opt.value);
      if (optionLabels.includes(payload.location.country.name)) {
        option =
          select.options[optionLabels.indexOf(payload.location.country.name)];
        select.removeChild(option);
        select.insertBefore(option, select.childNodes[2]);
      }
    });
}

function state_Change() {
  // if xmlhttp shows "loaded"
  if (xmlhttp.readyState == 4) {
    // if "OK"
    if (xmlhttp.status == 200) {
      csv = xmlhttp.responseText;
    } else {
      alert("Problem retrieving CSV file");
    }
  }
}

function setPaypalFixedFees(item) {
  country = item.source;

  if (allOtherPPCountry.includes(item.source)) country = "otherCountries";

  switch (country) {
    case "Canada":
    // See: https://www.paypal.com/ca/webapps/mpp/merchant-fees
    case "Austria":
    // See: https://www.paypal.com/at/webapps/mpp/merchant-fees
    case "Belgium":
    // See: https://www.paypal.com/be/webapps/mpp/merchant-fees
    case "Brazil":
    // See: https://www.paypal.com/br/webapps/mpp/merchant-fees
    case "Denmark":
    // See: https://www.paypal.com/dk/webapps/mpp/merchant-fees
    case "Finland":
    // See: https://www.paypal.com/fi/webapps/mpp/merchant-fees
    case "Luxembourg":
    // See: https://www.paypal.com/lu/webapps/mpp/merchant-fees
    case "Netherlands":
    // See: https://www.paypal.com/nl/webapps/mpp/merchant-fees
    case "Norway":
    // See: https://www.paypal.com/no/webapps/mpp/merchant-fees
    case "Poland":
    // See: https://www.paypal.com/pl/webapps/mpp/merchant-fees
    case "Sweden":
    // See: https://www.paypal.com/se/webapps/mpp/merchant-fees
    case "otherCountries":
      // See: https://www.paypal.com/ki/webapps/mpp/merchant-fees
      switch (item.currency) {
        case "USD":
        case "AUD":
        case "CAD":
          item.ppFixedFees = 0.3;
          break;

        case "GBP":
          item.ppFixedFees = 0.2;
          break;

        case "EUR":
          item.ppFixedFees = 0.35;
          break;

        case "JPY":
          item.ppFixedFees = 40.0;
          break;

        case "CHF":
          item.ppFixedFees = 0.55;
          break;

        case "MXN":
          item.ppFixedFees = 4.0;
          break;

        case "BRL":
          item.ppFixedFees = 0.6;
          break;

        case "NZD":
          item.ppFixedFees = 0.45;
          break;

        case "SEK":
          item.ppFixedFees = 3.25;
          break;

        case "DKK":
          item.ppFixedFees = 2.6;
          break;

        default:
          alert(
            "Selected currency for " +
              item.source +
              " as source country is not supported. Please file a bug, this shouldn't happen."
          );
          item.ppFixedFees = 0.0;
          break;
      }
      break;

    case "France":
    case "French Guiana":
    case "Guadeloupe":
    case "Martinique":
    case "Reunion":
    //  https://www.paypal.com/fr/webapps/mpp/merchant-fees#domestic

    case "Hungary":
    //  https://www.paypal.com/hu/webapps/mpp/merchant-fees#domestic
    case "Ireland":
    //  https://www.paypal.com/ie/webapps/mpp/merchant-fees#domestic
    case "Italy":
    //  https://www.paypal.com/it/webapps/mpp/merchant-fees#domestic
    case "Portugal":
    // https://www.paypal.com/pt/webapps/mpp/merchant-fees

    // TODO: Need to double check.
    case "Spain":
    // https://www.paypal.com/es/webapps/mpp/merchant-fees

    // All countries below have the same Paypal fees.
    // See: https://www.paypal.com/bg/webapps/mpp/merchant-fees
    case "Bulgaria":
    case "Cyprus":
    case "Czech Republic":
    case "Estonia":
    case "Greece":
    case "Latvia":
    case "Liechtenstein":
    case "Lithuania":
    case "Malta":
    case "Romania":
    case "San Marino":
    case "Slovakia":
    case "Slovenia":
      switch (item.currency) {
        case "USD":
        case "AUD":
        case "CAD":
        case "GBP":
          item.ppFixedFees = 0.3;
          break;

        case "EUR":
          item.ppFixedFees = 0.35;
          break;

        case "JPY":
          item.ppFixedFees = 40.0;
          break;

        case "CHF":
          item.ppFixedFees = 0.55;
          break;

        case "MXN":
          item.ppFixedFees = 4.0;
          break;

        case "BRL":
          item.ppFixedFees = 0.6;
          break;

        case "NZD":
          item.ppFixedFees = 0.45;
          break;

        case "SEK":
          item.ppFixedFees = 3.25;
          break;

        case "DKK":
          item.ppFixedFees = 2.6;
          break;

        default:
          alert(
            "Selected currency for " +
              item.source +
              " as source country is not supported. Please file a bug, this shouldn't happen."
          );
          item.ppFixedFees = 0.0;
          break;
      }
      break;

    case "United States":
      // See: https://www.paypal.com/us/webapps/mpp/merchant-fees
      switch (item.currency) {
        case "USD":
          item.ppFixedFees = 0.3;
          break;

        case "GBP":
          item.ppFixedFees = 0.39;
          break;

        case "EUR":
          item.ppFixedFees = 0.39;
          break;

        case "CAD":
        case "AUD":
          item.ppFixedFees = 0.59;
          break;

        case "JPY":
          item.ppFixedFees = 49.0;
          break;

        case "CHF":
          item.ppFixedFees = 0.49;
          break;

        case "MXN":
          item.ppFixedFees = 9.0;
          break;

        case "BRL":
          item.ppFixedFees = 2.9;
          break;

        case "NZD":
          item.ppFixedFees = 0.69;
          break;

        case "SEK":
          item.ppFixedFees = 4.09;
          break;

        case "DKK":
          item.ppFixedFees = 2.9;
          break;

        default:
          alert(
            "Selected currency for " +
              item.source +
              " as source country is not supported. Please file a bug, this shouldn't happen."
          );
          item.ppFixedFees = 0.0;
          break;
      }
      break;

    // TODO: Need to double check.
    case "Germany":
      // See: https://www.paypal.com/de/webapps/mpp/merchant-fees
      switch (item.currency) {
        case "USD":
          item.ppFixedFees = 0.49;
          break;

        case "GBP":
          item.ppFixedFees = 0.29;
          break;

        case "EUR":
          item.ppFixedFees = 0.39;
          break;

        case "CAD":
        case "AUD":
          item.ppFixedFees = 0.59;
          break;

        case "JPY":
          item.ppFixedFees = 49.0;
          break;

        case "CHF":
          item.ppFixedFees = 0.39;
          break;

        case "MXN":
          item.ppFixedFees = 9.0;
          break;

        case "BRL":
          item.ppFixedFees = 2.49;
          break;

        case "NZD":
          item.ppFixedFees = 0.59;
          break;

        case "SEK":
          item.ppFixedFees = 3.99;
          break;

        case "DKK":
          item.ppFixedFees = 2.89;
          break;

        default:
          alert(
            "Selected currency for " +
              item.source +
              " as source country is not supported. Please file a bug, this shouldn't happen."
          );
          item.ppFixedFees = 0.0;
          break;
      }
      break;

    default:
      alert(
        "Country " +
          item.source +
          " is not supported. Please file a bug, this shouldn't happen."
      );
  }
}

function setPpFees(item) {
  country = item.source;

  if (allOtherPPCountry.includes(item.source)) country = "otherCountries";

  switch (country) {
    case "Brazil":
      // See: https://www.paypal.com/br/webapps/mpp/merchant-fees
      item.ppFeeRate = 0.0479;
      setPaypalFixedFees(item);
      break;

    case "United States":
      // See: https://www.paypal.com/us/webapps/mpp/merchant-fees
      item.ppFeeRate = 0.0349;
      setPaypalFixedFees(item);
      break;

    // TODO: Double check.
    case "Germany":
      // See: https://www.paypal.com/de/webapps/mpp/merchant-fees
      item.ppFeeRate = 0.0299;
      setPaypalFixedFees(item);
      break;

    case "Canada":
    // See: https://www.paypal.com/ca/webapps/mpp/merchant-fees
    case "Poland":
    // https://www.paypal.com/pl/webapps/mpp/merchant-fees
    case "Portugal":
    // https://www.paypal.com/pt/webapps/mpp/merchant-fees

    // TODO: Need to double check.
    case "Spain":
    // https://www.paypal.com/es/webapps/mpp/merchant-fees

    case "France":
    case "French Guiana":
    case "Guadeloupe":
    case "Martinique":
    case "Reunion":
      // See: https://www.paypal.com/fr/webapps/mpp/merchant-fees
      item.ppFeeRate = 0.029;
      setPaypalFixedFees(item);
      break;

    case "Austria":
    //See https://www.paypal.com/at/webapps/mpp/merchant-fees
    case "Belgium":
    // See: https://www.paypal.com/be/webapps/mpp/merchant-fees
    case "Denmark":
    // See: https://www.paypal.com/dk/webapps/mpp/merchant-fees
    case "Finland":
    // See: https://www.paypal.com/fi/webapps/mpp/merchant-fees
    case "Hungary":
    // See: https://www.paypal.com/hu/webapps/mpp/merchant-fees
    case "Ireland":
    // See: https://www.paypal.com/ie/webapps/mpp/merchant-fees
    case "Italy":
    // See: https://www.paypal.com/it/webapps/mpp/merchant-fees
    case "Luxembourg":
    // See: https://www.paypal.com/lu/webapps/mpp/merchant-fees
    case "Netherlands":
    // https://www.paypal.com/nl/webapps/mpp/merchant-fees
    case "Norway":
    // https://www.paypal.com/no/webapps/mpp/merchant-fees
    case "Sweden":
    // https://www.paypal.com/se/webapps/mpp/merchant-fees

    // Country belows all have the same PayPal fees
    // See: https://www.paypal.com/bg/webapps/mpp/merchant-fees
    case "Bulgaria":
    case "Cyprus":
    case "Czech Republic":
    case "Estonia":
    case "Greece":
    case "Latvia":
    case "Liechtenstein":
    case "Lithuania":
    case "Malta":
    case "Romania":
    case "San Marino":
    case "Slovakia":
    case "Slovenia":
      item.ppFeeRate = 0.034;
      setPaypalFixedFees(item);
      break;

    case "otherCountries":
      // See: https://www.paypal.com/hr/webapps/mpp/merchant-fees
      // Standard rate for receiving domestic transactions
      if (
        [
          "Antigua & Barbuda",
          "Barbados",
          "Bermuda",
          "Bahamas",
          "Belize",
          "Chile",
          "Costa Rica",
          "Dominica",
          "Dominican Republic",
          "Ecuador",
          "Grenada",
          "Guatemala",
          "Honduras",
          "Jamaica",
          "Saint Kitts & Nevis",
          "Cayman Islands",
          "Saint Lucia",
          "Nicaragua",
          "Panama",
          "Peru",
          "El Salvador",
          "Turks & Caicos Islands",
          "Trinidad & Tobago",
          "Uruguay",
          "Venezuela",
        ].includes(item.destination)
      ) {
        // AG, BB, BM, BS, BZ, CL, CR, DM, DO, EC, GD, GT, HN, JM,
        // KN, KY, LC, NI, PA, PE, SV, TC, TT, UY, & VE
        item.ppFeeRate = 0.054;
      } else if (["Malaysia", "Singapore"].includes(item.destination)) {
        // MY & SG
        item.ppFeeRate = 0.039;
      } else if (item.destination == "Morocco") {
        //MA
        item.ppFeeRate = 0.044;
      } else if (
        [
          "Bahrain",
          "Algeria",
          "Fiji",
          "Jordan",
          "New Caledonia",
          "Oman",
          "French Polynesia",
          "Palau",
          "Saudi Arabia",
        ].includes(item.destination)
      ) {
        //BH, DZ, FJ, JO, NC, OM, PF, PW, & SA
        item.ppFeeRate = 0.049;
      } else if (allOtherPPCountry.includes(item.destination)) {
        //All other markets
        item.ppFeeRate = 0.034;
      } else {
        //Receiving international transactions
        if (
          [
            "Andorra",
            "Albania",
            "Bosnia & Herzegovina",
            "Faroe Islands",
            "Georgia",
            "Moldova",
            "Serbia",
          ].includes(item.source)
        ) {
          //AD, AL, BA, FO, GE, MD, & RS
          if ([eeaCountries + ukCountries].includes(item.destination)) {
            //EEA & UK
            item.ppFeeRate = 0.0469;
          } else {
            //All other markets
            item.ppFeeRate = 0.0539;
          }
        } else if (
          [
            "Antigua & Barbuda",
            "Argentina",
            "Barbados",
            "Bermuda",
            "Bahamas",
            "Belize",
            "Chile",
            "Colombia",
            "Costa Rica",
            "Dominica",
            "Dominican Republic",
            "Ecuador",
            "Grenada",
            "Guatemala",
            "Honduras",
            "Jamaica",
            "Saint Kitts & Nevis",
            "Cayman Islands",
            "Saint Lucia",
            "Nicaragua",
            "Panama",
            "Peru",
            "El Salvador",
            "Turks & Caicos Islands",
            "Trinidad & Tobago",
            "Uruguay",
            "Venezuela",
          ].includes(item.source)
        ) {
          // AG, AR, BB, BM, BS, BZ, CL, CO, CR, DM,
          // DO, EC, GD, GT, HN, JM, KN, KY, LC, NI,
          // PA, PE, SV, TC, TT, UY, & VE
          item.ppFeeRate = 0.054;
        } else if (
          [
            "Bahrain",
            "Algeria",
            "Fiji",
            "Jordan",
            "New Caledonia",
            "Oman",
            "French Polynesia",
            "Palau",
            "Saudi Arabia",
          ].includes(item.source)
        ) {
          //BH, DZ, FJ, JO, NC, OM, PF, PW, & SA
          item.ppFeeRate = 0.049;
        } else if (["Croatia", "Iceland", "Monaco"].includes(item.source)) {
          //HR, IS, & MC
          if (eeaCountries.includes(item.destination)) {
            //EEA
            item.ppFeeRate = 0.034;
          } else if (ukCountries.includes(item.destination)) {
            //UK
            item.ppFeeRate = 0.0469;
          } else {
            //All other markets
            item.ppFeeRate = 0.0539;
          }
        } else {
          //All other markets
          item.ppFeeRate = 0.044;
        }
      }
      setPaypalFixedFees(item);
      break;

    default:
      alert(
        "Selected country not supported. Please file a bug, this shouldn't happen."
      );
      break;
  }
}

function setSupFees(item) {
  country = item.source;

  if (allOtherPPCountry.includes(item.source)) country = "otherCountries";

  switch (country) {
    case "Canada":
      // See: https://www.paypal.com/ca/webapps/mpp/merchant-fees
      if (item.destination == "Canada") {
        item.suppPpFeeRate = 0.0;
      } else if (item.destination == "United-States") {
        item.suppPpFeeRate = 0.008;
      } else {
        item.suppPpFeeRate = 0.01;
      }
      break;

    case "United States":
      // See: https://www.paypal.com/us/webapps/mpp/merchant-fees
      if (item.destination == "United-States") {
        item.suppPpFeeRate = 0.0;
      } else {
        item.suppPpFeeRate = 0.015;
      }
      break;

    case "Brazil":
      // See: https://www.paypal.com/br/webapps/mpp/merchant-fees
      if (item.destination == "Brazil") {
        item.suppPpFeeRate = 0.0;
      } else {
        item.suppPpFeeRate = 0.0161;
      }
      break;

    case "Ireland":
      // See: https://www.paypal.com/ie/webapps/mpp/merchant-fees
      if (item.destination == "Ireland") {
        item.suppPpFeeRate = 0.0;
      } else if (
        europeI.includes(item.destination) ||
        northernEurope.includes(item.destination)
      ) {
        item.suppPpFeeRate = 0.05;
      } else {
        item.suppPpFeeRate = 0.02;
      }
      break;

    case "Austria":
    // See: https://www.paypal.com/at/webapps/mpp/merchant-fees
    case "Belgium":
    // See: https://www.paypal.com/be/webapps/mpp/merchant-fees
    case "Denmark":
    // See: https://www.paypal.com/dk/webapps/mpp/merchant-fees
    case "Finland":
    // https://www.paypal.com/fi/webapps/mpp/merchant-fees

    // TODO: Need to double check.
    case "Germany":
    // https://www.paypal.com/de/webapps/mpp/merchant-fees

    case "Hungary":
    // https://www.paypal.com/hu/webapps/mpp/merchant-fees
    case "Italy":
    // https://www.paypal.com/it/webapps/mpp/merchant-fees
    case "Luxembourg":
    // https://www.paypal.com/lu/webapps/mpp/merchant-fees
    case "Netherlands":
    // https://www.paypal.com/nl/webapps/mpp/merchant-fees
    case "Norway":
    // https://www.paypal.com/no/webapps/mpp/merchant-fees
    case "Poland":
    // https://www.paypal.com/pl/webapps/mpp/merchant-fees
    case "Portugal":
    // https://www.paypal.com/pt/webapps/mpp/merchant-fees
    case "Sweden":
    // https://www.paypal.com/se/webapps/mpp/merchant-fees

    // TODO: Need to double check.
    case "Spain":
    // https://www.paypal.com/es/webapps/mpp/merchant-fees

    case "France":
    case "French Guiana":
    case "Guadeloupe":
    case "Martinique":
    case "Reunion":
    // See: https://www.paypal.com/fr/webapps/mpp/merchant-fees

    // The following country all have the same PP fees.
    // See: https://www.paypal.com/bg/webapps/mpp/merchant-fees
    case "Bulgaria":
    case "Cyprus":
    case "Czech Republic":
    case "Estonia":
    case "Greece":
    case "Latvia":
    case "Liechtenstein":
    case "Lithuania":
    case "Malta":
    case "Romania":
    case "San Marino":
    case "Slovakia":
    case "Slovenia":
      if (eeaCountries.includes(item.destination)) {
        // All those coutries are also part of EEA, so domestic transaction will be catched here.
        item.suppPpFeeRate = 0.0;
      } else if (ukCountries.includes(item.destination)) {
        item.suppPpFeeRate = 0.0129;
      } else {
        item.suppPpFeeRate = 0.0199;
      }
      break;

    case "otherCountries":
      if (eeaCountries.includes(item.destination)) {
        item.suppPpFeeRate = 0.0129;
      } else {
        item.suppPpFeeRate = 0.0;
      }
      break;

    default:
      alert(
        "Selected country not supported. Please file a bug, this shouldn't happen."
      );
      item.suppPpFeeRate = 0.0;
      break;
  }
}

function fillBreakdown(item) {
  var amount =
    item.itemPrice + item.shippingPrice - (item.discogsFee + item.paypalFee);
  document.getElementById("amount").innerHTML = amount.toLocaleString("en-US", {
    style: "currency",
    currency: item.currency,
  });

  document.getElementById("discogsCut").innerHTML =
    item.discogsFee.toLocaleString("en-US", {
      style: "currency",
      currency: item.currency,
    });

  document.getElementById("discogsTotal").innerHTML =
    item.discogsTotal.toLocaleString("en-US", {
      style: "currency",
      currency: item.currency,
    });

  document.getElementById("itemPrice").innerHTML =
    item.itemPrice.toLocaleString("en-US", {
      style: "currency",
      currency: item.currency,
    });

  document.getElementById("shippingPrice").innerHTML =
    item.shippingPrice.toLocaleString("en-US", {
      style: "currency",
      currency: item.currency,
    });

  document.getElementById("ppCut").innerHTML = item.paypalFee.toLocaleString(
    "en-US",
    {
      style: "currency",
      currency: item.currency,
    }
  );

  document.getElementById("ppPerc").innerHTML =
    item.ppFeeRate + item.suppPpFeeRate;

  document.getElementById("ppBasePerc").innerHTML = item.ppFeeRate;

  document.getElementById("ppSupPerc").innerHTML = item.suppPpFeeRate;

  document.getElementById("totalTransaction").innerHTML = (
    item.itemPrice +
    item.shippingPrice +
    item.taxes
  ).toLocaleString("en-US", {
    style: "currency",
    currency: item.currency,
  });

  document.getElementById("ppFixedFees").innerHTML =
    item.ppFixedFees.toLocaleString("en-US", {
      style: "currency",
      currency: item.currency,
    });

  document.getElementById("yourCut").innerHTML = amount.toLocaleString(
    "en-US",
    {
      style: "currency",
      currency: item.currency,
    }
  );

  document.getElementById("yourCutPerc").innerHTML = (
    100 -
    ((item.paypalFee + item.discogsFee) / amount) * 100
  ).toFixed(2);

  document.getElementById("feesPerc").innerHTML = (
    ((item.paypalFee + item.discogsFee) / amount) *
    100
  ).toFixed(2);

  document.getElementById("totalTransactionAmount").innerHTML = (
    item.itemPrice + item.shippingPrice
  ).toLocaleString("en-US", {
    style: "currency",
    currency: item.currency,
  });

  document.getElementById("result").classList.remove("d-none");
}

function setCurrency() {
  currency = document.getElementById("ddlCurrency").value;

  document.getElementById("ddlCurrency").value = currency;
  document.querySelectorAll(".currency").forEach((span) => {
    span.innerHTML = " (" + currency + ")";
  });

  document.querySelectorAll(".currencySymbol").forEach((span) => {
    span.innerHTML = currencySymbol[currency];
    span.classList.add("ms-3");
  });
}

function setFromCountry() {
  countryName = document.getElementById("ddlSource").value;
  code = countryCodes.countryToCode(countryName);
  currency = countryToCurrency[code];

  if (currency) {
    if (
      document
        .getElementById("ddlCurrency")
        .querySelector('[value="' + currency + '"]')
    ) {
      document.getElementById("ddlCurrency").value = currency;
      document.querySelectorAll(".currency").forEach((span) => {
        span.innerHTML = " (" + currency + ")";
      });

      document.querySelectorAll(".currencySymbol").forEach((span) => {
        span.innerHTML = currencySymbol[currency];
        span.classList.add("ms-3");
      });
    } else {
      document.querySelectorAll(".currency").forEach((span) => {
        span.innerHTML = "";
      });
      document.querySelectorAll(".currencySymbol").forEach((span) => {
        span.innerHTML = "";
        span.classList.remove("ms-3");
      });
      document.getElementById("ddlCurrency").selectedIndex = 0;
    }
  }

  if (allOtherPPCountry.includes(document.getElementById("ddlSource").value)) {
    document.getElementById("allOtherPPCountryNote").classList.remove("d-none");
  } else {
    document.getElementById("allOtherPPCountryNote").classList.add("d-none");
  }
}

function calculateFees() {
  if (!validate()) return;

  var item = {
    itemPrice: Number(document.getElementById("inputItemPrice").value),
    shippingPrice: Number(document.getElementById("inputShippingPrice").value),
    source: document.getElementById("ddlSource").value,
    destination: document.getElementById("ddlDestination").value,
    zipCode: document.getElementById("zipCode").value,
    currency: document.getElementById("ddlCurrency").value,
    discogsTotal: 0.0,
    discogsFee: 0.0,
    ppTotal: 0.0,
    ppFee: 0.0,
    ppFixedFees: 0.0,
    suppPpFeeRate: 0.0,
    taxes: 0.0,
    taxRate: 0.0,
  };

  console.log("Item Price: %f\n", item.itemPrice);
  console.log("Shipping Price: %f\n", item.shippingPrice);

  console.log("Source: %s\n", item.source);
  console.log("Destination: %s\n", item.destination);

  item.taxes = calculateTax(item);

  console.log("Taxe Rate: %f\n", item.taxRate);
  console.log("Taxes: %f\n", item.taxes);

  item.discogsTotal = item.itemPrice + item.shippingPrice;
  item.discogsFee = item.discogsTotal * 0.09;
  item.discogsFee = item.discogsFee > 0.15 ? item.discogsFee : 0.15;
  console.log("Discogs Fees: %f\n", item.discogsFee);

  console.log(
    "Purchase total: %f\n",
    item.itemPrice + item.shippingPrice + item.taxes
  );

  setPpFees(item);
  console.log("Paypal Fee Rate: %f\n", item.ppFeeRate);
  console.log("Paypal Fixed Fee: %f\n", item.ppFixedFees);
  setSupFees(item);
  console.log("Supplemental Paypal Fee Rate: %f\n", item.suppPpFeeRate);

  console.log("Paypal %: %f\n", item.ppFeeRate + item.suppPpFeeRate);
  item.paypalFee =
    (item.itemPrice + item.shippingPrice + item.taxes) *
      (item.ppFeeRate + item.suppPpFeeRate) +
    item.ppFixedFees;
  console.log("Paypel Fees: %f\n", item.paypalFee);

  fillBreakdown(item);
}
