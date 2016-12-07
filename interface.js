
$(document).ready(function() {
  var thermostat = new Thermostat
  var PSupdate = function(){
    $('#power-saving-display').text(function(){
      if (thermostat.isPowerSaving){
        return "Power saving mode is ON";
      } else {
        return "Power saving mode is OFF";
      }
    });
  }
  $("#temp-display").text(thermostat.temperature);
  $(document).click(function(){
    $("#temp-display").text(thermostat.temperature);
    $('#energy-usage').text("Energy Usage: " + thermostat.energyUsage());
    PSupdate();
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


});
