var EventHandler = (function() {
  var jQueryObject;

  var bindClickEvents = function() {
    $(Window.chatLog).on('click', ".upvote", upVote);
    Window.sendButton.on('click', FirebaseModule.sendMessageClickEvent);
    $(".draw-btn").on('click', Drawing.changeTab);
  };

  var upVote = function() {
    jQueryObject = $(this);
    if (jQueryObject.hasClass("red")) {
      return;
    }
		var incomingUrl = window.location.search;
		var msg = {
      Name: jQueryObject.parent().find('.username').text(),
			Content: jQueryObject.parent().find(".content").text(),
			FirebaseId : FirebaseModule.getRoom(),
      MessageId: jQueryObject.attr("data-id"),
    }
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
