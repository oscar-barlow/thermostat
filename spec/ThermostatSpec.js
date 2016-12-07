describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("should start at 20 degrees", function(){
    expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE);
  });
  describe("up", function(){
    it("should allow temperature to be increased", function(){
      thermostat.up();
      expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE + 1);
    });

    it("should not increase above 25 if power-saving mode on", function(){
      for(var i = 0; i< 30; i++){
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(thermostat.POWER_SAVING_MAXIMUM);
    });

    it("should not increase above 32 if power-saving mode off", function(){
      thermostat.isPowerSaving = false
      for(var i = 0; i < 30; i ++){
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(thermostat.ABSOLUTE_MAXIMUM);
    });
  });

  describe("down", function(){
    it("should allow temp to be decreased", function(){
      thermostat.down();
      expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE - 1);
    });
    it("should not go down below 10 degrees", function(){
      for (i = 0; i < 13; i++) {
        thermostat.down();
      }
      expect(thermostat.temperature).toEqual(thermostat.MINIMUM_TEMPERATURE);
    });
  });

  it("should have a reset function", function(){
    thermostat.down();
    thermostat.reset();
    expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE);
  });

  it('should be able to change the powersaving mode', function(){
    thermostat.changePowerSavingMode();
    expect(thermostat.isPowerSaving).toBeFalsy();
  });

  it('if temperature above 25 when user turns power-saving mode on, the temperature should go down to 25', function(){
    thermostat.changePowerSavingMode();
    for (i = 0; i< 10; i++) {
      thermostat.up();
    }
    thermostat.changePowerSavingMode();
    expect(thermostat.temperature).toEqual(25);
  });

  describe("energyUsage", function(){
    it("should return low usage if temp below 18", function(){
      for (i = 0; i < 5; i++) {
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual("low-usage")
    });

    it("should have medium usage between 18 and 24 degrees", function(){
      expect(thermostat.energyUsage()).toEqual("medium-usage")
    });
    it("should return high usage at 25 degrees and above", function(){
      for (i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual("high-usage")
    });
  });


});
