var ImmortalListItemView = function(immortalListItem) {
  this.parentWrapper  = '<li />';
  this.childrenWrapper = "<span class='time'>";
  this.html = '';
  this.buildHtml(immortalListItem);
};

