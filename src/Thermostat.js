var Thermostat = function(){
  this.temperature = 20;
};

Thermostat.prototype.up = function(number){
  this.temperature += number
};
