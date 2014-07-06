$(document).ready(function() {
  EventHandler.bindClickEvents();
  Session.initialSet();
  ServerRequest.sendRoomInfoRequest();
});
