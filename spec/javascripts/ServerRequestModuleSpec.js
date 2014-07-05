describe("ServerRequestModule", function() {

  describe("getRoomId", function() {

    it("it extracts roomId correctly", function() {
      var url = "http://hidden-falls-5768.herokuapp.com/?id=HDK72";
      var roomId = ServerRequestModule.getRoomId(url);
      expect(roomId).toEqual("HDK72");
    });
  });

  describe("getRoomInfo", function() {
    var data;

    beforeEach(function() {
      data = { FireBaseRoomId: 5, Messages: [{ Id: 5, Content: "content" }] };
      spyOn(ImmortalMessage, "buildImmortalMessage");
      spyOn(FirebaseModule, "createFireBase");
      spyOn(FirebaseModule, "bindFirebaseActions");
      ServerRequestModule.getRoomInfo(data);
    });

    it("calls buildImmortalMessage on ImmortalMessage", function() {
      expect(ImmortalMessage.buildImmortalMessage).toHaveBeenCalledWith(data.Messages);
    });

    it("calls createFireBase on FirebaseModule", function() {
      expect(FirebaseModule.createFireBase).toHaveBeenCalledWith(data.FireBaseRoomId);
    });

    it("calls bindFirebaseActions on FirebaseModule", function() {
      expect(FirebaseModule.bindFirebaseActions).toHaveBeenCalled();
    });
  });

  describe("sendRoomInfoRequest", function() {

    var ajax_params;
    var getRoomInfo;

    beforeEach(function() {
      spyOn(ServerRequestModule, "getRoomId").and.returnValue("HDK72");
      spyOn(ServerRequestModule, "getRoomInfo");

      spyOn($,'ajax').and.callFake(function(e) {
        ajax_params = e;
        e.success();
      });
    });

    it("makes an ajax request to correct URL", function() {
      ServerRequestModule.sendRoomInfoRequest();
      expect(ajax_params.url).toBe("http://scrawler.azurewebsites.net/chat/getroominformation?id=HDK72");
    });

    it("handles successful result of Ajax request", function () {
      ServerRequestModule.sendRoomInfoRequest();
      expect(ServerRequestModule.getRoomInfo).toHaveBeenCalled();
    });
  });
});
