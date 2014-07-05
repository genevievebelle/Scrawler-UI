$(document).ready(function() {
  EventHandlerModule.bindClickEvents();

  Session.initialSet();  //figure out the best place to put this session stuff.
  Session.expireSession();  //need to allow user to reset sesssion on rescan. Can use Session.reset().
  setInterval("Session.expireSession()", 10000);

  ServerRequestModule.sendRoomInfoRequest();
});
