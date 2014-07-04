var ChatView = (function() {
  var appendMessageDiv = function(text) {
    $('<li/>').text(text).appendTo(ChatWindow.chatLog);
    ChatWindow.chatLog[0].scrollTop = ChatWindow.chatLog[0].scrollHeight;
  };

  return {
    appendMessageDiv: appendMessageDiv
  };
})();
