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
      spyOn(ImmortalView, "rotateImmortalListItemView");
      spyOn(window, "setTimeout");
      ImmortalView.hideImmortalListItemView();
    });

    it("sets the timer for displaying each message", function() {
      expect(window.setTimeout).toHaveBeenCalledWith(ImmortalView.rotateImmortalListItemView, 4000);
    });
  });

  describe("rotateImmortalListItemView", function() {

    beforeEach(function() {
      spyOn(window, "setTimeout");
      ImmortalView.rotateImmortalListItemView();
    });

    it("establishes a display loop", function() {
      expect(window.setTimeout).toHaveBeenCalledWith(ImmortalView.rotateImmortalListItemView, 4000);
    });
  });

  describe("alernateCurrentItem", function() {

    beforeEach(function() {
      spyOn(ImmortalView, "getTotalItems");
      ImmortalView.alternateCurrentItem();
    });

    it("defines message rotation behaviour", function() {
      expect(ImmortalView.getTotalItems).toHaveBeenCalled();
    });
  });
});
