////////////////////////////// Lone wolf page ////////////////////////////////////

$('#lone-wolf-total-section').hide();

var loneWolfSelectedPrice;
var loneWolfTotal;
var loneWolfMonthly = true;

$('.lone-wolf-card').click(function(e) {
  e.preventDefault();
  loneWolfSelectedPrice = $(this).data('value');
  $('.lone-wolf-frequency').removeAttr('disabled');

  displayLoneWolfTotal(loneWolfSelectedPrice, loneWolfMonthly);

  $('#lone-wolf-total-section').show();
});

$('.lone-wolf-frequency').click(function(e) {
  e.preventDefault();
  var btnType = $(this).text().toLowerCase();

  if (btnType === 'annually') {
    loneWolfMonthly = false;
    displayLoneWolfTotal(loneWolfSelectedPrice, loneWolfMonthly);
  } else {
    loneWolfMonthly = true;
    displayLoneWolfTotal(loneWolfSelectedPrice, loneWolfMonthly);
  }

});

function displayLoneWolfTotal(price, type) {

  if (loneWolfMonthly == true) {
    loneWolfTotal = price;
    $("#lone-wolf-plan-type").html("Monthly");
  } else {
    loneWolfTotal= price * 12;
    $("#lone-wolf-plan-type").html("Annual");
  }

  $("#lone-wolf-plan-total").html("Total: £" + loneWolfTotal);
}

////////////////////////////// Chatterbox page ////////////////////////////////////

var chatterboxSelectedGB;
var chatterboxSelectedMin;
var chatterboxTotal;
var chatterboxMonthly = true;

$('#chatterbox-total-section').hide();

$(".chatterbox-gb").click(function(e) {
  e.preventDefault();
  chatterboxSelectedGB = $(this).data("price");
  $('.chatterbox-min').removeAttr('disabled');

  if (chatterboxSelectedMin) {
    displayChatterboxTotal(chatterboxSelectedGB, chatterboxSelectedMin, chatterboxMonthly);
  }
});

$(".chatterbox-min").click(function(e) {
  e.preventDefault();
  chatterboxSelectedMin = $(this).data("price");
  $('.chatterbox-frequency').removeAttr('disabled');

  displayChatterboxTotal(chatterboxSelectedGB, chatterboxSelectedMin, chatterboxMonthly);

  $('#chatterbox-total-section').show();

});

$('.chatterbox-frequency').click(function(e) {
  e.preventDefault();

  var btnType = $(this).text().toLowerCase();

  if (btnType === 'annually') {
    chatterboxMonthly = false;
    displayChatterboxTotal(chatterboxSelectedGB, chatterboxSelectedMin, chatterboxMonthly);
  } else {
    chatterboxMonthly = true;
    displayChatterboxTotal(chatterboxSelectedGB, chatterboxSelectedMin, chatterboxMonthly);
  }
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
}

////////////////////////////// Family page ////////////////////////////////////

var familySimNumber;
var pricesToDisplay = [];
var familySelectedPrice;
var familyTotal;
var familyMonthly = true;
var priceTiers = [
  [14, 20, 30, 40],
  [21.2, 32, 50, 68],
  [28.4, 44, 70, 96],
  [35.6, 56, 90, 124],
  [42.8, 68, 110, 152]
];

$('.family-sim-number').click(function(e){
  e.preventDefault();
  familySimNumber = $(this).data('price');
  console.log(familySimNumber);

  // pricesToDisplay = priceTiers.slice(0).splice(0, 5)[familySimNumber - 1];
  pricesToDisplay = priceTiers.slice(0)[familySimNumber - 1];

  pricesToDisplay.forEach(function(value, index) {
    var price = $('.family-gb-price')[index];
    $(price).html('£' + value.toFixed(2));

    var gbPrice = $(".family-gb")[index];
    $(gbPrice).attr("data-price", value)
  });
});






// $(".family-sim-no").click(function() {
//   familyTotalDisplay.html("");
//   console.log(this.value);
//   familySimCount = this.value;
//   console.log("Number of sims: " + familySimCount);
//
//   pricesToDisplay = priceTiers.slice(0).splice(0, 5)[familySimCount - 1];
//
//   console.log("We will display: " + pricesToDisplay);
//
//   pricesToDisplay.forEach(function(value, i) {
//     let price = $(".family-price-label")[i];
//     $(price).html("£" + value.toFixed(2));
//
//     let priceData = $(".family-plan")[i];
//     $(priceData).attr("data-value", value);
//   });
// });
//
// $(".family-plan").click(function(e) {
//   e.preventDefault();
//
//   familyPlanAmount =
//     $(this)
//       .find("span")
//       .text()
//       .slidace(1, 5) * 1;
//
//   if (frequencyMonthly) {
//     familyTotalDisplay.html("£" + familyPlanAmount);
//   } else {
//     familyTotalDisplay.html("£" + familyPlanAmount * 12);
//   }
// });
//
// $(".family-frequency").click(function(e) {
//   e.preventDefault();
//   console.log("The frequency is " + $(this).data("value"));
//   if ($(this).data("value") === "annual") {
//     frequencyMonthly = false;
//     familyTotal = calculateTotal(familyPlanAmount, 12);
//     console.log("Annual is " + familyTotal);
//   } else {
//     frequencyMonthly = true;
//     familyTotal = familyPlanAmount;
//     console.log("Monthly is " + familyTotal);
//   }
//
//   familyTotalDisplay.html("£" + familyTotal);
// });
// });
