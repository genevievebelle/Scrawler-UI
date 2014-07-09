var ServerRequest = (function(){
  var incomingUrl = window.location.search;
  var roomInfoBaseUrl = "http://scrawler.azurewebsites.net/chat/getroominformation?id=";

  var getRoomId = function(url) {
    return url.split('=')[1];
  };

  var setRoomInfo = function(data) {
    if (data.Error === "Invalid") {
      window.location.href = data.Address;
      console.log("here");
    }
    Window.appendRoomName(data.ChatroomName);
    ImmortalMessage.buildImmortalMessage(data.Messages);
    FirebaseModule.createFireBase(data.FireBaseRoomId);
    FirebaseModule.bindFirebaseActions();
  };

  var sendRoomInfoRequest = function() {
    $.ajax({
      url: (roomInfoBaseUrl + ServerRequest.getRoomId(incomingUrl)),
      type: "GET",
      success: ServerRequest.setRoomInfo,
      failure: Errors.ajaxErrorMessage
      });
  };

  var upVoteAjaxRequest = function(msg) {
    $.ajax({
      method: "POST",
      url: "http://scrawler.azurewebsites.net/chat/savemessage",
      data: msg,
      success: EventHandler.changeMessageClass,
      failure: Errors.ajaxErrorMessage
    });
  };

  // So you expose getRoomInfo and getRoomId publicly when they are not
  // actually used anywhere outside this module. I presume this was done
  // to those methods testable. While this might be in part due to the
  // just the way javascript is I think there is one thing you are
  // missing here that is in part revealied by your method names.
  //
  // While sendRoomInfoRequest has room in the name it is actually doing
  // an AJAX call so it makes sence that it is in the ServerRequest
  // module (it is dealing with the server).
  //
  // The other two functions on the other hand have nothing to do with
  // the backend server. I would suggest then, based on the names, they
  // should go into a Room module. It makes sense for a room module to
  // then expose functions like "getRoomId" and "getRoomInfo/setRoomUp"
  // which you can test.
  return {
    sendRoomInfoRequest: sendRoomInfoRequest,
    getRoomId: getRoomId,
    setRoomInfo : setRoomInfo,
    roomInfoBaseUrl: roomInfoBaseUrl,
    incomingUrl: incomingUrl
  };
})();
