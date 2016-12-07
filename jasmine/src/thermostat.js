function Thermostat(){
  this.temperature = 20;
  this.powerSaving = true;
  this.usage = "medium-usage";
};

const MINIMUM_TEMPERATURE = 10;
const POWER_SAVING_MAXIMUM_TEMPERATURE = 25;
const MAXIMUM_TEMPERATURE = 32;
const LOW_USAGE_THRESHOLD = 17;

Thermostat.prototype.up = function(){
  if (this.powerSaving === true && this.temperature >= POWER_SAVING_MAXIMUM_TEMPERATURE ) {
    throw new Error("Power saving on. Max temperature 25 degrees.")
  }
  if (this.temperature >= MAXIMUM_TEMPERATURE ) {
    throw new Error("Maximum temperature reached.")
  }
  this.temperature += 1;
  if (this.temperature > LOW_USAGE_THRESHOLD) {
    this.usage = "medium-usage";
  };
};

Thermostat.prototype.down = function() {
  if (this.temperature <= MINIMUM_TEMPERATURE) {
    throw new Error("Minimum temperature 10 degrees")
  }
  this.temperature -= 1;
  if (this.temperature <= LOW_USAGE_THRESHOLD) {
    this.usage = "low-usage";
  };
};

Thermostat.prototype.setPowerSaving = function(boolean){
  this.powerSaving = boolean;
};

Thermostat.prototype.reset = function(){
  this.temperature = 20;
};
