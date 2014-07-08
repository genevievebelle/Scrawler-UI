var Session = (function() {
	var initialSet = function() {
		localStorage.setItem("EntryTime", Date.now());
		localStorage.setItem("Username", Faker.Name.findName());
		setInterval("Session.expireSession()", 10000);
	};

	var reset = function() {
		localStorage.setItem("EntryTime", Date.now());
	};

	var timeUp = function() {
		var sessionEnd = parseInt(localStorage.getItem("EntryTime")) + 600000; // 10 minutes

		return (parseInt(Date.now()) > sessionEnd);
	};

	var expireSession = function() {
		if (timeUp()) {
			Window.clearChat();
			Window.appendSystemMessage("Times up! Scan QR code again to refresh the session.");
		};
	};

	return {
		initialSet: initialSet,
		expireSession: expireSession	}
})();

