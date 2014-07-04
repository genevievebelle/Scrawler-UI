var ServerRequestModule = (function(){
  var incomingUrl = window.location.search;
  var roomId = incomingUrl.split('=')[1];

  var getRoomId = function(data) {
    console.log(data.Messages.content)
    FirebaseModule.createFireBase(data.FireBaseRoomId);
    FirebaseModule.bindFirebaseActions();
  };

  var sendRoomInfoRequest = function() {
    $.ajax({
      url: "http://scrawler.azurewebsites.net/chat/getroominformation?id="+roomId,
      type: "GET",
      success: getRoomId,
      failure: function() {
        console.log("ajax failure");
      }
    });
  };
  return {
    sendRoomInfoRequest: sendRoomInfoRequest
  };
})();
