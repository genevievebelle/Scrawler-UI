var EventHandlerModule = (function() {
  var bindClickEvents = function() {
    $(ChatWindow.sendButton).on('click', FirebaseModule.sendMessageClickEvent);
  };

  return {
    bindClickEvents: bindClickEvents
  }
})();
