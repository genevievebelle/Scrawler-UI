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
		if(timeElapsed < 10000){
			return false;
		} else return true;
	};

	var fadeSend = function(){ 
		Window.fadeSendButton();
		setTimeout(restoreSend, 5000);
	};

	var restoreSend = function(){
		Window.restoreSendButton();
	};

	return {
		checkSpammer: checkSpammer,
		fadeSend: fadeSend
	};
})();
