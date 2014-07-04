var Session = {
	set: function(){
	var time = Date.now();
	var thisSession = localStorage.getItem("EntryTime");
    if(thisSession == null)
	    {
	      localStorage.setItem("EntryTime", time)
	    }
	},

	checkTime: function(){
	var sessionStart = parseInt(localStorage.getItem("EntryTime"));
	var sessionEnd = sessionStart + 4000000;
	var time = parseInt(Date.now());

	if( time > sessionEnd)
		{
			console.log(time - sessionEnd);
			return true;
		}
	},

	expireSession: function(){
		if (this.checkTime == true){
			console.log();
			alert("Times up!");
			return;
		}
		else {
			console.log("wait for it...");
			this.expireSession();
		}
	}
};