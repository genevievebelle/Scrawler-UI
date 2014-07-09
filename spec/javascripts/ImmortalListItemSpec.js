describe("ImmortalListItem", function(){

  var args = {Content: "content", Id: 31, Time: "/Date(1404540452977)/" }

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
      var expected_time = moment(args.Time).format("MMMM Do");
      expect(immortalListItem.timeStamp).toEqual(expected_time);
    });
  });
});
