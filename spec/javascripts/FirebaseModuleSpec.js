describe("FirebaseModule", function() {

  describe("createFireBase", function() {

    beforeEach(function() {
      spyOn(window, 'Firebase');
      var roomKey = 'OW763';
      FirebaseModule.createFireBase(roomKey);
    });

    it("constructs a new Firebase reference from a Firebase URL", function() {
      expect(window.Firebase).toHaveBeenCalledWith("https://intense-fire-3380.firebaseio.com/OW763");
    });
  });

  // describe("bindFirebaseActions", function() {



  // });

  // });
});
