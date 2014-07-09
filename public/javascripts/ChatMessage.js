var ChatMessage = function(text, username, id){
    this.Id = id,
    this.Username = username,
    this.Content = text
  };

// Build up that huge string in seperate methods or use a template of some sort
ChatMessage.prototype = {
	constructHtml: function(){
		return $('<li/>').html("<span class='glyphicon glyphicon-thumbs-up upvote orange' data-id='" + this.Id + "'></span><span class='username'>" + this.Username + "</span>: <span class='content'>" + this.Content + "</span>");
	}
};
