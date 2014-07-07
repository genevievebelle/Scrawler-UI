$(document).ready(function() {
  EventHandler.bindClickEvents();
  ServerRequest.sendRoomInfoRequest();

  Session.initialSet();
});
