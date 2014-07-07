var Trollguard = (function(){
	var counter = 0;
	var lastFiveMessages = {};

	var checkSpammer = function(){
		incrementCounter();
		return allowSend();
	};

	var incrementCounter = function(){
		lastFiveMessages[counter] = Date.now();
		counter += 1;
	};

	var allowSend = function(){
		var currentIndex = parseInt(counter)-1;
		var oldIndex = currentIndex-7;
		var timeElapsed = lastFiveMessages[currentIndex] - lastFiveMessages[oldIndex];
		console.log("timeElapsed: ", timeElapsed);
		if(timeElapsed < 10000){
			return false;
		} else return true;
	};

	var fadeSend = function(){
		Window.sendButton.css("background-color", "#8A8A8A");
		setTimeout(restoreSend, 5000);
	};

	var restoreSend = function(){
		$("#send-message").css("background-color", "#C63D0F");
	};

	return {
		checkSpammer: checkSpammer,
		fadeSend: fadeSend
	};
})();