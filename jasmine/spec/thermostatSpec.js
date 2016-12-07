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

});
