


var slideIndex = 1;

/*   change slide automatically     */
function autoShowSlides() {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}
	slides[slideIndex-1].style.display = "block";
	setTimeout(autoShowSlides, 5000); // Change image every 2 seconds
}

var scrollPos = 0;

function autoScroll (scrollDestination) {
	var sectionScroll = document.getElementById('section');
	var direction = (scrollPos - scrollDestination);	/*>0 left; <0 right*/
	var scrollAmountLeft = Math.abs(scrollPos - scrollDestination);
	function scrollLoop() {
		setTimeout(function() {
			if (direction > 0) {
				scrollPos = scrollPos - 5;
				sectionScroll.scrollLeft = scrollPos;
			}
			else {
				scrollPos = scrollPos + 5;
				sectionScroll.scrollLeft = scrollPos;
			}
			scrollAmountLeft = scrollAmountLeft - 5;
			if (scrollAmountLeft > 0) {
				scrollLoop();
			}
		},2);
	}
	scrollLoop();
}


function genRandSection () {
	scrollPos = Math.round(document.getElementById('section').scrollLeft / 340) * 340;		/*round ScrollPos to closest section*/
	document.getElementById('section').scrollLeft = scrollPos;								/*set scroll position to scrollPos*/
	var randSection = Math.floor(Math.random() * (14-3));			/*-2 car 3 sections apparaissent en meme temps*/
	/*console.log("section :" + randSection);*/
	autoScroll (randSection * 340);
}

function getNextSection () {
	scrollPos = Math.round(document.getElementById('section').scrollLeft / 340) * 340;		/*round ScrollPos to closest section*/
	document.getElementById('section').scrollLeft = scrollPos;								/*set scroll position to scrollPos*/
	if (scrollPos < 3400) {
		autoScroll(scrollPos + 340*3);
	}
	else {
		autoScroll(0);
	}
}


var repeater;
function scrollTimer() {
	console.log("scrollTimer()");
	repeater=setInterval(getNextSection, 7000);
}


