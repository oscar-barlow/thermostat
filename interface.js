
$(document).ready(function() {
  var thermostat = new Thermostat
  $("#temp-display").text(thermostat.temperature);
  $(document).click(function(){
    updateTemperature();
    updatePowerSaving();
  })
  $("#regulation-up").click(function() {
    thermostat.up();
  });
  $("#regulation-down").click(function() {
    thermostat.down();
  })
  jQuery('#reset').click(function(){
    thermostat.reset();
  })
  $('#power-saving').click(function(){
    thermostat.changePowerSavingMode();
    var message;
    if (thermostat.isPowerSaving){
      message = "OFF";
    } else {
      message = "ON";
    }
    $('#power-saving').text("Turn Power Saving "+message);
  })

  function updateTemperature(){
    $("#temp-display").text(thermostat.temperature);
    $('#temp-display').attr('class', thermostat.energyUsage());
  }
  function updatePowerSaving() {
    $('#power-saving-display').text(function(){
      if (thermostat.isPowerSaving){
        return "Power saving mode is ON";
      } else {
        return "Power saving mode is OFF";
      }
    });
  }

});
