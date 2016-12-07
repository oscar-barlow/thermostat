'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
     thermostat = new Thermostat();
  });

  it('it starts on 20 degrees', function() {
    expect(thermostat.degrees).toBe(20);
  });

  it('can increase temperature', function() {
    thermostat.increase(1);
    expect(thermostat.degrees).toBe(21);
  });

  it('can decrease temperature', function() {
    thermostat.decrease(1);
    expect(thermostat.degrees).toBe(19);
  });
});
