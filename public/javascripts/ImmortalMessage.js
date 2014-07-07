var ImmortalMessage = (function(immortalData){
  var buildImmortalMessage = function(immortalData) {
    for(i = 0; i < immortalData.length; i++){
      var immortalListItem = new ImmortalListItem(immortalData[i]);
      var immortalListItemView = new ImmortalListItemView(immortalListItem);
      ImmortalView.appendImmortalList(immortalListItemView);
    };
  };

  return {
    buildImmortalMessage: buildImmortalMessage
  };
})();
