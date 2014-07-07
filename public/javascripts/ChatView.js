var ChatView = (function() {
  var appendMessageDiv = function(text, id) {
    // If message is empty, do not complete rest of method
    if(text == ""){
      return;
    }

    $('<li/>').html("<span class='glyphicon glyphicon-thumbs-up upvote orange' data-id=" + id + "></span> " + text).appendTo(Window.chatLog);
    window.scrollTo(0,document.body.scrollHeight);
  };

  var appendSystemMessage = function(text) {
    $('<li/>').html(text).appendTo(Window.chatLog).css('color', 'red');
    window.scrollTo(0,document.body.scrollHeight);
  }

  var appendRoomName = function(name) {
    $(".room-name").text(name);
  }

  return {
    appendMessageDiv: appendMessageDiv,
    appendSystemMessage: appendSystemMessage,
    appendRoomName: appendRoomName
  };
})();
