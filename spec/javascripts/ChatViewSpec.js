describe("ChatView", function() {
  describe("appendMessageDiv", function() {
    var fixture = $("<ul class='messagesDiv'></ul>");
    fixture.myTestedPlugin();
    ChatView.appendMessageDiv("text");
    expect(fixture).toContainElement('li');
  });
});


