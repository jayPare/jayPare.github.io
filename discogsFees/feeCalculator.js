const unsupportedCountries = [
  "Afghanistan",
  "Aland Islands",
  "American Samoa",
  "Antarctica",
  "British Indian Ocean Territory",
  "Central African Republic",
  "Channel Islands",
  "Christmas Island",
  "Cocos Islands",
  "Cuba",
  "Curacao",
  "East Timor",
  "Equatorial Guinea",
  "Ghana",
  "Gibraltar",
  "Guam",
  "Guinea",
  "Haiti",
  "India",
  "Iran",
  "Iraq",
  "Kosovo",
  "Lebanon",
  "Liberia",
  "Libya",
  "Macau",
  "Mayotte,",
  "Myanmar",
  "Northern Mariana Islands",
  "North Korea",
  "Pakistan",
  "Palestine",
  "Puerto Rico",
  "Saint Barthelemy",
  "Saint Martin",
  "Sint Maarten",
  "South Sudan",
  "Sudan",
  "Syria",
  "Tokelau",
  "Turkey",
  "U.S. Virgin Islands",
  "Uzbekistan",
  "Vatican",
  "Vietnam",
  "Western Sahara",
  "Vatican",
];

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
  "Vatican",
];

const ukCountries = ["Guernsey", "Isle of Man", "Jersey", "United Kingdom"];

