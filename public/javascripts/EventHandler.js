var EventHandler = (function() {
  var jQueryObject;

  var bindClickEvents = function() {
    $(Window.chatLog).on('click', ".upvote", VoteView.upVote);
    Window.sendButton.on('click', FirebaseModule.sendMessageClickEvent);
    $(".draw-btn").on('click', Drawing.changeTab);
    $(".logo-img").on('click', Drawing.changeTab);
  };

  var changeMessageClass = function(){
    jQueryObject.removeClass("orange");
    jQueryObject.addClass("red");
  };

  return {
    bindClickEvents: bindClickEvents,
  };
})();
