var ImmortalListItemView = function(immortalListItem) {
  this.parentWrapper  = '<li />';
  this.html = '';
  this.buildHtml(immortalListItem);
};

ImmortalListItemView.prototype = {
  buildHtml: function(immortalListItem) {
    var htmlString = this.htmlStringConstructor(immortalListItem);
    this.html = $(this.parentWrapper).html(htmlString);
  },

  // TODO: Convert this to handlebars
  htmlStringConstructor: function(immortalListItem) {
    return immortalListItem.content + "</br>" +
    "<span class='time'>" + immortalListItem.timeStamp + "</span>" +
    "<span class='user-name'>" + immortalListItem.userName + "</span>";
  },
};

