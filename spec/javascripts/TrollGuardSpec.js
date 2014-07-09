describe("TrollGuard", function() {
  describe("checkSpammer", function() {
    describe("5 messages in last 5mins", function(){
      beforeEach(function() {
        spyOn(TrollGuard, "checkSpammer");
        TrollGuard.checkSpammer.calls.reset();
        for(var i = 0; i < 5; i++) {
          spyOn(Date, 'now').and.returnValue(1404816517809 + i * 30000);
          TrollGuard.checkSpammer();
        }
      });
      it("returns false", function() {
        expect(TrollGuard.checkSpammer()).toBe(false);
      });
    });
  });
});