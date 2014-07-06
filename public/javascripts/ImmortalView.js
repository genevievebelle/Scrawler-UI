var ImmortalView = (function() {
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
    setTimeout(rotateImmortal, 10000);
  };
  return {
    appendImmortalList: appendImmortalList,
    rotateImmortal: rotateImmortal
  }
})();