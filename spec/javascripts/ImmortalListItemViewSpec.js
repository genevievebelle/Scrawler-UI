describe("ImmortalListItemView", function() {

  var immortalListItem = {content: "serious sizzlers?", messageId: 13, timeStamp: "July 4th"}

  beforeEach(function() {
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