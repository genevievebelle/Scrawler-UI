var ChatView = (function() {
  var appendMessageDiv = function(text, username, id) {
    if(text == ""){
      return;
    }
    var message = new ChatMessage(text, username, id)
    Window.chatLog.append(message.constructHtml());
    window.scrollTo(0,document.body.scrollHeight);
  };

  return {
    appendMessageDiv: appendMessageDiv
  };
})();
