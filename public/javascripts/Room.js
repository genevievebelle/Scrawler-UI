var Room = (function() {
	var getRoomId = function(url) {
    return url.split('=')[1];
  };

  var setRoomInfo = function(data) {
    if (data.Error === "Invalid") {
      window.location.href = data.Address;
    }
    Window.appendRoomName(data.ChatroomName);
    ImmortalMessage.buildImmortalMessage(data.Messages);
    FirebaseModule.createFireBase(data.FireBaseRoomId);
    FirebaseModule.bindFirebaseActions();
  };

  return {
  	getRoomId: getRoomId,
  	setRoomInfo: setRoomInfo
  };
})();