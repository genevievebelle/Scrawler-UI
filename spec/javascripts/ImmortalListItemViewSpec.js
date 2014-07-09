describe("ImmortalListItemView", function() {

  var immortalListItem = {content: "serious sizzlers?", messageId: 13, timeStamp: "July 4th", userName: "murdoch mckenzie"};

  beforeEach(function() {
    this.newView = new ImmortalListItemView(immortalListItem);
  });

  describe("new", function() {

    it("contains a list item wrapper", function() {
      expect(this.newView.parentWrapper).toEqual('<li />');
    });

    it("has a method for constructing an html string", function() {
      expect(this.newView.buildHtml).toBeDefined();
    });
  });

  describe("buildHtml", function() {

    it("is called upon instantiation of a new ImmortalListItemView object", function() {
      spyOn(ImmortalListItemView.prototype, "buildHtml");
      this.otherView = new ImmortalListItemView(immortalListItem);
      expect(ImmortalListItemView.prototype.buildHtml).toHaveBeenCalledWith(immortalListItem);
    });

    it("returns a defined html property", function() {
      this.newView.buildHtml(immortalListItem);
      expect(this.newView.html).toBeDefined();
    });
  });

  describe("htmlString", function() {

    it("constructs an html string from an immortalListItem", function() {
      var expected_string = "serious sizzlers?</br><span class='time'>July 4th</span><span class='user-name'>murdoch mckenzie</span>"
      expect(this.newView.htmlStringConstructor(immortalListItem)).toEqual(expected_string);
    });
  });
});
