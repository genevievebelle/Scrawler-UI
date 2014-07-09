var TrollGuard = (function(){
	var index = 0;
	var listOfRecentMessages = {};

	var getIndex = function() {
		return index;
	}

	var getTimeStampList = function() {
		return listOfRecentMessages;
	}

	var checkSpammer = function(){
		TrollGuard.incrementCounter();
		return TrollGuard.calculateDifference();
	};

	var incrementCounter = function(){
		listOfRecentMessages[index] = Date.now();
		index += 1;
	};

	var allowSend = function(timeDifference){
		if(timeDifference < 10000){
			return false;
		} else {
			return true;
		}
	};
	
	var calculateDifference = function(){
		var currentIndex = parseInt(TrollGuard.getIndex())-1;
		var oldIndex = currentIndex-7;
		var listOfTimeStamps = TrollGuard.getTimeStampList();
		var timeDifference = listOfTimeStamps[currentIndex] - listOfTimeStamps[oldIndex];
		return allowSend(timeDifference);
	};

	return {
		getIndex: getIndex,
		getTimeStampList: getTimeStampList,
		checkSpammer: checkSpammer,
		allowSend: allowSend,
		incrementCounter: incrementCounter,
		calculateDifference: calculateDifference
	};
})();
