var ChatView = (function() {
  var appendMessageDiv = function(text) {
    // If message is empty, do not complete rest of method
    if(text == ""){
      return;
    }

    $('<li/>').html("<span class='glyphicon glyphicon-thumbs-up upvote orange'></span> " + text).appendTo(ChatWindow.chatLog);
    window.scrollTo(0,document.body.scrollHeight);
  };

  var appendImmortalList = function(messageContent, messageId, Timestamp) {
    $('<li/>').html(messageContent+'</br><span class="time">'+ Timestamp + '</span><span class="location">near Cuba Street</span>').appendTo(ChatWindow.immortalMessageList);
    ChatWindow.immortalMessageList.children().last()[0].classList.add(messageId);
  };

  return {
    appendMessageDiv: appendMessageDiv,
    appendImmortalList: appendImmortalList
  };
})();
