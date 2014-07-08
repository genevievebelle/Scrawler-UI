describe("ImmortalListItem", function(){

  var args = {Content: "content", Id: 31, Time: "July 5th"}

  beforeEach(function() {
    immortalListItem = new ImmortalListItem(args);
  });

  describe("new", function() {

    it("has message content", function() {
      expect(immortalListItem.content).toEqual(args.Content);
    });

    it("has a message id", function() {
      expect(immortalListItem.messageId).toEqual(args.Id);
    });

    it("has a formatted timestamp", function() {
      expect(immortalListItem.timeStamp).toEqual(moment(new Date(args.timeStamp)).format("MMMM Do"));
    });
  });
});
