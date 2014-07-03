var FirebaseModule = (function(){
  var roomKey = "random";
  var fb = new Firebase("https://intense-fire-3380.firebaseio.com/" + roomKey);

  var bindFirebaseActions = function() {
    fb.on('child_added', FirebaseModule.snapshotFunction);
  };

  var sendMessageClickEvent = function(event) {
    event.preventDefault();
    var text = $(ChatWindow.messageInput).val();
    fb.push({text: text});
    $(ChatWindow.messageInput).val('');
  };

  var snapshotFunction = function(snapshot) {
    var message = snapshot.val();
    ChatView.appendMessageDiv(message.text);
  };

  return {
    fb: fb,
    sendMessageClickEvent: sendMessageClickEvent,
    snapshotFunction: snapshotFunction,
    bindFirebaseActions: bindFirebaseActions
  };
})();
