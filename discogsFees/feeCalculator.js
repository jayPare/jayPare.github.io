//TODO: Add support for:
// Brazil

//TODO: Replace $ with actual currency in breakdown.
//TODO: Fill ddl with JS instead of 3495493429 options in HTML.

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
  //TODO: Add support
  "French Guiana",
  "Germany",
  "Greece",
  //TODO: Add support
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
  //TODO: Add support
  "Martinique",
  //TODO: Add support
  "Mayotte",
  "Monaco",
  "Netherlands",
  "Norway",
  "Poland",
  "Portugal",
  //TODO: Add support
  "Reunion",
  "Romania",
  "San Marino",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  //TODO: Add Support
  "Vatican City State",
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
  "Dominica",
  "Djibouti",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Eritrea",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Micronesia",
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
  "Monaco",
  "Mauritania",
  "Mauritius",
  "Moldova",
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
  console.log(countryCodes.countryToCode("Saint Kitts ANd Nevis"));
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
      var select = document.querySelector("#ddlDestination");
      var optionLabels = Array.from(select.options).map((opt) => opt.value);
      if (optionLabels.includes(payload.location.country.name)) {
        var option =
          select.options[optionLabels.indexOf(payload.location.country.name)];

        select.removeChild(option);
        select.insertBefore(option, select.childNodes[2]);
      }

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

