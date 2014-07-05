$(document).ready(function() {
  EventHandlerModule.bindClickEvents();

  var incomingUrl = window.location.search;
  var roomId = incomingUrl.split('=')[1];

  var getRoomId = function(data) {
    FirebaseModule.createFireBase(data.FireBaseRoomId);
    FirebaseModule.bindFirebaseActions();
    console.log("Is this being hit?")
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
  
  Session.initialSet();  //figure out the best place to put this session stuff.
  Session.expireSession();  //need to allow user to reset sesssion on rescan. Can use Session.reset().
  setInterval("Session.expireSession()", 10000);  

  sendRoomInfoRequest();

  ServerRequestModule.sendRoomInfoRequest();
});
