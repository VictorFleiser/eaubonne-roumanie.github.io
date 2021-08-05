document.getElementById("header").innerHTML = `
		<nav>
			<div id="nav_list">
				<div id="accueil_nav">
			<!--	<a href="pages/Accueil.html" target="_self">Accueil</a>	-->	<a href="index.html" target="_self">Accueil</a>
				</div>

				<div id="l_association_nav">
					<a href="pages/association/historique.html" target="_self">L'Association</a>
					<img class="underline_drop_down" src="images/underline_drop_down.png">
					<div class="drop_down_nav_menu">
						<ul id="l_association_ss_menu_nav">
							<li><a href="pages/association/historique.html" target="_self">Historique</a></li>
							<li><a href="pages/association/eaubonne.html" target="_self">Eaubonne</a></li>
							<li><a href="pages/association/valenii.html" target="_self">Valenii de Munte</a></li>
						</ul>
					</div>
				</div>

				<div id="actualite_nav">
					<a href="pages/actualite/evenements_a_venir.html" target="_self">Actualité</a>
					<img class="underline_drop_down" src="images/underline_drop_down.png">
					<div class="drop_down_nav_menu">
						<ul id="actualite_ss_menu_nav">
							<li><a href="pages/actualite/evenements_a_venir.html" target="_self">évenements à venir</a></li>
							<li><a href="pages/actualite/evenements_precedents.html" target="_self">évenements précedents</a></li>
						</ul>
					</div>
				</div>

				<div id="contact_nav">
					<a href="pages/contact/informations.html" target="_self">Informations</a>
					<img class="underline_drop_down" src="images/underline_drop_down.png">
					<div class="drop_down_nav_menu">
						<ul id="contact_ss_menu_nav">
							<li><a href="pages/contact/informations.html" target="_self">Contact</a></li>
							<li><a href="pages/contact/liens_et_adresses.html" target="_self">Liens et adresses</a></li>
							<li><a href="pages/contact/remerciements.html" target="_self">Remerciements</a></li>
						</ul>
					</div>
				</div>

				<div id="divers_nav">
					<a href="pages/divers/quiz.html" target="_self">Divers</a>
					<img class="underline_drop_down" src="images/underline_drop_down.png">
					<div class="drop_down_nav_menu">
						<ul id="divers_ss_menu_nav">
							<li><a href="pages/divers/quiz.html" target="_self">Quiz</a></li>
							<li><a href="pages/divers/fete_martisor.html" target="_self">Fête du Mărțișor</a></li>
							<li><a href="pages/divers/fete_recolte.html" target="_self">Fête de la récolte</a></li>
							<li><a href="pages/divers/fete_europe.html" target="_self">Fête de l'Europe</a></li>
							<li><a href="pages/divers/costume_traditionnel_roumain.html" target="_self">Costume traditionnel roumain</a></li>
						</ul>
					</div>
				</div>

			</div>
		</nav>
`;

document.getElementById("footer").innerHTML = `
		<div id="wrapper_footer_content">
			<div id="footer_contact">
				<p>
					<h3>Nous contacter :</h3>
					M. Radu NICULAE<br />
					Tél. : 06 80 88 85 97<br />
					Mme Émilia STANCIU FLEISER<br />
					Tél. : 06 47 93 58 24<br />
					Courriels : flemili@yahoo.com ou serf1950@aol.com<br />
					Site web : code et design : Victor FLEISER – flevictor@yahoo.com
				</p>
			</div>
			<div id="footer_reseau_social">

				<a href="https://www.facebook.com/eaubonnevaleniidemunte/"><img src="images/facebook.png" alt="facebook logo" title="facebook" height="25" width="25" /></a>
				<a href="https://www.facebook.com/eaubonnevaleniidemunte/">@eaubonnevaleniidemunte</a>

			</div>
		</div>
`
try {
document.getElementById("lang_option").innerHTML = `
		<img id="lang_hover_button" src="images/lang_button.png" width="45px">
		<img id="underline_lang_drop_down" src="images/underline_drop_down.png" width="30px" height="2px">
		<div id="lang_dropdown">
			<img src="images/drapeau_roumanie.png" width="40px" class="drapeau_button" onclick="langRo()">
			<img src="images/drapeau_france.png" width="40px" class="drapeau_button" onclick="langFr()">
		</div>
`
} catch {}


function langRo() {
	eltFr = document.getElementsByClassName('lang_fr');
	for (var i = eltFr.length - 1; i >= 0; i--) {
		eltFr[i].style.display='none';
	}
	eltRo = document.getElementsByClassName('lang_ro');	
	for (var i = eltRo.length - 1; i >= 0; i--) {
		eltRo[i].style.display='block';
	}
};

function langFr() {
	eltFr = document.getElementsByClassName('lang_fr');
	for (var i = eltFr.length - 1; i >= 0; i--) {
		eltFr[i].style.display='block';
	}
	eltRo = document.getElementsByClassName('lang_ro');	
	for (var i = eltRo.length - 1; i >= 0; i--) {
		eltRo[i].style.display='none';
	}
};