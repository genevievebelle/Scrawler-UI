var ServerRequest = (function(){
  var incomingUrl = window.location.search;

  var getRoomId = function(url) {
    return url.split('=')[1];
  };

  var getRoomInfo = function(data) {
    var Immortals = data.Messages;
    ImmortalMessage.buildImmortalMessage(Immortals);
    FirebaseModule.createFireBase(data.FireBaseRoomId);
    FirebaseModule.bindFirebaseActions();
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
