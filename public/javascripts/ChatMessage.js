var ChatMessage = function(text, username, id){
    this.Id = id,
    this.Username = username,
    this.Content = text
  };

ChatMessage.prototype = {
	constructHtml: function(){
		return $('<li/>').html("<span class='glyphicon glyphicon-thumbs-up upvote orange' data-id='" + this.Id + "'></span><span class='username'>" + this.Username + "</span>: <span class='content'>" + this.Content + "</span>");
	}
};