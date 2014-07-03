var EventHandlerModule = (function() {
  var bindClickEvents = function() {
    $('#send-message').on('click', FirebaseModule.sendMessageClickEvent);
  };
  return {
    bindClickEvents: bindClickEvents
  }
})();
