var EventHandler = (function() {

  var bindClickEvents = function() {
    $(Window.chatLog).on('click', '.upvote', VoteView.upVote);
    Window.sendButton.on('click', EventHandler.sendMessageClickEvent);
    $(".draw-btn").on('click', Drawing.changeTab);
    $(".logo-img").on('click', Drawing.changeTab);
  };

  var sendMessageClickEvent = function(event) {
    event.preventDefault();
    var checkIfNotSpamming = TrollGuard.checkSpammer();
    if(checkIfNotSpamming == true){
      //if the user is not spamming, allow them to send a message.
      FirebaseModule.sendMessagetoFireBase(Window.messageInput.val());
      Window.messageInput.val('');
    } else {
      //if the user is spamming, do not send the message, fade the send button and alert them.
      Window.fadeSendButton();
      Window.appendSystemMessage("Messaging disabled for 5 seconds");
    };
  };

  return {
    bindClickEvents: bindClickEvents,
    sendMessageClickEvent: sendMessageClickEvent,
  };
})();
