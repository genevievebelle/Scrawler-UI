var ImmortalMessage = (function(immortalData){
  var buildImmortalMessage = function(immortalData) {
    for(i = 0; i < immortalData.length; i++){
      var immortalListItem = new ImmortalListItem(immortalData[i]);
      Window.immortalMessageList.append(immortalListItem.constructHtml())
    };
  ImmortalView.hideImmortalListItemView();
  };

  return {
    buildImmortalMessage: buildImmortalMessage
  };
})();
