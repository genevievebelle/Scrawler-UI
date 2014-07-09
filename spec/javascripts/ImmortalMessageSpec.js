describe("ImmortalMessage", function() {
	describe("buildImmortalMessage", function() {
		beforeEach(function() {
			spyOn(ImmortalMessage, "buildImmortalMessage").and.callThrough();
		});
		
		it("creates a new instance of immortalListItem", function() {
			var immortalData = [1,2,3];
			var immortalListItem = new ImmortalListItem(immortalData);
			ImmortalMessage.buildImmortalMessage(immortalData);
			expect(ImmortalListItem.new).toHaveBeenCalledWith(immortalData[1]);
		});

		it("hides the ImmortalListItemView", function() {
			expect(ImmortalView.hideImmortalListItemView).toHaveBeenCalled();
		});
	});
});