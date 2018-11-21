
////////////////////////////// Lone wolf page ////////////////////////////////////

  $('#lone-wolf-total-section').hide();

  var loneWolfSelectedPrice;
  var loneWolfTotal;
  var loneWolfMonthly = true;
  var loneWolfPlanType;

  $('.lone-wolf-card').click(function(e){
    e.preventDefault();
    loneWolfSelectedPrice = $(this).data('value');

    if(loneWolfMonthly == true) {
      loneWolfTotal = loneWolfSelectedPrice;
      loneWolfPlanType = "monthly";
    } else {
      loneWolfTotal = loneWolfSelectedPrice * 12;
      loneWolfPlanType = "annual";
    }

    $('.lone-wolf-frequency').removeAttr('disabled');
    $("#lone-wolf-plan-total").html("Total: £" + loneWolfTotal);
    $("#lone-wolf-plan-type").html(loneWolfPlanType);
    $('#lone-wolf-total-section').show();
  });

  $('.lone-wolf-frequency').click(function(e){
    e.preventDefault();

    var btnType = $(this).text().toLowerCase();

    if (btnType === 'annually') {
      loneWolfMonthly = false;
      loneWolfTotal = loneWolfSelectedPrice * 12;
      loneWolfPlanType = "annual";
    }
     else {
      loneWolfTotal = loneWolfSelectedPrice;
      loneWolfPlanType = "monthly";
    }
    $("#lone-wolf-plan-total").html("Total: £" + loneWolfTotal);
    $("#lone-wolf-plan-type").html(loneWolfPlanType);

  });


////////////////////////////// Chatterbox page ////////////////////////////////////

var chatterboxSelectedGB;
var chatterboxSelectedMin;
var chattterboxPlanType;
var chatterboxTotal;
var chatterboxMonthly = true;

$('#chatterbox-total-section').hide();


$(".chatterbox-gb").click(function(e){
  e.preventDefault();
  chatterboxSelectedGB = $(this).data("price");
  $('.chatterbox-min').removeAttr('disabled');
});


$(".chatterbox-min").click(function(e){
  e.preventDefault();
  chatterboxSelectedMin = $(this).data("price");
  $('.chatterbox-frequency').removeAttr('disabled');

  var total = chatterboxSelectedMin + chatterboxSelectedGB;

  console.log(total);

  if(chatterboxMonthly == true) {
    chatterboxTotal = total;
    chatterboxPlanType = "monthly";
  } else {
    chatterboxTotal = total * 12;
    chatterboxPlanType = "annual";
  }

  console.log('Total: ' + chatterboxTotal);

  $("#chatterbox-plan-total").html("Total: £" + chatterboxTotal);
  $('#chatterbox-total-section').show();

});

// function calculateChatterboxTotal(gb, min, type) {
//   var total = gb + min;
//
//   if(type = "annual") {
//     chatterboxTotal = total * 12;
//   } else {
//     chatterboxTotal = total;
//   }
//
//
// }
