describe("ImmortalMessage", function() {
	describe("buildImmortalMessage", function() {
		beforeEach(function() {
			spyOn(ImmortalView, "hideImmortalListItemView");
			spyOn(Window, "immortalMessageList");
			spyOn(ImmortalListItem.prototype, 'constructHtml');
		});

		it("creates a new instance of immortalListItem", function() {
			var immortalData = [1,2,3];
			var immortalListItem = new ImmortalListItem(immortalData);
			ImmortalMessage.buildImmortalMessage(immortalData);
			expect(immortalListItem).toBeDefined();
		});

		it("hides the ImmortalListItemView", function() {
			var immortalData = [1,2,3];
			var immortalListItem = new ImmortalListItem(immortalData);
			ImmortalMessage.buildImmortalMessage(immortalData);
			expect(ImmortalView.hideImmortalListItemView).toHaveBeenCalled();
		});
	});
});

