describe("ChatMessage", function(){

  var id = 24
  var username = "user1"
  var text = "message content"

  beforeEach(function() {
    newMessage = new ChatMessage(text, username, id);
  });

  describe("new", function() {

    it("has an id", function() {
      expect(newMessage.Id).toEqual(id);
    });

    it("has a username associated with it", function() {
      expect(newMessage.Username).toEqual(username);
    });

    it("has message content", function() {
      expect(newMessage.Content).toEqual(text);
    });
  });
});
