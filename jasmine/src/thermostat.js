function Thermostat(){
  this.temperature = 20;
};

const MINIMUM_TEMPERATURE = 10;

Thermostat.prototype.up = function(){
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.temperature <= 10) {
    throw new Error("Minimum temperature 10 degrees")
  }
  this.temperature -= 1;
};
