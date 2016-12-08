$( document ).ready(function(){
  var thermostat = new Thermostat();
  var updateDisplay = function() {
    $('#display').text(thermostat.degrees);
  };
  updateDisplay();

  $('#temp-up').click(function() {
    thermostat.increase();
    updateDisplay();
  });

});
