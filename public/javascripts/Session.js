var Session = (function() {
	var initialSet = function() {
		var thisSession = localStorage.getItem("EntryTime");
    if(thisSession === null){
	      localStorage.setItem("EntryTime", Date.now());
	  };
	};

	var reset = function() {
		localStorage.setItem("EntryTime", Date.now());
	};

	var checkTime = function() {
		var sessionEnd = parseInt(localStorage.getItem("EntryTime")) + 600000; // 10 minutes

		if (parseInt(Date.now()) < sessionEnd) {
			console.log("Time remaining:", (sessionEnd - parseInt(Date.now())));
		} else {
			return false;
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
		$("#form").empty();	// Could redirect instead
	};

	return {
		expireSession: expireSession,
		initialSet: initialSet,
		reset: reset
	}
})();

