var ServerRequest = (function(){
  var incomingUrl = window.location.search;

  var getRoomId = function(url) {
    return url.split('=')[1];
  };

  // Not sure about the name, you call it "get..." but it doesn't return
  // anything. Perhaps a "set..." or something else would reveal the
  // intentions of this code better.
  var getRoomInfo = function(data) {
    Window.appendRoomName(data.ChatroomName);
    ImmortalMessage.buildImmortalMessage(data.Messages);
    FirebaseModule.createFireBase(data.FireBaseRoomId);
    FirebaseModule.bindFirebaseActions();
  };

  // How to build up the url should be the responsibility of another
  // (private) function. Also rather than using a string inline
  // have the base url stored in a variable or object literal of some
  // kind. Same goes for all AJAX calls.
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
    getRoomInfo : getRoomInfo
  };
})();
