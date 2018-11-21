
  $('#lone-wolf-total-section').hide();


  var loneWolfSelectedPrice;
  var loneWolfTotal;
  var monthly = true;

  $('.lone-wolf-card').click(function(e){
    e.preventDefault();
    loneWolfSelectedPrice = $(this).data('value');

    if(monthly == true) {
      loneWolfTotal = loneWolfSelectedPrice;
    } else {
      loneWolfTotal = loneWolfSelectedPrice * 12;
    }

    $("#lone-wolf-plan-total").html("Total: £" + loneWolfTotal);
    $('#lone-wolf-total-section').show();
  });

  $('.lone-wolf-frequency').click(function(e){
    e.preventDefault();

    var btnType = $(this).text().toLowerCase();

    if (btnType === 'annually') {
      monthly = false;
      loneWolfTotal = loneWolfSelectedPrice * 12;
    }
     else {
      loneWolfTotal = loneWolfSelectedPrice;
    }
    $("#lone-wolf-plan-total").html("Total: £" + loneWolfTotal);

  });
