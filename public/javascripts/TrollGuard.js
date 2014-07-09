var Trollguard = (function(){
	var index = 0;
	var listOfRecentMessages = {};

	var checkSpammer = function(){
		incrementCounter();
		return calculateDifference();
	};

	var incrementCounter = function(){
		listOfRecentMessages[index] = Date.now();
		index += 1;
	};

	var allowSend = function(timeDifference){
		if(timeDifference < 10000){
					return false;
				} else return true;
	};
	
	var calculateDifference = function(){
		var currentIndex = parseInt(index)-1;
		var oldIndex = currentIndex-7;
		var timeDifference = listOfRecentMessages[currentIndex] - listOfRecentMessages[oldIndex];
		allowSend(timeDifference);
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
