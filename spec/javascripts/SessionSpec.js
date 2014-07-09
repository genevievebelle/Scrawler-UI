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

	describe("checkTime", function() {
		beforeEach(function() {
			spyOn(Window, "clearChat");
			spyOn(Window, "redirectTo");
			spyOn(Window, "appendSystemMessage");
		});

		describe("at 10mins", function() {
			beforeEach(function(){
				localStorage.setItem("EntryTime", Date.now() - 600001)
				Session.checkTime();
			});

			it("clears the chat", function() {
				expect(Window.clearChat).toHaveBeenCalled();
			});
		});

		describe("at 9 minutes", function() {
			beforeEach(function(){
				localStorage.setItem("EntryTime", Date.now() - 540001)
				Session.checkTime();
			})

			it("doesn't clear the chat", function() {
				expect(Window.clearChat).not.toHaveBeenCalled();
			});

			it("appends a warning message", function() {
				expect(Window.appendSystemMessage).toHaveBeenCalled();
			});
		});

		describe("before 9 minutes", function() {
			beforeEach(function() {
				localStorage.setItem("EntryTime", Date.now() - 539999)
				Session.checkTime();
			});
			it("doesn't clear the chat", function() {
				expect(Window.clearChat).not.toHaveBeenCalled();
			});

			it("doesn't append a warning message", function() {
				expect(Window.appendSystemMessage).not.toHaveBeenCalled();
			});
		});
	});
});
