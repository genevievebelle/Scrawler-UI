$(document).ready(function() {
  EventHandlerModule.bindClickEvents();
<<<<<<< HEAD

  var incomingUrl = window.location.search;
  var roomId = incomingUrl.split('=')[1];

  var getRoomId = function(data) {
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
  
  Session.set();
  Session.expireSession();
  sendRoomInfoRequest();
=======
  ServerRequestModule.sendRoomInfoRequest();
>>>>>>> 4f30064ca887ee1115d359c7ac9b9adc1d31ce1e
});
