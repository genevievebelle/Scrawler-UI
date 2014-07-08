describe("ImmortalView", function(){

  describe("appendImmortalList", function() {

    var immortalListItemView;

    beforeEach(function() {
      itemList = Window.immortalMessageList;
      spyOn(itemList, "append");
      immortalListItemView = [];
      ImmortalView.appendImmortalList(immortalListItemView);
    });

    it("appends a new immortal view instance to the list", function() {
      expect(itemList.append).toHaveBeenCalledWith(immortalListItemView.html);
    });
	});

  describe("hideImmortalListItemView", function() {

    beforeEach(function() {
      ImmortalView.hideImmortalListItemView;
    });

    it("initiates rotation of messages", function() {
      expect(ImmortalView.rotateImmortalListItemView).toHaveBeenCalled;
    });

    it("sets the timer for displaying each message", function() {
      expect(window.setTimeout).toHaveBeenCalled;
    });
  });

  describe("rotateImmortalListItemView", function() {

    beforeEach(function() {
      ImmortalView.rotateImmortalListItemView;
    });

    it("invokes function that determines message replacement behaviour", function() {
      expect(ImmortalView.alternateCurrentItem).toHaveBeenCalled;
    });

    it("establishes a display loop", function() {
      expect(window.setTimeout).toHaveBeenCalled;
      expect(ImmortalView.rotateImmortalListItemView).toHaveBeenCalled;
    });
  });

  describe("alernateCurrentItem", function() {

    it("defines message rotation behaviour", function() {
      ImmortalView.alernateCurrentItem;
      expect(ImmortalView.getTotalItems).toHaveBeenCalled;
    });
  });

  // describe ("getTotalItems", function() {

  //   it("gets the total number of messages to display", function() {
  //     ImmortalView.getTotalItems;
  //     expect(totalItems).toBeDefined;
  //   });
  // });
});
