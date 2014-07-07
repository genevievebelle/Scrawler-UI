var ImmortalView = (function() {
  var currentItem = 0;
  var itemList = Window.immortalMessageList;

  var appendImmortalList = function(immortalListItemView) {
    $(immortalListItemView.html).appendTo(itemList);
  };

  var hideImmortalListItemView = function() {
    itemList.children().hide();
    itemList.children().first().show();
  };

  var rotateImmortalListItemView = function() {
    itemList.eq(currentItem).fadeOut(500, alternateCurrentItem);
    // setTimeout(rotateImmortalListItemView, 3000);
  };

  var alternateCurrentItem = function() {
    var totalItems = $(itemList).children().length;
    currentItem++;
    if(currentItem === totalItems){
      currentItem =  0;
    }
    console.log(currentItem);
    itemList.children().eq(currentItem).fadeIn(500);
    setTimeout(ImmortalView.rotateImmortalListItemView, 3000);
  };

  return {
    appendImmortalList: appendImmortalList,
    rotateImmortalListItemView: rotateImmortalListItemView,
    hideImmortalListItemView: hideImmortalListItemView
  };
})();


