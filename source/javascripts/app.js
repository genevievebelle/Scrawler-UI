$(document).ready(function() {
  EventHandlerModule.bindClickEvents();

  // Ajax request sending random code from URL to backend, get response that contains 
  // the firebase roomkey, as well as an array of saved messages for that room
  // pass room key in below
  
  FirebaseModule.createFireBase("roomkey");
  FirebaseModule.bindFirebaseActions();
});
