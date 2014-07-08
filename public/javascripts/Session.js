var Session = (function() {
	var initialSet = function() {
		localStorage.setItem("EntryTime", Date.now());
		localStorage.setItem("Username", Faker.Name.findName());
		setInterval("Session.expireSession()", 10000);
	};

	var reset = function() {
		localStorage.setItem("EntryTime", Date.now());
	};

	var checkTime = function() {
		var sessionEnd = parseInt(localStorage.getItem("EntryTime")) + 600000; // 10 minutes

		if (parseInt(Date.now()) > sessionEnd) {
			return true;
		}
	};

	var expireSession = function() {
		if (checkTime() == true) {
			Window.clearChat();
			Window.appendSystemMessage("Times up! Scan QR code again to refresh the session.");
		};
	};

	return {
		initialSet: initialSet,
		expireSession: expireSession
	}
})();

