var ServerRequest = (function(){
  var incomingUrl = window.location.search;
  var roomInfoBaseUrl = "http://scrawler.azurewebsites.net/chat/getroominformation?id=";

  var sendRoomInfoRequest = function() {
    $.ajax({
      url: (roomInfoBaseUrl + Room.getRoomId(incomingUrl)),
      type: "GET",
      success: Room.setRoomInfo,
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

  return {
    sendRoomInfoRequest: sendRoomInfoRequest,
    roomInfoBaseUrl: roomInfoBaseUrl,
    incomingUrl: incomingUrl
  };
})();
