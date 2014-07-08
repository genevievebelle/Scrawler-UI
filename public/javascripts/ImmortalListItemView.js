var ImmortalListItemView = function(immortalListItem) {
  this.parentWrapper  = '<li />';
  this.childrenWrapper = "<span class='time'>";
  this.html = '';
  this.buildHtml(immortalListItem);
};

<<<<<<< HEAD
=======
ImmortalListItemView.prototype = {
  buildHtml: function(immortalListItem) {
    var htmlString = this.htmlStringConstructor(immortalListItem);
    this.html = $(this.parentWrapper).html(htmlString);
  },

  htmlStringConstructor: function(immortalListItem) {
    return immortalListItem.content + '</br>' + ImmortalListItemView.childrenWrapper + immortalListItem.timeStamp + "</span>";
  }
};
>>>>>>> d665bd637bd8fdd2ad8cebe617896a563c440f88
