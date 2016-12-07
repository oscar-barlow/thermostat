var Thermostat = function() {
  this.degrees = 20;
};

Thermostat.prototype.increase = function(value) {
  this.degrees += value;
};
