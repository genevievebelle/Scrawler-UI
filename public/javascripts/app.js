$(document).ready(function() {
  EventHandler.bindClickEvents();
  ServerRequest.sendRoomInfoRequest();

  setTimeout(ImmortalView.rotateImmortal, 10000);
  Session.initialSet();
});
