var ImmortalView = (function() {
  var currentItem = 0;
  var appendImmortalList = function(messageContent, messageId, Timestamp) {
    $('<li/>').html(messageContent+'</br><span class="time">'+ Timestamp + '</span><span class="location">near Cuba Street</span>').appendTo(Window.immortalMessageList);
    Window.immortalMessageList.children().last()[0].classList.add(messageId);
  };

  var rotateImmortal = function() {
    var itemList = Window.immortalMessageList.children();
    var totalItems = $(itemList).length;
    itemList.eq(currentItem).fadeOut(500, function(){
      currentItem++;
      if(currentItem === totalItems){
        currentItem =  0;
      }
      itemList.eq(currentItem).fadeIn(500);
    });
    setTimeout(rotateImmortal, 3000);
  };

  return {
    appendImmortalList: appendImmortalList,
    rotateImmortal: rotateImmortal
  }
})();