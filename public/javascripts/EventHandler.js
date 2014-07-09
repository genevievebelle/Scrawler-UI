var EventHandler = (function() {
  var jQueryObject;

  // So far this is the only event handler in this module. Basically I think
  // this module should only contain "on" type click events pointing to other
  // modules that know how to do the work.
  var bindClickEvents = function() {
    $(Window.chatLog).on('click', ".upvote", upVote);
    Window.sendButton.on('click', FirebaseModule.sendMessageClickEvent);
    $(".draw-btn").on('click', Drawing.changeTab);
  };

  // Not sure about where this goes yet as I haven't seen the rest of your code
  // but at a guess because it is dealing with Votes and manipulating the DOM
  // then maybe in a module called VoteView or something like that?
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

  // This function has nothing to do with event handeling.
  // I would suggest that this should go in your ServerReques module.
  // In fact the way your app is setup it might make sence for all
  // AJAX code to go into the ServerRequest module. That way the rest of
  // your app doesn't need to know anything about AJAX just that the
  // ServerRequest module knows how to deal with it.
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
