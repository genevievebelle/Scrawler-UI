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
    console.log(jQueryObject);
		var msg = {
      Name: jQueryObject.parent().find('.name').text(),
			Content: jQueryObject.parent().text(),
			FirebaseId : FirebaseModule.getRoom(),
      MessageId: jQueryObject.attr("data-id"),
    };
    console.log(msg);
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
