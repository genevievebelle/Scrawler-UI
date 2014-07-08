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

	fadeSendButton: function(){
		Window.sendButton.css("background-color", "#8A8A8A");
	},

	restoreSendButton: function(){
		Window.sendButton.css("background-color", "black");
	}
};


