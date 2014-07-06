var ChatView = (function() {
  var appendMessageDiv = function(text) {
    // If message is empty, do not complete rest of method
    if(text == ""){
      return;
    }

    $('<li/>').html("<span class='glyphicon glyphicon-thumbs-up upvote orange'></span> " + text).appendTo(WindowView.chatLog);
    window.scrollTo(0,document.body.scrollHeight);
  };

  return {
    appendMessageDiv: appendMessageDiv,
  };
})();
