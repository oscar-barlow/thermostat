
var Thermostat = function() {
  this.degrees = 20;
};

Thermostat.prototype.increase = function(value) {
  this.degrees += value;
};

Thermostat.prototype.decrease = function(value) {
  const MINIMUM_TEMPERATURE = 10;
  if ((this.degrees - value) < MINIMUM_TEMPERATURE) {
    throw new Error("Temperature cannot be decreased any further.");
  } else {
    this.degrees -= value;
  }
};
