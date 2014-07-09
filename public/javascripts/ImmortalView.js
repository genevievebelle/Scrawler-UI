var ImmortalView = (function() {
  var currentItem = 0;
  var itemList = Window.immortalMessageList;

  // var appendImmortalList = function(immortalListItemView) {
  //   itemList.append(immortalListItemView.html);
  // };

  var hideImmortalListItemView = function() {
    itemList.children().hide();
    itemList.children().first().show();
    setTimeout(ImmortalView.rotateImmortalListItemView, 4000);
  };

  var rotateImmortalListItemView = function() {
    itemList.children().eq(currentItem).fadeOut(1000, ImmortalView.alternateCurrentItem);
    setTimeout(ImmortalView.rotateImmortalListItemView, 4000);
  };

  var alternateCurrentItem = function() {
    var totalItems = ImmortalView.getTotalItems();
    currentItem++;
    if(currentItem === totalItems){
      currentItem =  0;
    }
    itemList.children().eq(currentItem).fadeIn();
  };

  var getTotalItems = function() {
    return itemList.children().length;
  };

  return {
    rotateImmortalListItemView: rotateImmortalListItemView,
    hideImmortalListItemView: hideImmortalListItemView,
    alternateCurrentItem: alternateCurrentItem,
    getTotalItems: getTotalItems
  };
})();


