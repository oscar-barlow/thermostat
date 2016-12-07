var Thermostat = function(){
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
};

Thermostat.prototype.isMaxTemperature = function(){
  return this.temperature < 25;
}

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
