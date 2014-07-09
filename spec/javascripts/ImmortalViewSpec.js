describe("ImmortalView", function(){
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
