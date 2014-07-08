var ImmortalListItemView = function(immortalListItem) {
  this.parentWrapper  = '<li />';
  this.childrenWrapper = "<span class='time'>";
  this.html = '';
  this.buildHtml(immortalListItem);
};

ImmortalListItemView.prototype = {
  buildHtml: function(immortalListItem) {
    var htmlString = this.htmlStringConstructor(immortalListItem);
    this.html = $(this.parentWrapper).html(htmlString);
  },

  htmlStringConstructor: function(immortalListItem) {
    return immortalListItem.content + '</br>' + ImmortalListItemView.childrenWrapper + immortalListItem.timeStamp + "</span>";
  }
};
