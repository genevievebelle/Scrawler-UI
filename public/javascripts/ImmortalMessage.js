var ImmortalMessage = (function(immortalData){
  var buildImmortalMessage = function(immortalData) {
    for(i = 0; i < immortalData.length; i++){
      var content = immortalData[i].Content;
      var date = moment(immortalData[i].Time).format("MMMM Do");
      ChatView.appendImmortalList(content, immortalData[i].Id, date);
    };
  };

  return {
    buildImmortalMessage: buildImmortalMessage
  };
})();
