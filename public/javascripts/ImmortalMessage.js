var ImmortalMessage = (function(immortalData){
  var buildImmortalMessage = function(immortalData) {
    // for(i = 0; i < 1; i++){
    for(i = 0; i < immortalData.length; i++){
      var content = immortalData[i].Content;
      var date = moment(immortalData[i].Time).format("MMMM Do");
      ChatView.appendImmortalList(content, immortalData[i].Id, date);

    };
    $('.immortalMessageList li').first().hide();
    $('.immortalMessageList li').last().hide();
  };

  return {
    buildImmortalMessage: buildImmortalMessage
  };
})();
