
var Thermostat = function() {
  this.degrees = 20;
  this.powerSaving = true;
  this.usage = "medium-usage";
};

Thermostat.prototype.increase = function() {
  const MAXIMUM_TEMPERATURE = 32;
  const POWER_SAVING_MAXIMUM_TEMPERATURE = 25;
  if (this.degrees >= POWER_SAVING_MAXIMUM_TEMPERATURE && this.powerSaving === true) {
    throw new Error("Power saving on. Maximum temperature reached.");
  }
  if (this.degrees >= MAXIMUM_TEMPERATURE && this.powerSaving === false) {
    throw new Error("Power saving off. Maximum temperature reached.")
  }
  this.degrees += 1;
  if (this.degrees > 25) {
    this.usage = "high-usage";
  }
  if (this.degrees > 17 && this.degrees <= 25) {
    this.usage = "medium-usage";
  }
};

Thermostat.prototype.decrease = function() {
  const MINIMUM_TEMPERATURE = 10;
  if (this.degrees <= MINIMUM_TEMPERATURE) {
    throw new Error("Temperature cannot be decreased any further.");
  }
  this.degrees -= 1;
  if (this.degrees < 18) {
    this.usage = "low-usage";
  }
};

Thermostat.prototype.reset = function(){
  this.degrees = 20;
};

Thermostat.prototype.setPowerSaving = function(boolean) {
  this.powerSaving = boolean;
}
