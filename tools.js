var switchPage = function(page) {
	var all = document.querySelectorAll("*")
	for(var i = 0; i < all.length; i++) {
		var attrs = all[i].attributes
		for(var j = 0; j < attrs.length; j++) {
			if(attrs.item(j).name === "page") {
				if(attrs.item(j).value === page) {
					all[i].style.display = "block"
				} else {
					all[i].style.display = "none"
				}
			}
		}
	}
}