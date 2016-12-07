var Thermostat = function(){
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSaving = true
};

Thermostat.prototype.isMaxTemperature = function(){
  if (this.powerSaving) {
    return this.temperature < 25;
  } else {
    return this.temperature < 32;
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

  Thermostat.prototype.reset = function(){
    this.temperature = 20;
  }
};
