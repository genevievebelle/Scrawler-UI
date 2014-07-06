$(document).ready(function() {
  EventHandler.bindClickEvents();
  ServerRequest.sendRoomInfoRequest();

  setTimeout(ChatView.rotateImmortal, 3000);
  Session.initialSet();
});
