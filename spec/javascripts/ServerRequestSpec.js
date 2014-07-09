describe("ServerRequest", function() {

  describe("getRoomId", function() {

    it("it extracts roomId correctly", function() {
      var url = "http://hidden-falls-5768.herokuapp.com/?id=HDK72";
      var roomId = ServerRequest.getRoomId(url);
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
      ServerRequest.setRoomInfo(data);
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

  describe("sendRoomInfoRequest", function() {

    var ajax_params;
    var getRoomInfo;

    beforeEach(function() {
      spyOn(ServerRequest, "getRoomId").and.returnValue("HDK72");
      spyOn(ServerRequest, "setRoomInfo");

      spyOn($,'ajax').and.callFake(function(e) {
        ajax_params = e;
        e.success();
      });
    });

    it("makes an ajax request to correct URL", function() {
      ServerRequest.sendRoomInfoRequest();
      expect(ajax_params.url).toBe("http://scrawler.azurewebsites.net/chat/getroominformation?id=HDK72");
    });

    it("handles successful result of Ajax request", function () {
      ServerRequest.sendRoomInfoRequest();
      expect(ServerRequest.setRoomInfo).toHaveBeenCalled();
    });
  });
});
