var ChatView = (function() {
  var appendMessageDiv = function(text) {
    // If message is empty, do not complete rest of method
    if(text == ""){
      return;
    }

    $('<li/>').html("<span class='glyphicon glyphicon-thumbs-up upvote orange'></span> " + text).appendTo(Window.chatLog);
    window.scrollTo(0,document.body.scrollHeight);
  };

  var appendRoomName = function(name) {
    $(".room-name").text(name);
  };

  return {
    appendMessageDiv: appendMessageDiv,
    appendRoomName: appendRoomName
  };
})();
