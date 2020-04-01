		var link = document.querySelector(".login");
		var popup = document.querySelector(".popup_form");
		var close = popup.querySelector(".modal_content_close");
		var form = popup.querySelector("form");
		var login = popup.querySelector("[name=login]");
		var password = popup.querySelector("[name=password]");
		var storage = localStorage.getItem("login");

		link.addEventListener("click", function(e) {
			e.preventDefault();
			popup.classList.add("modal_content_show");
			if (storage) {
				console.log('storage yes')
				login.value = storage;
				password.focus();
			} else {
				console.log('storage no')
				login.focus();
			}
		});
		close.addEventListener("click", function(event) {
			event.preventDefault();
			popup.classList.remove("modal_content_show");
			popup.classList.remove("modal_error");
		});
		form.addEventListener("submit", function(event) {
			if (!login.value || !password.value) {
				event.preventDefault();
				popup.classList.add("modal_error");
			} else {
				localStorage.setItem("login", login.value);
			}
		});
		window.addEventListener("keydown", function(event) {
			if (event.keyCode === 27) {
				if (popup.classList.containes("modal_content_show")) {
					popup.classList.remove("modal_content_show");
					popup.classList.remove("modal_error");
				}
			}
		});

		var menuOpen = document.querySelector(".navbar_left__link");
		var popupMenu = document.querySelector(".dropdown");

		menuOpen.addEventListener("click", function(event) {
			event.preventDefault();
			popupMenu.classList.toggle("dropdown_show");
		});

		// map popup
		if ( document.getElementsByClassName("popup_map").length > 0 ) {
			var mapOpen = document.querySelector(".open_map");
			var mapPopup = document.querySelector(".popup_map");
			var mapClose = mapPopup.querySelector(".modal_content_close");

			mapOpen.addEventListener("click", function(event) {
				event.preventDefault();
				mapPopup.classList.add("modal_content_show");
			});

			mapClose.addEventListener("click", function(event) {
				event.preventDefault();
				mapPopup.classList.remove("modal_content_show");
			});
		};

		window.addEventListener("keydown", function(event) {
			if (event.keyCode === 27) {
				if (mapPopup.classList.containes("modal_content_show")) {
					mapPopup.classList.remove("modal_content_show");
				}
			}
		});
