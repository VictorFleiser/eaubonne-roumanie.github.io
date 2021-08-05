
var slideShow1 = {value:1};
var slideShow2 = {value:1};
var slideShow3 = {value:1};
var slideShow4 = {value:1};
var slideShow5 = {value:1};
var slideShow6 = {value:1};
var slideShow7 = {value:1};
var slideShow8 = {value:1};
var slideShow9 = {value:1};
function startAutoShowSlides() {
	autoShowSlides(document.getElementById('slideShow1'), slideShow1);
	setInterval("autoShowSlides(document.getElementById('slideShow1'), slideShow1)", 2000);
//	autoShowSlides(document.getElementById('slideShow2'), slideShow2);
//	setInterval("autoShowSlides(document.getElementById('slideShow2'), slideShow2)", 1000);
	autoShowSlides(document.getElementById('slideShow3'), slideShow3);
	setInterval("autoShowSlides(document.getElementById('slideShow3'), slideShow3)", 2000);
	autoShowSlides(document.getElementById('slideShow4'), slideShow4);
	setInterval("autoShowSlides(document.getElementById('slideShow4'), slideShow4)", 2000);
	autoShowSlides(document.getElementById('slideShow5'), slideShow5);
	setInterval("autoShowSlides(document.getElementById('slideShow5'), slideShow5)", 2000);
	autoShowSlides(document.getElementById('slideShow6'), slideShow6);
	setInterval("autoShowSlides(document.getElementById('slideShow6'), slideShow6)", 2000);
	autoShowSlides(document.getElementById('slideShow7'), slideShow7);
	setInterval("autoShowSlides(document.getElementById('slideShow7'), slideShow7)", 2000);
	autoShowSlides(document.getElementById('slideShow6'), slideShow8);
	setInterval("autoShowSlides(document.getElementById('slideShow8'), slideShow8)", 2000);
	autoShowSlides(document.getElementById('slideShow7'), slideShow9);
	setInterval("autoShowSlides(document.getElementById('slideShow9'), slideShow9)", 2000);
}


/*   change slide automatically     */
function autoShowSlides(elt, slideIndex) {
	var i;
	var slides = elt.getElementsByClassName("mySlides");
	slides[slideIndex.value-1].style.display = "none";
	/*for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}*/
	slideIndex.value++;
	if (slideIndex.value > slides.length) {slideIndex.value = 1}
	slides[slideIndex.value-1].style.display = "block";
}

