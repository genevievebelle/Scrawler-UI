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

  // You have an output for this method, test it.
  describe("constructHtml", function() {

    it("constructs a html string for the chat message object", function() {
      expect(newMessage.constructHtml()).toBeDefined();
      expect(newMessage.constructHtml()).toEqual("<div class='message'>
                                                    <li>
                                                      <span class='glyphicon glyphicon-thumbs-up upvote orange' data-id='-JRJvoXrMbzzsgGe7wcp'></span>
                                                      <span class='username'>Ebba Brekke</span>
                                                      <span class='content'>chat</span>
                                                    </li>
                                                  </div>");


    });
  });
});
