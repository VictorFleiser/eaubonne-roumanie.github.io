


let radios_q1 = document.getElementsByName('q1');
let radios_q2 = document.getElementsByName('q2');
let radios_q3 = document.getElementsByName('q3');
let radios_q4 = document.getElementsByName('q4');
let radios_q5 = document.getElementsByName('q5');
let radios_q6 = document.getElementsByName('q6');
let radios_q7 = document.getElementsByName('q7');
let radios_q8 = document.getElementsByName('q8');

let messageFin = document.getElementById('messageFin');
let score = 0;

//	reset button
let reset_box = document.getElementById('reset');

reset_box.addEventListener('click', function() {
	window.location.reload();
});


//	send button
let send_box = document.getElementById('send_box');

send_box.addEventListener('click', function() {
	//send_box.preventDefault();
	messageFin.innerHTML = "Hello World";
	valide ();
});







function valide () {
	score = 0;
//	Question 1

	if (radios_q1[0].checked) {
		score += 1;
		document.getElementById('question1').getElementsByTagName('label')[0].classList.add('correct');
		document.getElementById('question1').getElementsByClassName('vide')[0].innerHTML = '<span class="colorGreen">Bravo, Bonne réponse!</span>'
	}
	else if (radios_q1[1].checked) {
		document.getElementById('question1').getElementsByClassName('vide')[0].innerHTML = '<span class="colorRed">La bonne réponse était Latine</span>'
		document.getElementById('question1').getElementsByTagName('label')[1].classList.add('incorrect');
	}
	else if (radios_q1[2].checked) {
		document.getElementById('question1').getElementsByClassName('vide')[0].innerHTML = '<span class="colorRed">La bonne réponse était Latine</span>'
		document.getElementById('question1').getElementsByTagName('label')[2].classList.add('incorrect');
	}

//	Question 2

	if (radios_q2[0].checked) {
		document.getElementById('question2').getElementsByClassName('vide')[0].innerHTML = '<span class="colorRed">La bonne réponse était Orthodoxes</span>'
		document.getElementById('question2').getElementsByTagName('label')[0].classList.add('incorrect');
	}
	else if (radios_q2[1].checked) {
		score += 1;
		document.getElementById('question2').getElementsByTagName('label')[1].classList.add('correct');
		document.getElementById('question2').getElementsByClassName('vide')[0].innerHTML = '<span class="colorGreen">Bravo, Bonne réponse!</span>'
	}
	else if (radios_q2[2].checked) {
		document.getElementById('question2').getElementsByClassName('vide')[0].innerHTML = '<span class="colorRed">La bonne réponse était Orthodoxes</span>'
		document.getElementById('question2').getElementsByTagName('label')[2].classList.add('incorrect');
	}
	
//	Question 3

	if (radios_q3[0].checked) {
		document.getElementById('question3').getElementsByClassName('vide')[0].innerHTML = '<span class="colorRed">La bonne réponse était Les Carpates</span>'
		document.getElementById('question3').getElementsByTagName('label')[0].classList.add('incorrect');
	}
	else if (radios_q3[1].checked) {
		score += 1;
		document.getElementById('question3').getElementsByTagName('label')[1].classList.add('correct');
		document.getElementById('question3').getElementsByClassName('vide')[0].innerHTML = '<span class="colorGreen">Bravo, Bonne réponse!</span>'
	}
	else if (radios_q3[2].checked) {
		document.getElementById('question3').getElementsByClassName('vide')[0].innerHTML = '<span class="colorRed">La bonne réponse était Les Carpates</span>'
		document.getElementById('question3').getElementsByTagName('label')[2].classList.add('incorrect');
	}
	
//	Question 4

	if (radios_q4[0].checked) {
		document.getElementById('question4').getElementsByClassName('vide')[0].innerHTML = '<span class="colorRed">La bonne réponse était Moldavie</span>'
		document.getElementById('question4').getElementsByTagName('label')[0].classList.add('incorrect');
	}
	else if (radios_q4[1].checked) {
		document.getElementById('question4').getElementsByClassName('vide')[0].innerHTML = '<span class="colorRed">La bonne réponse était Moldavie</span>'
		document.getElementById('question4').getElementsByTagName('label')[1].classList.add('incorrect');
	}
	else if (radios_q4[2].checked) {
		score += 1;
		document.getElementById('question4').getElementsByTagName('label')[2].classList.add('correct');
		document.getElementById('question4').getElementsByClassName('vide')[0].innerHTML = '<span class="colorGreen">Bravo, Bonne réponse!</span>'
	}
	
//	Question 5

	if (radios_q5[0].checked) {
		document.getElementById('question5').getElementsByClassName('vide')[0].innerHTML = '<span class="colorRed">La bonne réponse était Le Leu</span>'
		document.getElementById('question5').getElementsByTagName('label')[0].classList.add('incorrect');
	}
	else if (radios_q5[1].checked) {
		document.getElementById('question5').getElementsByClassName('vide')[0].innerHTML = '<span class="colorRed">La bonne réponse était Le Leu</span>'
		document.getElementById('question5').getElementsByTagName('label')[1].classList.add('incorrect');
	}
	else if (radios_q5[2].checked) {
		score += 1;
		document.getElementById('question5').getElementsByTagName('label')[2].classList.add('correct');
		document.getElementById('question5').getElementsByClassName('vide')[0].innerHTML = '<span class="colorGreen">Bravo, Bonne réponse!</span>'
	}
	
//	Question 6

	if (radios_q6[0].checked) {
		document.getElementById('question6').getElementsByClassName('vide')[0].innerHTML = '<span class="colorRed">La bonne réponse était Vlad Tepes</span>'
		document.getElementById('question6').getElementsByTagName('label')[0].classList.add('incorrect');
	}
	else if (radios_q6[1].checked) {
		score += 1;
		document.getElementById('question6').getElementsByTagName('label')[1].classList.add('correct');
		document.getElementById('question6').getElementsByClassName('vide')[0].innerHTML = '<span class="colorGreen">Bravo, Bonne réponse!</span>'
	}
	else if (radios_q6[2].checked) {
		document.getElementById('question6').getElementsByClassName('vide')[0].innerHTML = '<span class="colorRed">La bonne réponse était Vlad Tepes</span>'
		document.getElementById('question6').getElementsByTagName('label')[2].classList.add('incorrect');
	}
	
//	Question 7

	if (radios_q7[0].checked) {
		score += 1;
		document.getElementById('question7').getElementsByTagName('label')[0].classList.add('correct');
		document.getElementById('question7').getElementsByClassName('vide')[0].innerHTML = '<span class="colorGreen">Bravo, Bonne réponse!</span>'
	}
	else if (radios_q7[1].checked) {
		document.getElementById('question7').getElementsByClassName('vide')[0].innerHTML = '<span class="colorRed">La bonne réponse était Dacie</span>'
		document.getElementById('question7').getElementsByTagName('label')[1].classList.add('incorrect');
	}
	else if (radios_q7[2].checked) {
		document.getElementById('question7').getElementsByClassName('vide')[0].innerHTML = '<span class="colorRed">La bonne réponse était Dacie</span>'
		document.getElementById('question7').getElementsByTagName('label')[2].classList.add('incorrect');
	}
	
	
//	Question 8

	if (radios_q8[0].checked) {
		document.getElementById('question8').getElementsByClassName('vide')[0].innerHTML = '<span class="colorRed">La bonne réponse était Ion Creanga - Instituteur et écrivain</span>'
		document.getElementById('question8').getElementsByTagName('label')[0].classList.add('incorrect');
	}
	else if (radios_q8[1].checked) {
		document.getElementById('question8').getElementsByClassName('vide')[0].innerHTML = '<span class="colorRed">La bonne réponse était Ion Creanga - Instituteur et écrivain</span>'
		document.getElementById('question8').getElementsByTagName('label')[1].classList.add('incorrect');
	}
	else if (radios_q8[2].checked) {
		score += 1;
		document.getElementById('question8').getElementsByTagName('label')[2].classList.add('correct');
		document.getElementById('question8').getElementsByClassName('vide')[0].innerHTML = '<span class="colorGreen">Bravo, Bonne réponse!</span>'
	}
	else if (radios_q8[3].checked) {
		document.getElementById('question8').getElementsByClassName('vide')[0].innerHTML = '<span class="colorRed">La bonne réponse était Ion Creanga - Instituteur et écrivain</span>'
		document.getElementById('question8').getElementsByTagName('label')[3].classList.add('incorrect');
	}
	else if (radios_q8[4].checked) {
		document.getElementById('question8').getElementsByClassName('vide')[0].innerHTML = '<span class="colorRed">La bonne réponse était Ion Creanga - Instituteur et écrivain</span>'
		document.getElementById('question8').getElementsByTagName('label')[4].classList.add('incorrect');	
	}
	let congratMessage = ''
	if (score < 3) {
		congratMessage = 'Dommage, vous ferez mieux la prochaine fois, '
	}
	else if (score < 6) {
		congratMessage = 'Pas mal, '
	}
		else if (score < 8) {
		congratMessage = 'Vous y êtes presque! '
	}
		else {
		congratMessage = 'Bravo, vous êtes un champion! '
	}
	messageFin.innerHTML = congratMessage + 'votre score est de ' + score + '/8';
	let hiddenFigures = document.getElementsByTagName('figure')
	for (var i = hiddenFigures.length - 1; i >= 0; i--) {
		hiddenFigures[i].classList.remove('visibility_hidden');
	}
	let q8_images = document.getElementById('q8_images').getElementsByTagName('div');
	for (var i = 0; i < q8_images.length; i++) {
		if (i != 2) {
			q8_images[i].classList.add('visibility_hidden');
		}

	}

}
