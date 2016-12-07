$(document).ready(function() {
  var thermostat = new Thermostat
  $("#temp-display").text(thermostat.temperature);
  $(document).click(function(){
    $("#temp-display").text(thermostat.temperature);
  })
  $("#regulation-up").click(function() {
    thermostat.up();
  });
  $("#regulation-down").click(function() {
    thermostat.down();
  })
});
