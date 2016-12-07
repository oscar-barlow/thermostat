$(document).ready(function() {
  var thermostat = new Thermostat
  $("#temp-display").text(thermostat.temperature);
  $(document).click(function(){
    $("#temp-display").text(thermostat.temperature);
    $('#energy-usage').text("Energy Usage: " + thermostat.energyUsage());
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
    $('#power-saving').text("Power Saving "+message);
  })

});
