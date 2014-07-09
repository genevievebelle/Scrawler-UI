describe("Room", function() {
  describe("getRoomId", function() {

      it("it extracts roomId correctly", function() {
        var url = "http://hidden-falls-5768.herokuapp.com/?id=HDK72";
        var roomId = Room.getRoomId(url);
        expect(roomId).toEqual("HDK72");
      });
    });
  
  describe("setRoomInfo", function() {
      var data;

      beforeEach(function() {
        data = { FireBaseRoomId: 5, Messages: [{ Id: 5, Content: "content" }] };
        spyOn(ImmortalMessage, "buildImmortalMessage");
        spyOn(FirebaseModule, "createFireBase");
        spyOn(FirebaseModule, "bindFirebaseActions");
        Room.setRoomInfo(data);
      });

      it("calls buildImmortalMessage on ImmortalMessage", function() {
        expect(ImmortalMessage.buildImmortalMessage).toHaveBeenCalledWith(data.Messages);
      });

      it("calls createFireBase on Firebase", function() {
        expect(FirebaseModule.createFireBase).toHaveBeenCalledWith(data.FireBaseRoomId);
      });

      it("calls bindFirebaseActions on Firebase", function() {
        expect(FirebaseModule.bindFirebaseActions).toHaveBeenCalled();
      });
    });
});