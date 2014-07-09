var FirebaseModule = (function(){
  var fb;
  var room;

  var createFireBase = function(roomKey) {
    room = roomKey;
    fb = new Firebase("https://intense-fire-3380.firebaseio.com/" + roomKey);
  };

  var getRoom = function(){
    return room;
  }

  var bindFirebaseActions = function() {
    var query = fb.limit(200);
    query.on('child_added', FirebaseModule.snapshotFunction);
  };

  var sendMessagetoFireBase = function(message){
    fb.push({text: message, username: localStorage.getItem("Username")});
    Window.messageInput.val('');
    return;
  };

  var snapshotFunction = function(snapshot) {
    var message = snapshot.val();
    ChatView.appendMessageDiv(message.text, message.username, snapshot.name());
  };

  return {
    fb: fb,
    snapshotFunction: snapshotFunction,
    bindFirebaseActions: bindFirebaseActions,
    createFireBase: createFireBase,
    room: room,
    getRoom: getRoom,
    sendMessagetoFireBase: sendMessagetoFireBase
  };
})();
