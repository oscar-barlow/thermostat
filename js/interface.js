$( document ).ready(function(){
  var thermostat = new Thermostat();

  var updateDisplay = function() {
    $('#display').text(thermostat.degrees);
    $('#display').attr('class', thermostat.usage);

    // if (thermostat.usage === 'high-usage') {
    //   // add class red
    //   $('#display').addClass('red');
    // } else if (thermostat.usage === 'low-usage') {
    //   // add class green
    //   $('#display').addClass('green');
    // } else {
    //   $('#display').removeClass('red');
    //   $('#display').removeClass('green');
    //   // remove class red and remove class green
    // }
  };

  var showActive = function(button) {
    $(button).addClass('blue');
  };

  var clearActive = function(button) {
    $(button).removeClass('blue');
  };

  showActive('#power-saving-on');
  updateDisplay();

  $('#temp-up').click(function() {
    thermostat.increase();
    updateDisplay();
  });

  $('#temp-down').click(function() {
    thermostat.decrease();
    updateDisplay();
  });

  $('#power-saving-on').click(function() {
    thermostat.setPowerSaving(true);
    showActive('#power-saving-on');
    clearActive('#power-saving-off')
  });

  $('#power-saving-off').click(function() {
    thermostat.setPowerSaving(false);
    showActive('#power-saving-off');
    clearActive('#power-saving-on');
  });

  $('#reset').click(function(){
    thermostat.reset();
    updateDisplay();
  });

});
