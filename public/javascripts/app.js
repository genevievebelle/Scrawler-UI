$(document).ready(function() {
  EventHandlerModule.bindClickEvents();

  var incomingUrl = window.location.search;
  var roomId = incomingUrl.split('=')[1]

  var sendRoomInfoRequest = function() {
    $.ajax({
      url: "http://scrawler.azurewebsites.net/chat/getroominformation?id="+roomId,
      type: "GET",
      success: getRoomId
    });
  };

  sendRoomInfoRequest();

  var firebaseRoomId

  var getRoomId = function(data) {
    firebaseRoomId = data.FireBaseRoomId;
  };

  FirebaseModule.createFireBase(firebaseRoomId);
  FirebaseModule.bindFirebaseActions();
});
