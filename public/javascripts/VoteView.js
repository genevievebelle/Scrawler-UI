var VoteView = (function() {
  var upVote = function() {
    jQueryObject = $(this);
    if (jQueryObject.hasClass("red")) {
      return;
    }
    var incomingUrl = window.location.search;
    var msg = {
      Name: jQueryObject.parent().find('.username').text(),
      Content: jQueryObject.parent().find(".content").text(),
      FirebaseId : FirebaseModule.getRoom(),
      MessageId: jQueryObject.attr("data-id"),
    }
    EventHandler.upVoteAjaxRequest(msg);
  };

  return {
    upVote: upVote
  }
})();