function setOtherCountriesFixedFees(item) {
  switch (item.source) {
    // See: https://www.paypal.com/ki/webapps/mpp/merchant-fees
    //AUD
    case "Kiribati":
    case "Nauru":
    case "Norfolk Island":
    case "Tuvalu":
    //USD
    case "British Virgin Islands":
    case "Ecuador":
    case "Marshall Islands":
    case "Micronesia":
    case "Palau":
    case "Samoa":
    case "Turks & Caicos Islands":
      item.ppFixedFees = 0.3;
      break;

    //EUR
    case "Andorra":
    case "Croatia":
    case "Monaco":
    case "Montenegro":
    case "Saint Pierre & Miquelon":
      item.ppFixedFees = 0.35;
      break;

    //DKK
    case "Faroe Islands":
    case "Greenland":
      item.ppFixedFees = 2.6;
      break;

    //NZD
    case "Cook Islands":
    case "New Zealand":
    case "Niue":
    case "Pitcairn":
      item.ppFixedFees = 0.45;
      break;

    //MYR
    case "Malaysia":
      item.ppFixedFees = 2.0;
      break;

    // PHP
    case "Philippines":
      item.ppFixedFees = 15.0;
      break;

    //SGD
    case "Singapore":
      item.ppFixedFees = 0.5;
      break;

    //NOK
    case "Svalbard & Jan Mayen":
      item.ppFixedFees = 2.8;
      break;

    /* Currency not supported by Paypal. Need to find out which currency people
     * from those countries are using.
     */
    //ALL
    case "Albania":
    //DZD
    case "Algeria":
    //AOA
    case "Angola":
    //XCD
    case "Anguilla":
    //XCD
    case "Antigua & Barbuda":
    //ARS
    case "Argentina":
    //AMD
    case "Armenia":
    // AWG
    case "Aruba":
    // AZN
    case "Azerbaijan Republic":
    // BSD
    case "Bahamas":
    // BHD
    case "Bahrain":
    // BTD
    case "Bangladesh":
    // BBD
    case "Barbados":
    // BYN
    case "Belarus":
    // BZD
    case "Belize":
    // XOF
    case "Benin":
    // BMD
    case "Bermuda":
    // BTN
    case "Bhutan":
    // BOB
    case "Bolivia":
    // BAM
    case "Bosnia & Herzegovina":
    // BWP
    case "Botswana":
    // BND
    case "Brunei":
    // XOF
    case "Burkina Faso":
    // BIF
    case "Burundi":
    // KHR
    case "Cambodia":
    // XAF
    case "Cameroon":
    // CVE
    case "Cape Verde":
    // KYD
    case "Cayman Islands":
    // XAF
    case "Chad":
    // CLP
    case "Chile":
    // COP
    case "Columbia":
    // KMF
    case "Comoros":
    // CRC
    case "Costa Rica":
    // CDF
    case "Democratic Republic of the Congo":
    // DOP
    case "Dominica":
    // DJF
    case "Djibouti":
    // DOP
    case "Dominican Republic":
    // EGP
    case "Egypt":
    // SVC
    case "El Salvador":
    // ERN
    case "Eritrea":
    // ETB
    case "Ethiopia":
    // FKP
    case "Falkland Islands":
    // FJD
    case "Fiji":
    // XPF
    case "French Polynesia":
    // XAF
    case "Gabon":
    // GMD
    case "Gambia":
    // GEL
    case "Georgia":
    // XCD
    case "Grenada":
    // GTQ
    case "Guatemala":
    // XOF
    case "Guinea-Bissau":
    // GYD
    case "Guyana":
    // HNL
    case "Honduras":
    // ISK
    case "Iceland":
    // IDR
    case "Indonesia":
    // XOF
    case "Ivory Coast":
    // JMD
    case "Jamaica":
    // JOD
    case "Jordan":
    // KZT
    case "Kazakhstan":
    // KES
    case "Kenya":
    // KWD
    case "Kuwait":
    // KGS
    case "Kyrgyzstan":
    // LAK
    case "Laos":
    // LSL
    case "Lesotho":
    // MKD
    case "Macedonia":
    // MGA
    case "Madagascar":
    // MWK
    case "Malawi":
    // MVR
    case "Maldives":
    // XOF
    case "Mali":
    // MRU
    case "Mauritania":
    // MUR
    case "Mauritius":
    // MDL
    case "Moldova":
    // MNT
    case "Mongolia":
    // XCD
    case "Montserrat":
    // MAD
    case "Morocco":
    // MZN
    case "Mozambique":
    // NAD
    case "Namibia":
    // NPR
    case "Nepal":
    //
    case "Netherlands Antilles":
    // XPF
    case "New Caledonia":
    // XPF
    case "Nicaragua":
    // NGN
    case "Niger":
    // NGN
    case "Nigeria":
    // OMR
    case "Oman":
    // PAB
    case "Panama":
    // PGK
    case "Papua New Guinea":
    // PYG
    case "Paraguay":
    // PEN
    case "Peru":
    // QAR
    case "Qatar":
    // CDF
    case "Republic of the Congo":
    // RWF
    case "Rwanda":
    // SHP
    case "Saint Helena":
    // XCD
    case "Saint Kitts & Nevis":
    // XCD
    case "Saint Lucia":
    // XCD
    case "Saint Vincent & Grenadines":
    // STN
    case "Sao Tome & Principe":
    // SAR
    case "Saudi Arabia":
    // XOF
    case "Senegal":
    // RSD
    case "Serbia":
    // SCR
    case "Seychelles":
    // SLL
    case "Sierra Leone":
    // SBD
    case "Solomon Islands":
    // SOS
    case "Somalia":
    // ZAR
    case "South Africa":
    // LKR
    case "Sri Lanka":
    // SRD
    case "Suriname":
    // SZL
    case "Swaziland":
    // TJS
    case "Tajikistan":
    // TZS
    case "Tanzania":
    // XOF
    case "Togo":
    // TOP
    case "Tonga":
    // TTD
    case "Trinidad & Tobago":
    // TND
    case "Tunisia":
    // TMT
    case "Turkmenistan":
    // UGX
    case "Uganda":
    // UAH
    case "Ukraine":
    // ARS
    case "United Arab Emirates":
    // UYU
    case "Uruguay":
    // VUV
    case "Vanuatu":
    // VES
    case "Venezuela":
    // XPF
    case "Wallis & Futuna Islands":
    // YER
    case "Yemen":
    // ZWM
    case "Zambia":
    // ZWL
    case "Zimbabwe":
      alert(
        "Unable to determine Paypal fixed fees for selected country. Calculaiton will be off."
      );
      item.ppFixedFees = 0.0;
      break;

    default:
      break;
  }
}

