
var Thermostat = function() {
  this.degrees = 20;
  this.powerSaving = true;
};

Thermostat.prototype.increase = function() {
  const POWER_SAVING_MAXIMUM_TEMPERATURE = 25;
  if (this.degrees >= POWER_SAVING_MAXIMUM_TEMPERATURE) {
    throw new Error("Power saving on. Maximum temperature reached.");
  }
  this.degrees += 1;
};

Thermostat.prototype.decrease = function() {
  const MINIMUM_TEMPERATURE = 10;
  if (this.degrees <= MINIMUM_TEMPERATURE) {
    throw new Error("Temperature cannot be decreased any further.");
  }
  this.degrees -= 1;
};

Thermostat.prototype.reset = function(){
  this.degrees = 20;
};
