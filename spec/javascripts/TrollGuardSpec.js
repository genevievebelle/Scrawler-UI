<<<<<<< HEAD
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
=======
// describe("TrollGuard", function() {
//   describe("checkSpammer", function() {
//     describe("5 messages in last 5mins", function(){
//       beforeEach(function() {
//         spyOn(TrollGuard, "checkSpammer");
//         TrollGuard.checkSpammer.calls.reset();
//         for(var i = 0; i < 5; i++) {
//           spyOn(Date, 'now').and.returnValue(1404816517809 + i * 30000);
//           TrollGuard.checkSpammer();
//         }
//       });
//       it("returns false", function() {
//         expect(TrollGuard.checkSpammer()).toBe(false);
//       });
//     });
//   });
// });
>>>>>>> f2c286e32b680ee875b5910c2213a865f1704a98
