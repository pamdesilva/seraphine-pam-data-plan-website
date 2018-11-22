////////////////////////////// Lone wolf page ////////////////////////////////////

var loneWolfSelectedPrice;
var loneWolfSelectedGb;
var loneWolfTotal;
var loneWolfMonthly = true;

$(".lone-wolf-card").click(function(e) {
  e.preventDefault();
  loneWolfSelectedPrice = $(this).data("value");
  loneWolfSelectedGb = $(this).find("p").text();

  $('.card-body').removeClass('lone-wolf-active-card');
  $(this).find('.card-body').addClass("lone-wolf-active-card");

  displayLoneWolfTotal(loneWolfSelectedPrice, loneWolfMonthly);
  $("#lone-wolf-frequency-section")
    .removeClass("hide")
    .addClass("show");
  $("#lone-wolf-total-section")
    .removeClass("hide")
    .addClass("show");
});

$(".lone-wolf-frequency").click(function(e) {
  e.preventDefault();
  var btnType = $(this)
    .text()
    .toLowerCase();

  if (btnType === "annually") {
    loneWolfMonthly = false;
    $(this).addClass('frequency-active');
    $('#frequency-monthly').removeClass('frequency-active');
  } else {
    loneWolfMonthly = true;
    $('#frequency-monthly').addClass('frequency-active');
    $('#frequency-annual').removeClass('frequency-active');
  }

  displayLoneWolfTotal(loneWolfSelectedPrice, loneWolfMonthly);
});

function displayLoneWolfTotal(price, type) {
  if (loneWolfMonthly == true) {
    loneWolfTotal = price;
    $("#lone-wolf-plan-type").html("Monthly");
  } else {
    loneWolfTotal = price * 12;
    $("#lone-wolf-plan-type").html("Annual");
  }

  $("#lone-wolf-summary-gb").html(loneWolfSelectedGb);
  $("#lone-wolf-plan-total").html("Total: £" + loneWolfTotal);
}

////////////////////////////// Chatterbox page ////////////////////////////////////

var chatterboxSelectedGB;
var chatterboxGbNum;
var chatterboxSelectedMin;
var chatterboxMinNum;
var chatterboxTotal;
var chatterboxMonthly = true;

$(".chatterbox-gb").click(function(e) {
  e.preventDefault();
  $("#chatterbox-mins-section")
    .removeClass("hide")
    .addClass("show");
  chatterboxSelectedGB = $(this).data("price");
  chatterboxGbNum = $(this)
    .find("p")
    .text();
  console.log(chatterboxGbNum);
  $(".chatterbox-min").removeAttr("disabled");

  if (chatterboxSelectedMin) {
    displayChatterboxTotal(
      chatterboxSelectedGB,
      chatterboxSelectedMin,
      chatterboxMonthly
    );
  }
});

$(".chatterbox-min").click(function(e) {
  e.preventDefault();
  $("#chatterbox-frequency-section")
    .removeClass("hide")
    .addClass("show");
  $("#chatterbox-total-section")
    .removeClass("hide")
    .addClass("show");
  chatterboxSelectedMin = $(this).data("price");
  chatterboxMinNum = $(this)
    .find("p")
    .text();

  displayChatterboxTotal(
    chatterboxSelectedGB,
    chatterboxSelectedMin,
    chatterboxMonthly
  );

  $("#chatterbox-total-section").show();
});

$(".chatterbox-frequency").click(function(e) {
  e.preventDefault();

  var btnType = $(this)
    .text()
    .toLowerCase();

  if (btnType === "annually") {
    chatterboxMonthly = false;
  } else {
    chatterboxMonthly = true;
  }

  displayChatterboxTotal(
    chatterboxSelectedGB,
    chatterboxSelectedMin,
    chatterboxMonthly
  );
});

function displayChatterboxTotal(gb, min, type) {
  var total = gb + min;

  if (chatterboxMonthly == true) {
    chatterboxTotal = total;
    $("#chatterbox-plan-type").html("Monthly");
  } else {
    chatterboxTotal = total * 12;
    $("#chatterbox-plan-type").html("Annual");
  }

  $("#chatterbox-plan-total").html("Total: £" + chatterboxTotal);
  $("#chatterbox-summary-min").html(
    chatterboxMinNum + "  –  £" + chatterboxSelectedMin
  );
  $("#chatterbox-summary-gb").html(
    chatterboxGbNum + "  –  £" + chatterboxSelectedGB
  );
}

////////////////////////////// Family page ////////////////////////////////////

var familySimNumber;
var pricesToDisplay = [];
var familySelectedPrice;
var familySelectedGb;
var familyTotal;
var familyMonthly = true;
var priceTiers = [
  [14, 20, 30, 40],
  [21.2, 32, 50, 68],
  [28.4, 44, 70, 96],
  [35.6, 56, 90, 124],
  [42.8, 68, 110, 152]
];

$(".family-sim-number").click(function(e) {
  e.preventDefault();
  familySimNumber = $(this).data("price");

  $("#family-gb-section")
    .removeClass("hide")
    .addClass("show");

  pricesToDisplay = priceTiers.slice(0)[familySimNumber - 1];

  pricesToDisplay.forEach(function(value, index) {
    var price = $(".family-gb-price")[index];
    $(price).html("£" + value.toFixed(2));
  });

  if (familySelectedPrice) {
    familySelectedPrice = 0;
    familySelectedGb;
    $("#family-plan-gb").hide();
    displayFamilyTotal(familySelectedPrice, familyMonthly, familySelectedGb);
    $("#buy-btn").hide();
    $("#family-plan-type").hide();
  }
});

$(".family-gb").click(function(e) {
  e.preventDefault();
  $("#family-frequency-section")
    .removeClass("hide")
    .addClass("show");

  familySelectedPrice =
    $(this)
      .find("h5")
      .text()
      .slice(1, 5) * 1;

  familySelectedGb = $(this)
    .find("p")
    .text();

  displayFamilyTotal(familySelectedPrice, familyMonthly, familySelectedGb);
  $("#buy-btn").show();
  $("#family-plan-gb").show();
  $("#family-plan-type").show();
  $("#family-total-section")
    .removeClass("hide")
    .addClass("show");
});

$(".family-frequency").click(function(e) {
  e.preventDefault();
  var btnType = $(this)
    .text()
    .toLowerCase();

  if (btnType === "monthly") {
    familyMonthly = true;
  } else {
    familyMonthly = false;
  }

  displayFamilyTotal(familySelectedPrice, familyMonthly, familySelectedGb);
});

function displayFamilyTotal(price, type, gb) {
  if (familyMonthly == true) {
    familyTotal = price.toFixed(2);
    $("#family-plan-type").html("Monthly plan");
  } else {
    familyTotal = (price * 12).toFixed(2);
    $("#family-plan-type").html("Annual plan");
  }

  if (familySimNumber == 1) {
    $("#family-plan-gb").html("1 sim card – " + gb);
  } else {
    $("#family-plan-gb").html(familySimNumber + " sim cards – " + gb + " each");
  }

  $("#family-plan-total").html("Total: £" + familyTotal);
}
