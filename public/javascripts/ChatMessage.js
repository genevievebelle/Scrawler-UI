var ChatMessage = function(text, username, id){
    this.Id = id,
    this.Username = username,
    this.Content = text,
    this.Template = $("#message-template")
  };

ChatMessage.prototype = {
	constructHtml: function(){
		var source = this.Template.html();
		var template = Handlebars.compile(source);
		var context = { userName: this.Username, id: this.Id, Content: this.Content };
		var html = template(context);
		return html;
	},
};
