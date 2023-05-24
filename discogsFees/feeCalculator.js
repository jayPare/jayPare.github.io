let csv = "";
var xmlhttp;

function showState() {
  if (document.getElementById("destination").value == "United States") {
    document.getElementById("zipCodeFormGroup").classList.remove("d-none");
    document.getElementById("zipCode").required = true;
  } else {
    document.getElementById("zipCodeFormGroup").classList.add("d-none");
    document.getElementById("zipCode").required = false;
  }
}

function usTaxes(item) {
  var taxes = $.csv.toObjects(csv);
  console.log(taxes);
  console.log(taxes[0]["Postcode / ZIP"]);

  var result = taxes.find((taxes) => {
    return taxes["Postcode / ZIP"] === item.zipCode.toString();
  });

  console.log(result);

  item.taxRate = result["Rate %"] / 100;
  console.log(item.taxRate);
}

function validate() {
  var taxes = $.csv.toObjects(csv);
  var form = document.getElementById("formCalculate");

  if (document.getElementById("destination").value == "United States") {
    zipCode = document.getElementById("zipCode").value;

    var result = taxes.find((taxes) => {
      return taxes["Postcode / ZIP"] === zipCode.toString();
    });

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
      item.taxRate = 0.2;
      break;

    case "Belgium":
      item.taxRate = 0.21;
      break;

    case "Bulgaria":
      item.taxRate = 0.2;
      break;

    case "Canada":
      item.taxRate = 0.0;
      break;

    case "Croatia":
      item.taxRate = 0.25;
      break;

    case "Cyprus":
      item.taxRate = 0.25;
      break;

    case "Czech Republic":
      item.taxRate = 0.21;
      break;

    case "Denmark":
      item.taxRate = 0.25;
      break;

    case "Estonia":
      item.taxRate = 0.2;
      break;

    case "Finland":
      item.taxRate = 0.24;
      break;

    case "France":
      item.taxRate = 0.2;
      break;

    case "Germany":
      item.taxRate = 0.19;
      break;

    case "Greece":
      item.taxRate = 0.24;
      break;

    case "Hungary":
      item.taxRate = 0.27;
      break;

    case "Ireland":
      item.taxRate = 0.23;
      break;

    case "Italy":
      item.taxRate = 0.22;
      break;

    case "Latvia":
      item.taxRate = 0.21;
      break;

    case "Lithuania":
      item.taxRate = 0.21;
      break;

    case "Luxembourg":
      item.taxRate = 0.16;
      break;

    case "Malta":
      item.taxRate = 0.18;
      break;

    case "Netherlands":
      item.taxRate = 0.21;
      break;

    case "Poland":
      item.taxRate = 0.23;
      break;

    case "Portugal":
      item.taxRate = 0.23;
      break;

    case "Romania":
      item.taxRate = 0.19;
      break;

    case "Slovakia":
      item.taxRate = 0.2;
      break;

    case "Slovenia":
      item.taxRate = 0.22;
      break;

    case "Spain":
      item.taxRate = 0.21;
      break;

    case "Sweden":
      item.taxRate = 0.25;
      break;

    case "United Kingdom":
      item.taxRate = 0.2;
      break;

    case "United States":
      usTaxes(item);
      break;

    default:
      break;
  }

  console.log("Tax Rate: %f\n", item.taxRate);
  console.log("Sup PP: %f\n", item.suppPpFeeRate);

  return (item.itemPrice + item.shippingPrice) * item.taxRate;
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

function setCountryDD() {
  fetch("https://api.ipregistry.co/?key=y63j7gejdjdze6uk")
    .then(function (response) {
      return response.json();
    })
    .then(function (payload) {
      var select = document.querySelector("#destination");
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
      console.log("csv");
    } else {
      alert("Problem retrieving CSV file");
    }
  }
}

function setPpFees(item) {
  switch (item.source) {
    case "Canada":
      item.ppFeeRate = 0.029;
      item.ppFixedFees = 0.3;
      break;

    case "United States":
      item.ppFeeRate = 0.0349;
      item.ppFixedFees = 0.3;
      break;

    default:
      break;
  }
}

function setSupFees(item) {
  switch (item.source) {
    case "Canada":
      if (item.destination == "Canada") {
        item.suppPpFeeRate = 0.0;
      } else if (item.destination == "United-States") {
        item.suppPpFeeRate = 0.008;
      } else {
        item.suppPpFeeRate = 0.01;
      }
      break;

    case "United States":
      if (item.destination == "United-States") {
        item.suppPpFeeRate = 0.0;
      } else {
        item.suppPpFeeRate = 0.015;
      }
      break;

    default:
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

function calculateFees() {
  if (!validate()) return;

  console.log("Calculating.");

  var item = {
    itemPrice: Number(document.getElementById("inputItemPrice").value),
    shippingPrice: Number(document.getElementById("inputShippingPrice").value),
    source: document.getElementById("ddlSource").value,
    destination: document.getElementById("destination").value,
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

  console.log("Destination: %s\n", item.destination);

  item.taxes = calculateTax(item);

  console.log("Taxe Rate: %f\n", item.taxRate);
  console.log("Taxes: %f\n", item.taxes);
  console.log("Supplemental Paypal Fee Rate: %f\n", item.suppPpFeeRate);

  item.discogsTotal = item.itemPrice + item.shippingPrice;
  item.discogsFee = item.discogsTotal * 0.09;
  item.discogsFee = item.discogsFee > 0.15 ? item.discogsFee : 0.15;
  console.log("Discogs Fees: %f\n", item.discogsFee);

  console.log(
    "\n\n\nPurchase total: %f\n",
    item.itemPrice + item.shippingPrice + item.taxes
  );

  setPpFees(item);
  console.log("\n\n\nPaypal %: %f\n", item.ppFeeRate + item.suppPpFeeRate);
  item.paypalFee =
    (item.itemPrice + item.shippingPrice + item.taxes) *
      (item.ppFeeRate + item.suppPpFeeRate) +
    item.ppFixedFees;
  console.log("Paypel Fees: %f\n", item.paypalFee);

  fillBreakdown(item);
}
