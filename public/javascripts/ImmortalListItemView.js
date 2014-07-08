var ImmortalListItemView = function(immortalListItem) {
  this.parentWrapper  = '<li />';
  this.childrenWrapper = "<span class='time'>";
  this.html = '';
  this.buildHtml(immortalListItem);
};

ImmortalListItemView.prototype = {
  buildHtml: function(immortalListItem) {
    var htmlString = immortalListItem.content + '</br>' + this.childrenWrapper + immortalListItem.timeStamp + "</span>";
    this.html = $(this.parentWrapper).html(htmlString);
  }
};