function setPpFees(item) {
  country = item.source;

  if (allOtherPPCountry.includes(item.source)) country = "otherCountries";

  switch (country) {
    case "Canada":
      // See: https://www.paypal.com/ca/webapps/mpp/merchant-fees
      item.ppFeeRate = 0.029;
      item.ppFixedFees = 0.3;
      break;

    case "United States":
      // See: https://www.paypal.com/us/webapps/mpp/merchant-fees
      item.ppFeeRate = 0.0349;
      item.ppFixedFees = 0.3;
      break;

    case "Austria":
    //See https://www.paypal.com/at/webapps/mpp/merchant-fees
    case "Belgium":
    // See: https://www.paypal.com/be/webapps/mpp/merchant-fees
    case "Bulgaria":
    case "Cyprus":
    case "Estonia":
    case "Greece":
    case "Latvia":
    case "Lithuania":
    case "Malta":
    case "Romania":
    case "San Marino":
    case "Slovakia":
    case "Slovenia":
      // See: https://www.paypal.com/bg/webapps/mpp/merchant-fees
      item.ppFeeRate = 0.034;
      item.ppFixedFees = 0.35;
      break;

    case "Liechtenstein":
      // See: https://www.paypal.com/li/webapps/mpp/merchant-fees
      item.ppFeeRate = 0.034;
      // Liechtenstein is using CHF.
      item.ppFixedFees = 0.55;
      break;

    case "Czech Republic":
      // See: https://www.paypal.com/cz/webapps/mpp/merchant-fees
      item.ppFeeRate = 0.034;
      // Czech Republic is using CZK.
      item.ppFixedFees = 10.0;
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
      setOtherCountriesFixedFees(item);
      break;

    default:
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

    case "Austria":
    // See: https://www.paypal.com/at/webapps/mpp/merchant-fees
    case "Belgium":
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
      // See: https://www.paypal.com/bg/webapps/mpp/merchant-fees
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
      item.suppPpFeeRate = 0.0;
      break;
  }
}

function fillBreakdown(item) {
  var amount =
    item.itemPrice + item.shippingPrice - (item.discogsFee + item.paypalFee);
  document.getElementById("amount").innerHTML = amount.toLocaleString("en-CA", {
    style: "currency",
    currency: "CAD",
  });

  document.getElementById("discogsCut").innerHTML =
    item.discogsFee.toLocaleString("en-CA", {
      style: "currency",
      currency: "CAD",
    });

  document.getElementById("discogsTotal").innerHTML =
    item.discogsTotal.toLocaleString("en-CA", {
      style: "currency",
      currency: "CAD",
    });

  document.getElementById("itemPrice").innerHTML =
    item.itemPrice.toLocaleString("en-CA", {
      style: "currency",
      currency: "CAD",
    });

  document.getElementById("shippingPrice").innerHTML =
    item.shippingPrice.toLocaleString("en-CA", {
      style: "currency",
      currency: "CAD",
    });

  document.getElementById("ppCut").innerHTML = item.paypalFee.toLocaleString(
    "en-CA",
    {
      style: "currency",
      currency: "CAD",
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
  ).toLocaleString("en-CA", {
    style: "currency",
    currency: "CAD",
  });

  document.getElementById("ppFixedFees").innerHTML =
    item.ppFixedFees.toLocaleString("en-CA", {
      style: "currency",
      currency: "CAD",
    });

  document.getElementById("yourCut").innerHTML = amount.toLocaleString(
    "en-CA",
    {
      style: "currency",
      currency: "CAD",
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
  ).toLocaleString("en-CA", {
    style: "currency",
    currency: "CAD",
  });

  document.getElementById("result").classList.remove("d-none");
}

function setCurrency() {
  countryName = document.getElementById("ddlSource").value;

  if (["Bulgaria", "Romania"].includes(countryName)) {
    /* Bulgaria uses BGN currency, but Paypal doesn't support it, so I assume
     * they are using EUR.
     */
    currency = "EUR";
  } else {
    code = countryCodes.countryToCode(countryName);
    currency = countryToCurrency[code];
  }

  const currenciesSpan = document.querySelectorAll(".currency");
  currenciesSpan.forEach((span) => {
    if (currency) {
      span.innerHTML = " (" + currency + ")";
    } else {
      span.innerHTML = "";
    }
  });

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
