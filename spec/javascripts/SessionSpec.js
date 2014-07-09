describe("Session", function() {
	beforeEach(function(){
		spyOn(Date, "now").and.returnValue(1404810612883);
	});

	describe("initialSet", function() {
		beforeEach(function() {
			spyOn(localStorage, "setItem").and.callThrough();
			localStorage.setItem.calls.reset()
			Session.initialSet()
		});

		it("sets an EntryTime", function() {
			expect(localStorage.setItem).toHaveBeenCalledWith("EntryTime", Date.now())
		});
		
		it("sets a Username", function() {
			expect(localStorage.setItem.calls.mostRecent().args[0]).toEqual("Username");
		});
	});


	describe("expireSession", function() {
		beforeEach(function() {
			spyOn(Window, "clearChat");
			Window.clearChat.calls.reset()
			spyOn(Window, "appendSystemMessage");
			Window.appendSystemMessage.calls.reset();
		});

		describe("when time is up", function() {
			beforeEach(function(){
				localStorage.setItem("EntryTime", Date.now() - 600001)
				Session.expireSession();
			});

			it("clears the chat", function() {
				expect(Window.clearChat).toHaveBeenCalled();
			});

			it("throws an alert", function() {
				expect(Window.appendSystemMessage).toHaveBeenCalled();
			})
		});

		describe("when time is not up", function() {
			beforeEach(function(){
				localStorage.setItem("EntryTime", Date.now() - 600000)
				Session.expireSession();
			})

			it("doesn't clear the chat", function() {
				expect(Window.clearChat).not.toHaveBeenCalled();
			});

			it("throws an alert", function() {
				expect(Window.appendSystemMessage).not.toHaveBeenCalled();
			});
		});
	});
});