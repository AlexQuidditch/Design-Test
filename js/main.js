$(document).ready(function () {

	$(".b-menu-artworks-list__item").on("click", function () {
		$("body").removeClass("artworks about contacts").addClass("artworks");
		//		$("body").removeClass("about, contacts");
	});

	$(".b-menu-about-list__item").on("click", function () {
		$("body").removeClass("artworks about contacts").addClass("about");
		//		$("body").removeClass("artworks, contacts");
	});

	$(".b-menu-contact-list__item").on("click", function () {
		$("body").removeClass("artworks about contacts").addClass("contacts");
		//		$("body").removeClass("about, artworks");
	});
});
