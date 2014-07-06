var ChatView = (function() {
  var current = 1;
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

  var rotateImmortal = function() {
    var length = $('.immortalMessageList li').length;

    $('.immortalMessageList li').eq(current).fadeOut(500, function(){
      current++;
      console.log(current);
      if(current === length){
        current =  0;
      }
      $('.immortalMessageList li').eq(current).fadeIn(500);
    });
    setTimeout(rotateImmortal, 3000);
  };

  var appendRoomName = function(name) {
    console.log(name);
    $(".room-name").text(name);
  }

  return {
    appendMessageDiv: appendMessageDiv,
    appendImmortalList: appendImmortalList,
    rotateImmortal: rotateImmortal,
    appendRoomName: appendRoomName
  };
})();
