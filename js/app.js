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
