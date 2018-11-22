////////////////////////////// Lone wolf page ////////////////////////////////////

var loneWolfSelectedPrice;
var loneWolfTotal;
var loneWolfMonthly = true;

$('.lone-wolf-card').click(function(e) {
  e.preventDefault();
  loneWolfSelectedPrice = $(this).data('value');

  displayLoneWolfTotal(loneWolfSelectedPrice, loneWolfMonthly);
  $('#lone-wolf-frequency-section').removeClass('hide').addClass('show');
  $('#lone-wolf-total-section').removeClass('hide').addClass('show');
});

$('.lone-wolf-frequency').click(function(e) {
  e.preventDefault();
  var btnType = $(this).text().toLowerCase();

  if (btnType === 'annually') {
    loneWolfMonthly = false;
  } else {
    loneWolfMonthly = true;
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

  $("#lone-wolf-plan-total").html("Total: £" + loneWolfTotal);
}

////////////////////////////// Chatterbox page ////////////////////////////////////

var chatterboxSelectedGB;
var chatterboxSelectedMin;
var chatterboxTotal;
var chatterboxMonthly = true;

$(".chatterbox-gb").click(function(e) {
  e.preventDefault();
  $('#chatterbox-mins-section').removeClass('hide').addClass('show');
  chatterboxSelectedGB = $(this).data("price");
  $('.chatterbox-min').removeAttr('disabled');

  if (chatterboxSelectedMin) {
    displayChatterboxTotal(chatterboxSelectedGB, chatterboxSelectedMin, chatterboxMonthly);
  }
});

$(".chatterbox-min").click(function(e) {
  e.preventDefault();
  $('#chatterbox-frequency-section').removeClass('hide').addClass('show');
  $('#chatterbox-total-section').removeClass('hide').addClass('show');
  chatterboxSelectedMin = $(this).data("price");

  displayChatterboxTotal(chatterboxSelectedGB, chatterboxSelectedMin, chatterboxMonthly);

  $('#chatterbox-total-section').show();

});

$('.chatterbox-frequency').click(function(e) {
  e.preventDefault();

  var btnType = $(this).text().toLowerCase();

  if (btnType === 'annually') {
    chatterboxMonthly = false;
  } else {
    chatterboxMonthly = true;
  }

  displayChatterboxTotal(chatterboxSelectedGB, chatterboxSelectedMin, chatterboxMonthly);
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
var lastClickedPrice;
var priceTiers = [
  [14, 20, 30, 40],
  [21.2, 32, 50, 68],
  [28.4, 44, 70, 96],
  [35.6, 56, 90, 124],
  [42.8, 68, 110, 152]
];

$('.family-sim-number').click(function(e) {
  e.preventDefault();
  familySimNumber = $(this).data('price');

  $('#family-gb-section').removeClass('hide').addClass('show');

  pricesToDisplay = priceTiers.slice(0)[familySimNumber - 1];

  pricesToDisplay.forEach(function(value, index) {
    var price = $('.family-gb-price')[index];
    $(price).html('£' + value.toFixed(2));

    var gbPrice = $(".family-gb")[index];
    $(gbPrice).attr("data-price", value)
  });

  if(familySelectedPrice) {
    console.log($(this).data('price'));
    displayFamilyTotal(familySelectedPrice, familyMonthly);
  }

});

$('.family-gb').click(function(e) {
  e.preventDefault();
  $('#family-frequency-section').removeClass('hide').addClass('show');
  familySelectedPrice = $(this).data("price");
  displayFamilyTotal(familySelectedPrice, familyMonthly);
  $('#family-total-section').removeClass('hide').addClass('show');
});

$('.family-frequency').click(function(e) {
  e.preventDefault();
  var btnType = $(this).text().toLowerCase();

  if (btnType === 'monthly'){
    familyMonthly = true;
  } else {
    familyMonthly = false;
  }

  displayFamilyTotal(familySelectedPrice, familyMonthly);
});


function displayFamilyTotal(price, type) {

  if (familyMonthly == true) {
    familyTotal = price;
    $("#family-plan-type").html("Monthly");
  } else {
    familyTotal = price * 12;
    $("#family-plan-type").html("Annual");
  }

  $("#family-plan-total").html("Total: £" + familyTotal);
}
