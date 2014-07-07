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
<<<<<<< HEAD
    var check = Trollguard.checkSpammer();
    if(check==true){
      var text = ChatWindow.messageInput.val();
      fb.push({text: text});
      ChatWindow.messageInput.val('');
    } else {
      Trollguard.fadeSend();
      alert("Spam")
    };
=======
    var text = ChatWindow.messageInput.val();
    fb.push({text: text});
    ChatWindow.messageInput.val('');
    Trollguard.incrementCounter();
>>>>>>> 2ff6ea43a2632013f3010db033e2e603ef3af663
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
