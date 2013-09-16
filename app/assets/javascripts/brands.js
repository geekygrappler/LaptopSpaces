$(document).ready(function() {
	var brand_selected = false;
	
	$(".brand").click(function(e) {
		e.preventDefault();
		//if(brand_selected == false) {
			console.log(brand_selected);
			brand_selected = !brand_selected;
			console.log(brand_selected);
			$(this).parent().css("background", "#FF7C00");
			// for some fucking reason this click fires twice naming it redbull-selected-selected, very annoying.
			this.id = $(this).attr("id") + "-selected";
		/*} else {
			console.log(brand_selected);
			console.log("one already selected");
			$(".brands").each(function() { $(this).css("background", "white"); });
			$(".brand").each(function() { $(this).attr("id") }
			$(this).parent().css("background", "#FF7C00");
			this.id = $(this).attr("id") + "-selected";
		}*/
	
	});
});

	/*var brand_selection = false;

	$(".brands img").hover(function() {
		var path = $(this).attr("src");
		var png = ".png";
		if (path.slice(-13) != "-selected.png") {
			path = path.replace(png, "-selected.png");
			$(this).attr("src", path);
		}
	}, function() {
		var path = $(this).attr("src");
		console.log(path);
		var length = (path.length - 13);
		console.log(length)
		// path = path2.substring(0, length) + ".png";
		$(this).attr("src", path);
	});

	$(".brands img").click(function() {
		if(brand_selection == false) {
			brand_selection = !brand_selection;
			var path = $(this).attr("src");
			console.log(path);
		}
		/*var path = $(this).attr("src");
		var png = ".png";
		path.replace(png, "-selected.png");
		$(this).attr("src", path);*/