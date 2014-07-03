$(document).ready( function() {
  var fb = new Firebase("https://intense-fire-3380.firebaseio.com/room-key");

    $('#send-message').on('click', function (event) {
      event.preventDefault();
        var text = $('#message').val();
        console.log(text)
        fb.push({text: text});
        $('#message').val('');
    });
    fb.on('child_added', function(snapshot) {
      var message = snapshot.val();
      displayChatMessage(message.text);
    });
    function displayChatMessage(text) {
      $('<div/>').text(text).appendTo($('#messagesDiv'));
      $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
    }
});
