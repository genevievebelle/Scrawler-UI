var VoteView = (function() {
  var jQueryObject;

  var changeMessageClass = function(){
    jQueryObject.removeClass("orange");
    jQueryObject.addClass("yellow");
  };

  var upVote = function() {
    jQueryObject = $(this);
    if (jQueryObject.hasClass("yellow")) {
      return;
    }
    var incomingUrl = window.location.search;
    var msg = {
      Name: jQueryObject.parent().find('.username').text(),
      Content: jQueryObject.parent().find(".content").text(),
      FirebaseId : FirebaseModule.getRoom(),
      MessageId: jQueryObject.attr("data-id"),
    }
    ServerRequest.upVoteAjaxRequest(msg);
  };

  return {
    upVote: upVote,
    jQueryObject: jQueryObject,
    changeMessageClass: changeMessageClass
  }
})();