$( document ).ready(function(){
  var thermostat = new Thermostat();
  $('#display').text(thermostat.degrees);
});
