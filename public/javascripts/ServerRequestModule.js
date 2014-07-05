var ServerRequestModule = (function(){
  var incomingUrl = window.location.search;
  var roomId = incomingUrl.split('=')[1];

  var getRoomInfo = function(data) {
    var Immortals = data.Messages;
    ImmortalMessage.buildImmortalMessage(Immortals);
    FirebaseModule.createFireBase(data.FireBaseRoomId);
    FirebaseModule.bindFirebaseActions();
  };

  var sendRoomInfoRequest = function() {
    $.ajax({
      url: "http://scrawler.azurewebsites.net/chat/getroominformation?id="+roomId,
      type: "GET",
      success: getRoomInfo,
      failure: function() {
        console.log("ajax failure");
      }
    });
  };
  return {
    sendRoomInfoRequest: sendRoomInfoRequest
  };
})();
