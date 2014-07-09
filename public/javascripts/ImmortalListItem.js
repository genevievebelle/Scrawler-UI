var ImmortalListItem = function(args) {
  this.content = args.Content;
  this.messageId = args.Id;
  this.timeStamp = moment(args.Time).format("MMMM Do");
  this.userName = args.Username;
  this.Template = $("#immortal-message-template")
};

ImmortalListItem.prototype = {
	constructHtml: function(){
		var source = this.Template.html();
		var template = Handlebars.compile(source);
		var context = { userName: this.userName, timeStamp: this.timeStamp, content: this.content };
		var html = template(context);
		return html;
	},
};
