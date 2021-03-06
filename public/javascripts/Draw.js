var Draw = (function () {
  var setup = function() {
    //Set up some globals
    var pixSize = 4, lastPoint = null, currentColor = "000", mouseDown = 0;

    //Create a reference to the pixel data for our drawing.
    var pixelDataRef = new Firebase('https://intense-fire-3380.firebaseio.com/draw'+ FirebaseModule.getRoom());

    // Set up our canvas
    var myCanvas = document.getElementById('drawing-canvas');
    var myContext = myCanvas.getContext ? myCanvas.getContext('2d') : null;
    if (myContext == null) {
      alert("You must use a browser that supports HTML5 Canvas to run this demo.");
      return;
    }

    //Setup each color palette & add it to the screen
    var colors = ["HAND", "ERA", "000","f00","0f0","00f","f05","f80","cf0","08f","408", "fff"];
    for (c in colors) {
      if (colors[c] === "HAND") {
        console.log(colors[c]);
        var item = $('<div/>').css("background-color", '#fff').addClass("colorbox").addClass("hand");
      } else if (colors[c] === "ERA") {
        var item = $('<div/>').css("background-color", '#fff').addClass("colorbox").addClass("eraser");
      } else {
      var item = $('<div/>').css("background-color", '#' + colors[c]).addClass("colorbox");
      };
      item.click((function () {
        var col = colors[c];
        return function () {
          pixSize = 4;
          currentColor = col;
        };
      })());
      item.appendTo('#colorholder');
    }

    $('.hand').append("<span class='fa fa-arrows hand-img'></span>");

    myCanvas.onmousedown = function () {mouseDown = 1;};
    myCanvas.onmouseout = myCanvas.onmouseup = function () {
    mouseDown = 0; lastPoint = null;
    };
    $(myCanvas).touchstart(function() {mouseDown=1;});
    $(myCanvas).touchmove(function() {mouseDown=1;});
    $(myCanvas).touchleave = $(myCanvas).touchend(function() {
    mouseDown = 0; lastPoint = null;
    });

    var useEraserBrush = function(x0, y0){
        pixelDataRef.child(x0 + ":" + y0).set(null);
        pixelDataRef.child((x0+1) + ":" + (y0+1)).set(null);
        pixelDataRef.child((x0+1) + ":" + y0).set(null);
        pixelDataRef.child((x0+1) + ":" + (y0-1)).set(null);
        pixelDataRef.child(x0 + ":" + (y0+1)).set(null);
        pixelDataRef.child(x0 + ":" + (y0-1)).set(null);
        pixelDataRef.child((x0-1) + ":" + (y0+1)).set(null);
        pixelDataRef.child((x0-1) + ":" + y0).set(null);
        pixelDataRef.child((x0-1) + ":" + (y0-1)).set(null);
      };

    //Draw a line from the mouse's last position to its current position
    var drawLineOnMouseMove = function(e) {
      if (!mouseDown) return;
      if (currentColor === "HAND") return;
      e.preventDefault();
      //Checks to see whether the event is a touch or mouse event and assigns e 
      //to ensure that e.pageX/e.pageY can be accessed. 
      e = (e.type === "touchstart"|| e.type === "touchmove") ? e.originalEvent.changedTouches[0] : e;
      // Bresenham's line algorithm. We use this to ensure smooth lines are drawn
      var offset = $('canvas').offset();
      var x1 = Math.floor((e.pageX - offset.left) / pixSize - 1),
        y1 = Math.floor((e.pageY - offset.top) / pixSize - 1);
      var x0 = (lastPoint == null) ? x1 : lastPoint[0];
      var y0 = (lastPoint == null) ? y1 : lastPoint[1];
      var dx = Math.abs(x1 - x0), dy = Math.abs(y1 - y0);
      var sx = (x0 < x1) ? 1 : -1, sy = (y0 < y1) ? 1 : -1, err = dx - dy;
      while (true) {
        //write the pixel into Firebase, or if we are drawing white, remove the pixel
        if(currentColor != "ERA"){
          pixelDataRef.child(x0 + ":" + y0).set(currentColor === "fff" ? null : currentColor);
        } else useEraserBrush(x0, y0);
        if (x0 == x1 && y0 == y1) break;
        var e2 = 2 * err;
        if (e2 > -dy) {
          err = err - dy;
          x0 = x0 + sx;
        }
        if (e2 < dx) {
          err = err + dx;
          y0 = y0 + sy;
        }
      }
      lastPoint = [x1, y1];
    };

  $(myCanvas).mousemove(drawLineOnMouseMove);
  $(myCanvas).mousedown(drawLineOnMouseMove);
  $(myCanvas).touchmove(drawLineOnMouseMove);
  $(myCanvas).touchstart(drawLineOnMouseMove);

    // Add callbacks that are fired any time the pixel data changes and adjusts the canvas appropriately.
    // Note that child_added events will be fired for initial pixel data as well.
  var drawPixel = function(snapshot) {
      var coords = snapshot.name().split(":");
      myContext.fillStyle = "#" + snapshot.val();
      myContext.fillRect(parseInt(coords[0]) * pixSize, parseInt(coords[1]) * pixSize, pixSize, pixSize);
  };
  var clearPixel = function(snapshot) {
      var coords = snapshot.name().split(":");
      myContext.clearRect(parseInt(coords[0]) * pixSize, parseInt(coords[1]) * pixSize, pixSize, pixSize);
    };
    pixelDataRef.on('child_added', drawPixel);
    pixelDataRef.on('child_changed', drawPixel);
    pixelDataRef.on('child_removed', clearPixel);
  };

  return {
    setup: setup
  }
})();
