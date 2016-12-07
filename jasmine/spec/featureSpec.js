'use strict';

describe("Feature Test", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should initialize at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("should increase temperature with up function", function(){
    thermostat.up();
    expect(thermostat.up()).toEqual(22);
  });

});
