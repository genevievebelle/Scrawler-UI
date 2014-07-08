describe("ImmortalView", function(){

  describe("appendImmortalList", function() {

    var immortalListItemView;

    beforeEach(function() {
      itemList = Window.immortalMessageList;
      spyOn(itemList, 'append');
      immortalListItemView = [];
      ImmortalView.appendImmortalList(immortalListItemView);
    });

    it("appends a new immortal view instance to the list", function() {
      expect(itemList.append).toHaveBeenCalledWith(immortalListItemView.html);
    });
	});

  descrive("hideImmortalListItemView", function() {

  });
});
