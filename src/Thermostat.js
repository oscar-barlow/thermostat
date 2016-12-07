var Thermostat = function(){
  this.DEFAULT_TEMPERATURE = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.LOW_ENERGY_USAGE_LIMIT = 18
  this.MEDIUM_ENERGY_USAGE_LIMIT = 25;
  this.POWER_SAVING_MAXIMUM = 25;
  this.ABSOLUTE_MAXIMUM = 32;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.isPowerSaving = true;
};

Thermostat.prototype.isMaxTemperature = function(){
  if (this.isPowerSaving) {
    return this.temperature < this.POWER_SAVING_MAXIMUM;
  } else {
    return this.temperature < this.ABSOLUTE_MAXIMUM;
  }

};

Thermostat.prototype.up = function(){
  if (this.isMaxTemperature()){
    this.temperature += 1;
  }
};

Thermostat.prototype.down = function(){
  if (this.temperature !== this.MINIMUM_TEMPERATURE) {
    this.temperature -= 1;
  };
};

Thermostat.prototype.reset = function(){
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function(){
  if (this.temperature < this.LOW_ENERGY_USAGE_LIMIT){
    return "low-usage";
  } else if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT){
    return "medium-usage";
  } else {
    return "high-usage";
  }
};

Thermostat.prototype.autoRegulate = function(){
  if (this.isPowerSaving && this.temperature > this.POWER_SAVING_MAXIMUM){
    this.temperature = this.POWER_SAVING_MAXIMUM;
  }
};

Thermostat.prototype.changePowerSavingMode = function(){
  this.isPowerSaving = !this.isPowerSaving;
  this.autoRegulate();
};
