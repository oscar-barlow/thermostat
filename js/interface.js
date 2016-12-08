$( document ).ready(function(){
  var thermostat = new Thermostat();

  $('#display').text(thermostat.degrees);

  $('#temp-up').click(function() {
    thermostat.increase();
    $('#display').text(thermostat.degrees);
  });

});
