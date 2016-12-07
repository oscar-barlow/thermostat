'use strict';

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should initialize with a temperature property set to 20", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("should raise the temperature when up is called", function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it("should decrease the temperature when down is called", function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it("should not be possible to reduce temperature below 10 degrees", function(){
    for (var i = 0; i < 10; i++) {
      thermostat.down();
    }
    expect(function(){thermostat.down();}).toThrowError("Minimum temperature 10 degrees")
  });

});
