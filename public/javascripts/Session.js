var Session = (function() {
	var initialSet = function() {
		localStorage.setItem("EntryTime", Date.now());
		localStorage.setItem("Username", Faker.Name.findName());
		setInterval("Session.checkTime()", 60000);
	};

	var reset = function() {
		localStorage.setItem("EntryTime", Date.now());
	};

	var checkTime = function() {
		console.log("checking time")
		var sessionEnd = parseInt(localStorage.getItem("EntryTime")) + 600000; // 10 minutes
		var oneMinuteLeft = parseInt(localStorage.getItem("EntryTime")) + 540000;
		if (parseInt(Date.now()) > sessionEnd) {
			expireSession();
		} else if (parseInt(Date.now()) > oneMinuteLeft) {
			Window.appendSystemMessage("Your time's almost up! Scan the QR code again in the next minute to keep Scrawling.");
		}
	};

	var timeUp = function() {
		var sessionEnd = parseInt(localStorage.getItem("EntryTime")) + 600000; // 10 minutes
		return (parseInt(Date.now()) > sessionEnd);
	};

	var expireSession = function() {
		if (timeUp()) {
			Window.clearChat();
		};
	};

	return {
		initialSet: initialSet,
		checkTime: checkTime,
		expireSession: expireSession	
	};
})();

