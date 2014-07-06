var Session = (function() {
	var initialSet = function() {
		localStorage.setItem("EntryTime", Date.now());
		setInterval("Session.expireSession()", 10000);
	};

	var reset = function() {
		localStorage.setItem("EntryTime", Date.now());
	};

	var checkTime = function() {
		var sessionEnd = parseInt(localStorage.getItem("EntryTime")) + 600000; // 10 minutes

		if (parseInt(Date.now()) < sessionEnd) {
			console.log("Time remaining:", (sessionEnd - parseInt(Date.now())));
		} else {
			return true;
		}
	};

	var expireSession = function() {
		if (checkTime() == true) {
			alert("Times up! Scan QR code again to refresh the session.");
			clearChat();
		};
	};

	var clearChat = function(){
		$(".messagesDiv").empty();
		$("#form").empty();	
	};

	return {
		initialSet: initialSet,
		expireSession: expireSession
	}
})();

