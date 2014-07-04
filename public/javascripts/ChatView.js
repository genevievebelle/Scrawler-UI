var ChatView = (function() {
  var appendMessageDiv = function(text) {
    if(text == ""){
      return;
    }

    $('<li/>').html("<span class='glyphicon glyphicon-thumbs-up upvote orange'></span> " + text).appendTo(ChatWindow.chatLog);
    ChatWindow.chatLog[0].scrollTop = ChatWindow.chatLog[0].scrollHeight;
    window.scrollTo(0,document.body.scrollHeight);
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
