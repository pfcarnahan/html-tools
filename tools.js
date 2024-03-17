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
} // Switches the current page to those elements that match page = 'page'

var bindButton = function(id, page) {
	document.getElementById(id).addEventListener("click", () => switchPage(page))
} // Binds button with id 'id' to switch page to 'page'

var bindButtons = function(className) {
	var buttons = document.querySelectorAll(`button.${className}`)
	for(var i = 0; i < buttons.length; i++) {
		var attrs = buttons[i].attributes
		for(var j = 0; j < attrs[i].length; j++) {
			if(attrs.item(j).name === "to") {
				bindButton(buttons[i].id, attrs.item(j).value)
				break;
			}
		}
	}
} // Binds all buttons of the given 'className' to their specified to = 'page id'