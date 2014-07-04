var ChatView = (function() {
  var appendMessageDiv = function(text) {
    if(text == ""){
      return;
    }

    $('<li/>').text(text).appendTo(ChatWindow.chatLog);
    ChatWindow.chatLog[0].scrollTop = ChatWindow.chatLog[0].scrollHeight;
  };

  var appendImmortalList = function(messageContent, messageId, Timestamp) {
    $('<li/>').html('<span class="time">'+ Timestamp + '</span>: ' + messageContent).appendTo(ChatWindow.immortalMessageList);
    ChatWindow.immortalMessageList.children().last()[0].classList.add(messageId);

  };

  return {
    appendMessageDiv: appendMessageDiv,
    appendImmortalList: appendImmortalList
  };
})();
