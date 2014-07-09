var EventHandler = (function() {
  var jQueryObject;

  var bindClickEvents = function() {
    $(Window.chatLog).on('click', ".upvote", VoteView.upVote);
    Window.sendButton.on('click', EventHandler.sendMessageClickEvent);
    $(".draw-btn").on('click', Drawing.changeTab);
    $(".logo-img").on('click', Drawing.changeTab);
  };

  var changeMessageClass = function(){
    jQueryObject.removeClass("orange");
    jQueryObject.addClass("red");
  };

  var sendMessageClickEvent = function(event) {
    event.preventDefault();
    var checkIfNotSpamming = Trollguard.checkSpammer();
    if(checkIfNotSpamming == true){
      //if the user is not spamming, allow them to send a message.
      var message = Window.messageInput.val();
      FirebaseModule.sendMessagetoFireBase(message);
      
    } else {
      //if the user is spamming, do not send the message, fade the send button and alert them.
      Window.fadeSendButton();
      Window.appendSystemMessage("Messaging disabled for 5 seconds");
    };
  };

  return {
    bindClickEvents: bindClickEvents,
    sendMessageClickEvent: sendMessageClickEvent
  };
})();
