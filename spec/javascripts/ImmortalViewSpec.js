describe("ImmortalView", function(){

  describe("rotation", function(){
		it("correctly identifies total number of immortals", function(){
			var immortalData = [{content: 'immortal1'},{content: 'immortal2'}];
			ImmortalMessage.buildImmortalMessage(immortalData);
			expect(immortalData.length).toEqual(totalItems);
// View testing a lost cause??
		});
	});
});
