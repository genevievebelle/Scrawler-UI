var Drawing = (function() {
	var hasBeenSetup = false;

	var changeTab = function() {
		if ($(".draw-btn").val() === "draw") {
			$(".draw-btn").val("chat");
		} else {
			$(".draw-btn").val("draw");
		}
		$('.main').toggle();
		$(".draw").toggle();
		$("#colorholder").toggle();
		$("#input").toggle();
		if (!hasBeenSetup) {
			Draw.setup();
		}
		hasBeenSetup = true;
		window.scrollTo(0,document.body.scrollHeight);
	};

	return {
		changeTab: changeTab
	}
})();