var drawLineonTouch = function(){
	$('canvas').addEventListener("touchstart", touchstartHandler, false);
	$('canvas').addEventListener("touchmove", touchmoveHandler, false);
	$('canvas').addEventListener("touchcancel", touchcancelHandler, false);
};