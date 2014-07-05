var ServerRequestModule = (function(){
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
      url: "http://scrawler.azurewebsites.net/chat/getroominformation?id="+ServerRequestModule.getRoomId(incomingUrl),
      type: "GET",
      success: ServerRequestModule.getRoomInfo,
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
