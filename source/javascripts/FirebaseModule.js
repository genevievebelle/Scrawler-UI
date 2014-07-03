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
    displayChatMessage(message.text);
  };

  var displayChatMessage = function(text) {
    $('<div/>').text(text).appendTo($(ChatWindow.chatLog));
    $(ChatWindow.chatLog)[0].scrollTop = $(ChatWindow.chatLog)[0].scrollHeight;
  };

  return {
    fb: fb,
    sendMessageClickEvent: sendMessageClickEvent,
    snapshotFunction: snapshotFunction,
    bindFirebaseActions: bindFirebaseActions
  };
})();
