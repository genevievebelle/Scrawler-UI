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

  var appendSystemMessage = function(text) {
    $('<li/>').html(text).appendTo(Window.chatLog).css('color', 'red');
    window.scrollTo(0,document.body.scrollHeight);
  }

  var appendRoomName = function(name) {
    $(".room-name").text(name);
  };

  return {
    appendMessageDiv: appendMessageDiv,
    appendSystemMessage: appendSystemMessage,
    appendRoomName: appendRoomName
  };
})();
