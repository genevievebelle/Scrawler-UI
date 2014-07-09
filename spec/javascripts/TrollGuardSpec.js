describe("TrollGuard", function() {
  describe("checkSpammer", function() {
    beforeEach(function() {
      spyOn(TrollGuard, "incrementCounter")
      spyOn(TrollGuard, "calculateDifference")
    });

    it("increments the counter", function() {
      TrollGuard.checkSpammer();
      expect(TrollGuard.incrementCounter).toHaveBeenCalled();
    });
    it("calculates time difference", function() {
      TrollGuard.checkSpammer();
      expect(TrollGuard.calculateDifference).toHaveBeenCalled();
    });
  });

  describe("allowSend", function() {
    it("returns true if input is greater than 10 seconds", function() {
      var result = TrollGuard.allowSend(11000);
      expect(result).toEqual(true);
    });
    it("returns false if input is less than 10 seconds", function() {
      var result = TrollGuard.allowSend(9000);
      expect(result).toEqual(false);
    });
  });

  describe("calculateDifference", function() {
    beforeEach(function() {
      this.timeStampList = [ 50000, 51000, 52000, 53000, 54000, 55000, 56000, 57000, 58000, 59000 ];
      spyOn(TrollGuard, "getIndex").and.returnValue(7);
      spyOn(TrollGuard, "getTimeStampList").and.returnValue(this.timeStampList);
    });
    it("Returns true if message should be allowed", function() {
      var result = TrollGuard.calculateDifference();
      expect(result).toEqual(true);
    });
  });
  describe("calculateDifference", function() {
    beforeEach(function() {
      this.timeStampList = [ 10000, 10001, 10002, 10003, 10004, 10005, 10006, 10007 ];
      spyOn(TrollGuard, "getIndex").and.returnValue(8);
      spyOn(TrollGuard, "getTimeStampList").and.returnValue(this.timeStampList);
    });
    it("Returns false if message should not be allowed", function() {
      var result = TrollGuard.calculateDifference();
      expect(result).toEqual(false);
    });
  });

});

