var ImmortalView = (function() {
  var currentItem = 0;
  var appendImmortalList = function(messageContent, messageId, Timestamp) {
    $('<li/>').html(messageContent+'</br><span class="time">'+ Timestamp + '</span><span class="location">near Cuba Street</span>').appendTo(WindowView.immortalMessageList);
    WindowView.immortalMessageList.children().last()[0].classList.add(messageId);
  };

  var rotateImmortal = function() {
    var itemList = WindowView.immortalMessageList.children();
    var totalItems = $(itemList).length;
    itemList.eq(currentItem).fadeOut(500, function(){
      currentItem++;
      if(currentItem === totalItems){
        currentItem =  0;
      }
      itemList.eq(currentItem).fadeIn(500);
    });
    setTimeout(rotateImmortal, 10000);
  };
  return {
    appendImmortalList: appendImmortalList,
    rotateImmortal: rotateImmortal
  }
})();