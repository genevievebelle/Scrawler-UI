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
    // Should be in EventHandler?
    query.on('child_added', FirebaseModule.snapshotFunction);
  };

  // Had to parse out what is going on here. I think this function is trying
  // to do more than one thing. It has a preventDefault so it is a view
  // type thing but it is also talking to Firebase.
  var sendMessageClickEvent = function(event) {
    event.preventDefault();
    var check = Trollguard.checkSpammer();
    if(check==true){
      var text = Window.messageInput.val();
      fb.push({text: text, username: localStorage.getItem("Username")});
      Window.messageInput.val('');
    } else {
      Trollguard.fadeSend();
      ChatView.appendSystemMessage("Messaging disabled for 5 seconds");
    };
  };

  // Appending to divs? Don't think this is a Firebase thing but a view thing.
  var snapshotFunction = function(snapshot) {
    var message = snapshot.val();
    ChatView.appendMessageDiv(message.text, message.username, snapshot.name());
  };

  return {
    fb: fb,
    sendMessageClickEvent: sendMessageClickEvent,
    snapshotFunction: snapshotFunction,
    bindFirebaseActions: bindFirebaseActions,
    createFireBase: createFireBase,
    room: room,
    getRoom: getRoom
  };
})();
