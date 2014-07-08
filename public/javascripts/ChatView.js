var ChatView = (function() {
  var appendMessageDiv = function(text, username, id) {
    var message = new chatMessage(text, username, id)
    // If message is empty, do not complete rest of method
    if(message.Content == ""){
      return;
    }
    message.constructHtml().appendTo(Window.chatLog);
    window.scrollTo(0,document.body.scrollHeight);
  };

  return {
    appendMessageDiv: appendMessageDiv
  };
})();
