var Session = {
	initialSet: function(){
	var time = Date.now();
	var thisSession = localStorage.getItem("EntryTime");
    if(thisSession === null)
	    {
	      localStorage.setItem("EntryTime", time)
	    }
	},

	reset: function(){
		localStorage.setItem("EntryTime", Date.now());
	},

	checkTime: function(){
	var sessionEnd = parseInt(localStorage.getItem("EntryTime")) + 600000; //600,000ms = 10mins, 60,000ms = 1min.
	var time = parseInt(Date.now());

	if( time>sessionEnd)
		{
			console.log(time - sessionEnd); //If positive, should return true.
			return true;
		}
		else console.log("Time remaining:", sessionEnd - time);
	},

	expireSession: function(){
		var bool = this.checkTime();
		if (bool == true){
			console.log();
			alert("Times up! Scan your toilet token again to refresh the session.");
			this.clearChat();
			return;
		}
		else {
			console.log("wait for it...");
		}
	},

	clearChat: function(){
		$(".messagesDiv").empty();
		$("#form").empty();	//need to test that this kicks them out adequately. Could redi
	}
};

