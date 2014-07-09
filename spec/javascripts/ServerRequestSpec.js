describe("ServerRequest", function() {

  

  describe("sendRoomInfoRequest", function() {

    var ajax_params;
    var getRoomInfo;

    beforeEach(function() {
      spyOn(Room, "getRoomId").and.returnValue("HDK72");
      spyOn(Room, "setRoomInfo");

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
      expect(Room.setRoomInfo).toHaveBeenCalled();
    });
  });
});
