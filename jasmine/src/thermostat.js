function Thermostat(){
  this.temperature = 20;
};

const MINIMUM_TEMPERATURE = 10;
const POWER_SAVING_MAXIMUM_TEMPERATURE = 25;
const MAXIMUM_TEMPERATURE = 32;

Thermostat.prototype.up = function(){
  if (this.powerSaving === true && this.temperature >= POWER_SAVING_MAXIMUM_TEMPERATURE ) {
    throw new Error("Power saving on. Max temperature 25 degrees.")
  }
  if (this.temperature >= MAXIMUM_TEMPERATURE ) {
    throw new Error("Maximum temperature reached.")
  }
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.temperature <= MINIMUM_TEMPERATURE) {
    throw new Error("Minimum temperature 10 degrees")
  }
  this.temperature -= 1;
};

Thermostat.prototype.setPowerSavingOn = function(){
  this.powerSaving = true;
};
