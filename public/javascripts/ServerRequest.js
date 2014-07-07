var ServerRequest = (function(){
  var incomingUrl = window.location.search;

  var getRoomId = function(url) {
    return url.split('=')[1];
  };

  var getRoomInfo = function(data) {
    ChatView.appendRoomName(data.ChatroomName);
    ImmortalMessage.buildImmortalMessage(data.Messages);
    FirebaseModule.createFireBase(data.FireBaseRoomId);
    FirebaseModule.bindFirebaseActions();
    ImmortalView.hideImmortalListItemView();
    setTimeout(ImmortalView.rotateImmortalListItemView, 5000);
  };

  var sendRoomInfoRequest = function() {
    $.ajax({
      url: "http://scrawler.azurewebsites.net/chat/getroominformation?id="+ServerRequest.getRoomId(incomingUrl),
      type: "GET",
      success: ServerRequest.getRoomInfo,
      failure: function() {
        console.log("ajax failure");
      }
    });
  };

  return {
    sendRoomInfoRequest: sendRoomInfoRequest,
    getRoomId: getRoomId,
    getRoomInfo : getRoomInfo
  };
})();
