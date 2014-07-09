describe("ImmortalListItemView", function() {

  var immortalListItem = {content: "serious sizzlers?", messageId: 13, timeStamp: "July 4th"}

  beforeEach(function() {
    // Be careful here I don't know to what scope this variable is being hoisted
    // global? This you should be using this.newView here.
    newView = new ImmortalListItemView(immortalListItem);
  });

  describe("new", function() {

    it("contains a list item wrapper", function() {
      expect(newView.parentWrapper).toEqual('<li />');
    });

    it("contains an internal span class wrapper", function() {
      expect(newView.childrenWrapper).toEqual("<span class='time'>");
    });

    it("has a method for constructing an html string", function() {
      expect(newView.buildHtml).toBeDefined();
    });
  });

  // Would be good to test (with spys) that the methods that manipulate the DOM
  // like ".html" are being called and with the expected things.
  describe("buildHtml", function() {

    it("returns a defined html property", function() {
      newView.buildHtml(immortalListItem);
      expect(newView.html).toBeDefined();
    });
  });

  describe("htmlString", function() {

    it("constructs an html string from an immortalListItem", function() {
      expect(newView.htmlStringConstructor(immortalListItem)).toEqual("serious sizzlers?</br>undefinedJuly 4th</span>");
    });
  });
});
