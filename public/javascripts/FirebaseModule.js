var FirebaseModule = (function(){
  var fb;

  var createFireBase = function(roomKey) {
    fb = new Firebase("https://intense-fire-3380.firebaseio.com/" + roomKey);
  };

  var bindFirebaseActions = function() {
    var query = fb.limit(200);
    query.on('child_added', FirebaseModule.snapshotFunction);
  };

  var sendMessageClickEvent = function(event) {
    event.preventDefault();
    var text = Window.messageInput.val();
    fb.push({text: text});
    ChatWindow.messageInput.val('');
    Trollguard.incrementCounter();
  };

  var snapshotFunction = function(snapshot) {
    var message = snapshot.val();
    ChatView.appendMessageDiv(message.text);
  };

  return {
    fb: fb,
    sendMessageClickEvent: sendMessageClickEvent,
    snapshotFunction: snapshotFunction,
    bindFirebaseActions: bindFirebaseActions,
    createFireBase: createFireBase
  };
})();
