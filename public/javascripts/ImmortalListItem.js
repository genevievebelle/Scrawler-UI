var ImmortalListItem = function(args) {
  this.content   = args.Content;
  this.messageId = args.Id;
  this.timeStamp = moment(args.Time).format("MMMM Do");
  this.userName = args.Username;
};
