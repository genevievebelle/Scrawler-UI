var Trollguard = (function(){
	var counter;

	var incrementCounter = function(){
		this.counter += 1;
		localStorage.setItem("counter", counter);
	};

	var allowSend = function(){
		localStorage.getItem("counter");
	}

	return {
		incrementCounter: incrementCounter
	};
})();