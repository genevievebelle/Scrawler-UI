var Window = {
  messageInput: $("#message"),
  chatLog: $(".messagesDiv"),
  sendButton: $(".send-message"),
  immortalMessageList: $(".immortalMessageList"),
  roomName: $(".room-name"),

  appendSystemMessage: function(text) {
    $('<li/>').html(text).appendTo(Window.chatLog).css('color', 'red');
    window.scrollTo(0,document.body.scrollHeight);
  },

  appendRoomName: function(name) {
  	Window.roomName.text(name);
  },

  clearChat: function(){
		Window.chatLog.empty();
	},

  restoreSendButton: function(){
    Window.sendButton.css("background-color", "black");
  },

	fadeSendButton: function(){
    setTimeout(Window.restoreSendButton, 5000);
		Window.sendButton.css("background-color", "#8A8A8A");
	},

  redirectTo: function(url) {
    window.location.href = url;
  }
};


