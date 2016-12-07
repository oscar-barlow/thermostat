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
      thermostat.up(1);
      expect(thermostat.temperature).toEqual(21);
    });
  });

  describe("down", function(){
    it("should allow temp to be decreased", function(){
      thermostat.down(1);
      expect(thermostat.temperature).toEqual(19);
    });
  });

});
