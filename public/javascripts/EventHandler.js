var EventHandler = (function() {
  var jQueryObject;

  var bindClickEvents = function() {
    $(ChatWindow.chatLog).on('click', ".upvote", upVote);
    ChatWindow.sendButton.on('click', FirebaseModule.sendMessageClickEvent);
  };

  var upVote = function() {
		var incomingUrl = window.location.search;
		jQueryObject = $(this);
		var msg = {
			Content: $(this).parent().text(),
			HiddenUrl: incomingUrl.split('=')[1]
    };
    upVoteAjaxRequest(msg);
  };

  var upVoteAjaxRequest = function(msg) {
    $.ajax({
      method: "POST",
      url: "http://scrawler.azurewebsites.net/chat/savemessage",
      data: msg,
      success: changeMessageClass,
      failure: Errors.ajaxErrorMessage
    });
  };

  var changeMessageClass = function(){
    jQueryObject.removeClass("orange");
    jQueryObject.addClass("red");
  };

  return {
    bindClickEvents: bindClickEvents
  };
})();
