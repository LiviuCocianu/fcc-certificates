var clickedTitle = false;
var clickedContact = false;
var movementInPerc = 40;

window.onload = function() {
	// Set it open by default
	$("#title-container").css({
		transform: `translateY(-${movementInPerc}%)`
	});
	$("#info-card").css({
		transform: `translateY(${movementInPerc}%)`,
		opacity: 1
	});
	clickedTitle = true;

	if (screen.width > 1024) {
		$("#contacts-card").css({
			transform: `translateX(-${movementInPerc}%)`
		});
		$("#contacts-back").css({
			transform: `translateX(${movementInPerc}%)`,
			opacity: 1
		});
		clickedContact = true;
	} else {
		$("#contacts-card").css({
			transform: `translateY(-${movementInPerc}%)`
		});
		$("#contacts-back").css({
			transform: `translateY(${movementInPerc}%)`,
			opacity: 1
		});
		clickedContact = true;
	}

	// Click events
	$("#title-container").click(function () {
		if (!clickedTitle) {
			$("#title-container").css({
				transform: `translateY(-${movementInPerc}%)`
			});
			$("#info-card").css({
				transform: `translateY(${movementInPerc}%)`,
				opacity: 1
			});
			clickedTitle = true;
		} else {
			$("#title-container").css({
				transform: "translateY(0)"
			});
			$("#info-card").css({
				transform: "translateY(0)",
				opacity: 0
			});
			clickedTitle = false;
		}
	});

	$("#contacts-card").click(function () {
		if (!clickedContact) {
			if (screen.width > 1024) {
				$("#contacts-card").css({
					transform: `translateX(-${movementInPerc}%)`
				});
				$("#contacts-back").css({
					transform: `translateX(${movementInPerc}%)`,
					opacity: 1
				});
			} else {
				$("#contacts-card").css({
					transform: `translateY(-${movementInPerc}%)`
				});
				$("#contacts-back").css({
					transform: `translateY(${movementInPerc}%)`,
					opacity: 1
				});
			}
			clickedContact = true;
		} else {
			if (screen.width > 1024) {
				$("#contacts-card").css({
					transform: "translateX(0)"
				});
				$("#contacts-back").css({
					transform: "translateX(0)",
					opacity: 0
				});
			} else {
				$("#contacts-card").css({
					transform: "translateY(0)"
				});
				$("#contacts-back").css({
					transform: "translateY(0)",
					opacity: 0
				});
			}
			clickedContact = false;
		}
	});

	// Click events for project thumbnails
	// Vanilla webpages
	$("#tribute").click(function () {
		window.open("https://codepen.io/LiviuCocianu/full/pogyQaQ", "_blank");
	});
	$("#landing").click(function () {
		window.open("https://codepen.io/LiviuCocianu/full/yLeJjZY", "_blank");
	});
	$("#survey").click(function () {
		window.open("https://codepen.io/LiviuCocianu/full/MWKeKYN", "_blank");
	});
	$("#doc").click(function () {
		window.open("https://codepen.io/LiviuCocianu/full/qBbadxK", "_blank");
	});

	// React applications
	$("#quote").click(function () {
		window.open("https://codepen.io/LiviuCocianu/full/PLQeNB", "_blank");
	});
}
