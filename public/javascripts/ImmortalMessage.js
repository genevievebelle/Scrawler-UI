var ImmortalMessage = (function(immortalData){

  var buildImmortalMessage = function(immortalData) {
  for(i = 0; i < immortalData.length; i++){
  console.log(immortalData);
    var content = immortalData[i].Content;
    var id = immortalData[i].Id;
    var date = moment(immortalData[i].Time).format("MMMM Do YYYY");
    ChatView.appendImmortalList(content, id, date);
    }
  };
  return {
    buildImmortalMessage: buildImmortalMessage
  };
})();
