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

  it("should be possible to turn power saving on", function() {
    thermostat.setPowerSavingOn();
    expect(thermostat.powerSaving).toBeTruthy();
  });

  it("should not be possible to increase temperature >25 if power saving is on", function(){
    thermostat.setPowerSavingOn();
    for (var i = 0; i < 5; i++) {
      thermostat.up();
    }
    expect(function(){thermostat.up();}).toThrowError("Power saving on. Max temperature 25 degrees.")
  });

  it("should not be possible to increase temperature > 32 if power saving is off", function(){
    for (var i = 0; i < 12; i++) {
      thermostat.up();
    }
    expect(function(){thermostat.up();}).toThrowError("Maximum temperature reached.")
  });

});