const europeI = [
  "Austria",
  "Belgium",
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

const europeII = [
  "Albania",
  "Andorra",
  "Belarus",
  "Bosnia & Herzegovina",
  "Bulgaria",
  "Croatia",
  "Czech Republic",
  "Georgia",
  "Hungary",
  "Kosovo",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Macedonia",
  "Moldova",
  "Poland",
  "Romania",
  "Russian Federation",
  "Serbia",
  "Switzerland",
  "Ukraine",
];

const northernEurope = [
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

var csv = "";
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
  if (csv) {
    let taxes = $.csv.toObjects(csv);

    let result = taxes.find(
      (tax) => tax["Postcode / ZIP"] === item.zipCode.toString()
    );

    item.taxRate = result["Rate %"] / 100;
  } else {
    alert(
      "Can't read CSV file for US taxes information. Please file a bug with the link at the end of this page."
    );
  }
}

function validate() {
  var form = document.getElementById("formCalculate");

  if (csv) {
    let taxes = $.csv.toObjects(csv);

    if (document.getElementById("ddlDestination").value == "United States") {
      // Is zip code valid?
      zipCode = document.getElementById("zipCode").value;

      let result = taxes.find(
        (tax) => tax["Postcode / ZIP"] === zipCode.toString()
      );

      if (!result) {
        document
          .getElementById("zipCode")
          .setCustomValidity("Invalid Zip Code");
        document.getElementById("zipCode").reportValidity();
      }
    }
  }

  return form.checkValidity();
}

function setTaxes(item) {
  switch (item.destination) {
    case "Australia":
      item.taxRate = 0.1;
      break;

    case "New Zealand":
      item.taxRate = 0.15;
      break;

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

  item.tax = (item.itemPrice + item.shippingPrice) * item.taxRate;
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
  var countryList = countryCodes.allCountries();

  countryList = countryList.filter(
    (country) => !unsupportedCountries.includes(country)
  );

  // Move US at top of the list.
  var usIndex = countryList.indexOf("United States");
  countryList.unshift(countryList.splice(usIndex, 1)[0]);

  // Move the current country from IP on top of the list.
  fetch("https://api.ipregistry.co/?key=y63j7gejdjdze6uk")
    .then(function (response) {
      return response.json();
    })
    .then(function (payload) {
      if (countryList.includes(payload.location.country.name)) {
        let currentCountryIndex = countryList.indexOf(
          payload.location.country.name
        );
        countryList.unshift(countryList.splice(currentCountryIndex, 1)[0]);
      }

      //TODO: Where should I put the code below so it's executed even if the IP request fails?
      let ddlDestination = document.getElementById("ddlDestination");
      let ddlSource = document.getElementById("ddlSource");
      countryList.map((country) => {
        let opt = document.createElement("option");
        let text =
          allOtherPPCountry.includes(country) ||
          ["Mexico", "Russia"].includes(country)
            ? country + "*"
            : country;
        opt.value = country;
        opt.innerHTML = text;
        ddlSource.append(opt);
        ddlDestination.append(opt.cloneNode(true));
      });
    });
}

function state_Change() {
  // if xmlhttp shows "loaded"
  if (xmlhttp.readyState == 4) {
    // if "OK"
    if (xmlhttp.status == 200) {
      csv = xmlhttp.responseText;
    } else {
      alert(
        "Problem retrieving CSV file. Please file a bug using the link at the end of this page."
      );
    }
  }
}

function setPaypalFixedFees(item) {
  country = item.source;

  if (allOtherPPCountry.includes(item.source)) country = "otherCountries";

  switch (country) {
    case "Austria":
    // See: https://www.paypal.com/au/webapps/mpp/merchant-fees
    case "Austria":
    // See: https://www.paypal.com/at/webapps/mpp/merchant-fees
    case "Belgium":
    // See: https://www.paypal.com/be/webapps/mpp/merchant-fees
    case "Brazil":
    // See: https://www.paypal.com/br/webapps/mpp/merchant-fees
    case "Canada":
    // See: https://www.paypal.com/ca/webapps/mpp/merchant-fees
    case "China":
    // See: https://www.paypal.com/cn/webapps/mpp/merchant-fees
    case "Denmark":
    // See: https://www.paypal.com/dk/webapps/mpp/merchant-fees
    case "Finland":
    // See: https://www.paypal.com/fi/webapps/mpp/merchant-fees
    case "Hong Kong":
    // See: https://www.paypal.com/hk/webapps/mpp/merchant-fees
    case "Israel":
    // See: https://www.paypal.com/il/webapps/mpp/merchant-fees
    case "Japan":
    // See: https://www.paypal.com/jp/webapps/mpp/merchant-fees
    case "Luxembourg":
    // See: https://www.paypal.com/lu/webapps/mpp/merchant-fees
    case "Mexico":
    // See: https://www.paypal.com/mx/webapps/mpp/merchant-fees
    case "Netherlands":
    // See: https://www.paypal.com/nl/webapps/mpp/merchant-fees
    case "Norway":
    // See: https://www.paypal.com/no/webapps/mpp/merchant-fees
    case "Poland":
    // See: https://www.paypal.com/pl/webapps/mpp/merchant-fees
    case "Russia":
    // See: https://www.paypal.com/ru/webapps/mpp/merchant-fees
    case "South Korea":
    // See: https://www.paypal.com/kr/webapps/mpp/merchant-fees
    case "Sweden":
    // See: https://www.paypal.com/se/webapps/mpp/merchant-fees
    case "Switzerland":
    // See: https://www.paypal.com/ch/webapps/mpp/merchant-fees
    case "Taiwan":
    // See: https://www.paypal.com/tw/webapps/mpp/merchant-fees
    case "Tailand":
    // See: https://www.paypal.com/th/webapps/mpp/merchant-fees
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
    case "Spain":
    // https://www.paypal.com/es/webapps/mpp/merchant-fees

    case "Isle Of Man":
    case "Guernsey ":
    case "Jersey ":
    case "United Kingdom":
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

function setPaypalBaseFee(item) {
  country = item.source;

  if (allOtherPPCountry.includes(item.source)) country = "otherCountries";

  switch (country) {
    case "Australia":
      // See: https://www.paypal.com/au/webapps/mpp/merchant-fees
      item.ppBaseFeesRate = 0.026;
      setPaypalFixedFees(item);
      break;

    case "Brazil":
      // See: https://www.paypal.com/br/webapps/mpp/merchant-fees
      item.ppBaseFeesRate = 0.0479;
      setPaypalFixedFees(item);
      break;

    case "China":
    // See: https://www.paypal.com/cn/webapps/mpp/merchant-fees
    case "South Korea":
    // See: https://www.paypal.com/kr/webapps/mpp/merchant-fees
    case "Taiwan":
      // See: https://www.paypal.com/tw/webapps/mpp/merchant-fees
      item.ppBaseFeesRate = 0.0;
      setPaypalFixedFees(item);
      break;

    case "Germany":
      // See: https://www.paypal.com/de/webapps/mpp/merchant-fees
      item.ppBaseFeesRate = 0.0299;
      setPaypalFixedFees(item);
      break;

    case "Hong Kong":
    // See: https://www.paypal.com/hk/webapps/mpp/merchant-fees
    case "Russia":
      // See: https://www.paypal.com/ru/webapps/mpp/merchant-fees
      item.ppBaseFeesRate = 0.039;
      setPaypalFixedFees(item);
      break;

    case "Japan":
      // See: https://www.paypal.com/jp/webapps/mpp/merchant-fees
      item.ppBaseFeesRate = 0.036;
      setPaypalFixedFees(item);
      break;

    case "Mexico":
      // See: https://www.paypal.com/mx/webapps/mpp/merchant-fees
      item.ppBaseFeesRate = 0.0395;
      setPaypalFixedFees(item);
      break;

    case "Thailand":
      // See: https://www.paypal.com/th/webapps/mpp/merchant-fees
      if (item.destination == item.source) {
        item.ppBaseFeesRate = 0.039;
      } else {
        item.ppBaseFeesRate = 0.044;
      }
      setPaypalFixedFees(item);
      break;

    case "United States":
      // See: https://www.paypal.com/us/webapps/mpp/merchant-fees
      item.ppBaseFeesRate = 0.0349;
      setPaypalFixedFees(item);
      break;

    case "Canada":
    // See: https://www.paypal.com/ca/webapps/mpp/merchant-fees
    case "Poland":
    // https://www.paypal.com/pl/webapps/mpp/merchant-fees
    case "Portugal":
    // https://www.paypal.com/pt/webapps/mpp/merchant-fees

    case "Spain":
    // https://www.paypal.com/es/webapps/mpp/merchant-fees

    case "Isle Of Man":
    case "Guernsey ":
    case "Jersey ":
    case "United Kingdom":
    // https://www.paypal.com/es/webapps/mpp/merchant-fees

    case "France":
    case "French Guiana":
    case "Guadeloupe":
    case "Martinique":
    case "Reunion":
      // See: https://www.paypal.com/fr/webapps/mpp/merchant-fees
      item.ppBaseFeesRate = 0.029;
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
    case "Israel":
    // See: https://www.paypal.com/il/webapps/mpp/merchant-fees
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
    case "Switzerland":
    // See: https://www.paypal.com/ch/webapps/mpp/merchant-fees

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
      item.ppBaseFeesRate = 0.034;
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
        item.ppBaseFeesRate = 0.054;
      } else if (["Malaysia", "Singapore"].includes(item.destination)) {
        // MY & SG
        item.ppBaseFeesRate = 0.039;
      } else if (item.destination == "Morocco") {
        //MA
        item.ppBaseFeesRate = 0.044;
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
        item.ppBaseFeesRate = 0.049;
      } else if (allOtherPPCountry.includes(item.destination)) {
        //All other markets
        item.ppBaseFeesRate = 0.034;
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
            item.ppBaseFeesRate = 0.0469;
          } else {
            //All other markets
            item.ppBaseFeesRate = 0.0539;
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
          item.ppBaseFeesRate = 0.054;
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
          item.ppBaseFeesRate = 0.049;
        } else if (["Croatia", "Iceland", "Monaco"].includes(item.source)) {
          //HR, IS, & MC
          if (eeaCountries.includes(item.destination)) {
            //EEA
            item.ppBaseFeesRate = 0.034;
          } else if (ukCountries.includes(item.destination)) {
            //UK
            item.ppBaseFeesRate = 0.0469;
          } else {
            //All other markets
            item.ppBaseFeesRate = 0.0539;
          }
        } else {
          //All other markets
          item.ppBaseFeesRate = 0.044;
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

function setPaypalSupplementFee(item) {
  country = item.source;

  if (allOtherPPCountry.includes(item.source)) country = "otherCountries";

  switch (country) {
    case "Australia":
      // See: https://www.paypal.com/au/webapps/mpp/merchant-fees
      if (item.destination == item.source) {
        item.ppSuppFeesRate = 0.0;
      } else {
        item.ppSuppFeesRate = 0.01;
      }
      break;

    case "Canada":
      // See: https://www.paypal.com/ca/webapps/mpp/merchant-fees
      if (item.destination == item.source) {
        item.ppSuppFeesRate = 0.0;
      } else if (item.destination == "United-States") {
        item.ppSuppFeesRate = 0.008;
      } else {
        item.ppSuppFeesRate = 0.01;
      }
      break;

    case "China":
    // See: https://www.paypal.com/cn/webapps/mpp/merchant-fees
    case "South Korea":
    // See: https://www.paypal.com/kr/webapps/mpp/merchant-fees
    case "Taiwan":
      // See: https://www.paypal.com/tw/webapps/mpp/merchant-fees
      if (item.destination == item.source) {
        item.ppSuppFeesRate = 0.0;
      } else {
        item.ppSuppFeesRate = 0.044;
      }
      break;

    case "United States":
      // See: https://www.paypal.com/us/webapps/mpp/merchant-fees
      if (item.destination == item.source) {
        item.ppSuppFeesRate = 0.0;
      } else {
        item.ppSuppFeesRate = 0.015;
      }
      break;

    case "Brazil":
      // See: https://www.paypal.com/br/webapps/mpp/merchant-fees
      if (item.destination == item.source) {
        item.ppSuppFeesRate = 0.0;
      } else {
        item.ppSuppFeesRate = 0.0161;
      }
      break;

    case "Hong Kong":
    // See: https://www.paypal.com/hk/webapps/mpp/merchant-fees
    case "Japan":
    // See: https://www.paypal.com/jp/webapps/mpp/merchant-fees
    case "Mexico":
      // See: https://www.paypal.com/mx/webapps/mpp/merchant-fees
      if (item.destination == item.source) {
        item.ppSuppFeesRate = 0.0;
      } else {
        item.ppSuppFeesRate = 0.005;
      }
      break;

    case "Israel":
      // See: https://www.paypal.com/il/webapps/mpp/merchant-fees
      if (item.destination == item.source) {
        item.ppSuppFeesRate = 0.0;
      } else if (
        item.destination == "Canada" ||
        europeI.includes(item.destination) ||
        northernEurope.includes(item.destination) ||
        item.destination == "United States"
      ) {
        item.ppSuppFeesRate = 0.01;
      } else {
        item.ppSuppFeesRate = 0.02;
      }
      break;

    case "Ireland":
      // See: https://www.paypal.com/ie/webapps/mpp/merchant-fees
      if (item.destination == item.source) {
        item.ppSuppFeesRate = 0.0;
      } else if (
        europeI.includes(item.destination) ||
        northernEurope.includes(item.destination)
      ) {
        item.ppSuppFeesRate = 0.05;
      } else {
        item.ppSuppFeesRate = 0.02;
      }
      break;

    case "Thailand":
      // See: https://www.paypal.com/th/webapps/mpp/merchant-fees
      item.ppSuppFeesRate = 0.0;

    case "Russia":
      // See: https://www.paypal.com/ru/webapps/mpp/merchant-fees
      if (item.destination == item.source) {
        item.ppSuppFeesRate = 0.0;
      } else if (
        item.destination == "Canada" ||
        item.destination == "United States" ||
        europeI.includes(item.destination)
      ) {
        item.ppSuppFeesRate = 0.005;
      } else if (europeII.includes(item.destination)) {
        item.ppSuppFeesRate = 0.01;
      } else if (northernEurope.includes(item.destination)) {
        item.ppSuppFeesRate = 0.004;
      } else {
        item.ppSuppFeesRate = 0.015;
      }
      break;

    case "Switzerland":
      // See: https://www.paypal.com/ch/webapps/mpp/merchant-fees
      if (item.destination == item.source) {
        item.ppSuppFeesRate = 0.0;
      } else if (
        eeaCountries.includes(item.destination) ||
        ukCountries.includes(item.destination)
      ) {
        item.ppSuppFeesRate = 0.0129;
      } else {
        item.ppSuppFeesRate = 0.0199;
      }
      break;

    case "Isle Of Man":
    case "Guernsey ":
    case "Jersey ":
    case "United Kingdom":
      // https://www.paypal.com/es/webapps/mpp/merchant-fees
      if (item.destination == item.source) {
        item.ppSuppFeesRate = 0.0;
      } else if (eeaCountries.includes(item.destination)) {
        item.ppSuppFeesRate = 0.0129;
      } else {
        item.ppSuppFeesRate = 0.0199;
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
        item.ppSuppFeesRate = 0.0;
      } else if (ukCountries.includes(item.destination)) {
        item.ppSuppFeesRate = 0.0129;
      } else {
        item.ppSuppFeesRate = 0.0199;
      }
      break;

    case "otherCountries":
      if (eeaCountries.includes(item.destination)) {
        item.ppSuppFeesRate = 0.0129;
      } else {
        item.ppSuppFeesRate = 0.0;
      }
      break;

    default:
      alert(
        "Selected country not supported. Please file a bug, this shouldn't happen."
      );
      item.ppSuppFeesRate = 0.0;
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
    item.ppBaseFeesRate + item.ppSuppFeesRate;

  document.getElementById("ppBasePerc").innerHTML = item.ppBaseFeesRate;

  document.getElementById("ppSupPerc").innerHTML = item.ppSuppFeesRate;

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

  if (
    allOtherPPCountry.includes(document.getElementById("ddlSource").value) ||
    ["Mexico", "Russia"].includes(document.getElementById("ddlSource").value)
  ) {
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
    ppSuppFeesRate: 0.0,
    taxes: 0.0,
    taxRate: 0.0,
  };

  console.log("Item Price: %f\n", item.itemPrice);
  console.log("Shipping Price: %f\n", item.shippingPrice);

  console.log("Source: %s\n", item.source);
  console.log("Destination: %s\n", item.destination);

  setTaxes(item);

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

  setPaypalBaseFee(item);
  console.log("Paypal Fee Rate: %f\n", item.ppBaseFeesRate);
  console.log("Paypal Fixed Fee: %f\n", item.ppFixedFees);
  setPaypalSupplementFee(item);
  console.log("Supplemental Paypal Fee Rate: %f\n", item.ppSuppFeesRate);

  console.log("Paypal %: %f\n", item.ppBaseFeesRate + item.ppSuppFeesRate);
  item.paypalFee =
    (item.itemPrice + item.shippingPrice + item.taxes) *
      (item.ppBaseFeesRate + item.ppSuppFeesRate) +
    item.ppFixedFees;
  console.log("Paypel Fees: %f\n", item.paypalFee);

  fillBreakdown(item);
}
