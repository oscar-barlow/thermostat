
var Thermostat = function() {
  this.degrees = 20;
  this.powerSaving = true;
};

Thermostat.prototype.increase = function() {
  this.degrees += 1;
};

Thermostat.prototype.decrease = function(value) {
  const MINIMUM_TEMPERATURE = 10;
  if ((this.degrees - value) < MINIMUM_TEMPERATURE) {
    throw new Error("Temperature cannot be decreased any further.");
  } else {
    this.degrees -= value;
  }
};

Thermostat.prototype.reset = function(){
  this.degrees = 20;
};
