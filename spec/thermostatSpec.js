'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('it starts on 20 degrees', function() {
    expect(thermostat.degrees).toBe(20);
  });

  it('has a reset function', function() {
    thermostat.reset();
    expect(thermostat.degrees).toBe(20);
  });

  describe('changing temperatures', function() {

    it('can increase temperature', function() {
      thermostat.increase(1);
      expect(thermostat.degrees).toBe(21);
    });

    it('can decrease temperature', function() {
      thermostat.decrease(1);
      expect(thermostat.degrees).toBe(19);
    });

    it('cannot be decreased below the minimum temperature', function() {
      expect(function() {
        thermostat.decrease(11);
      }).toThrowError("Temperature cannot be decreased any further.");
    });
  });
});
