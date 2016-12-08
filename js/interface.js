$( document ).ready(function(){
  var thermostat = new Thermostat();

  var updateDisplay = function() {
    $('#display').text(thermostat.degrees);
  };

  var showOn = function(button) {
    $(button).addClass('blue');
  };
  
  showOn('#power-saving-on');
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
    showOn('#power-saving-on');
  });
});
