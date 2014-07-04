var EventHandlerModule = (function() {
  var bindClickEvents = function() {
    ChatWindow.sendButton.on('click', FirebaseModule.sendMessageClickEvent);

  	var upVote = function() {
		var incomingUrl = window.location.search;
  		var roomId = incomingUrl.split('=')[1];
  		var jQueryObject = $(this);
    	var msg = {
    		Content: $(this).parent().text(),
    		HiddenUrl: roomId
    	}

    	$.ajax({
    		method: "POST",
    		url: "http://scrawler.azurewebsites.net/chat/savemessage",
    		data: msg,
    		success: function() {
    			jQueryObject.removeClass("orange");
    			jQueryObject.addClass("red");
    		},
    		failure: function() {
    			console.log('ajax fail');
    		}
    	})
    }

    $("ul").on('click',".upvote", upVote);
  };

  return {
    bindClickEvents: bindClickEvents
  }
})();
