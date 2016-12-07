describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("should start at 20 degrees", function(){
    expect(thermostat.temperature).toEqual(20);
  });
  describe("up", function(){
    it("should allow temperature to be increased", function(){
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });

    it("should not increase above 25 if power-saving mode on", function(){
      for(var i = 0; i< 30; i++){
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(25);
    });

    it("should not increase above 32 if power-saving mode off", function(){
      thermostat.powerSaving = false
      for(var i = 0; i < 30; i ++){
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(32);
    });
  });

  describe("down", function(){
    it("should allow temp to be decreased", function(){
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });
    it("should not go down below 10 degrees", function(){
      for (i = 0; i < 13; i++) {
        thermostat.down();
      }
      expect(thermostat.temperature).toEqual(10);
    });
  });

});
