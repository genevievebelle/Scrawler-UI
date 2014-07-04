var ServerRequestModule = (function(){
  var incomingUrl = window.location.search;
  var roomId = incomingUrl.split('=')[1];

<<<<<<< HEAD
  var getRoomId = function(data) {
    console.log(data.Messages.content)
    localStorage.setItem("EntryTime", timenow);
=======
  var getRoomInfo = function(data) {
    var Immortals = data.Messages;
    ImmortalMessage.buildImmortalMessage(Immortals);
>>>>>>> 4f30064ca887ee1115d359c7ac9b9adc1d31ce1e
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
