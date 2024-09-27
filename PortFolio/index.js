let btnSuivant = document.getElementById("btnSuivant");
let btnPrecedent = document.getElementById("btnPrecedent");
let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");
let page3 = document.getElementById("page3");
let page4 = document.getElementById("page4");

var nbPageActuel = 0;
btnSuivant.addEventListener("click", function () {
	nbPageActuel++;

	switch (nbPageActuel) {
		case 1:
			page1.style.display = "none";
			page2.style.display = "block";
			break;
		case 2:
			page2.style.display = "none";
			page3.style.display = "block";
			break;
		case 3:
			page3.style.display = "none";
			page4.style.display = "block";
			break;
		default:
			page4.style.display = "none";
			page1.style.display = "block";
			nbPageActuel = 0;
			break;
	}
});
btnPrecedent.addEventListener("click", function () {
	nbPageActuel--;

	switch (nbPageActuel) {
		case 2:
			page4.style.display = "none";
			page3.style.display = "block";
			break;
		case 1:
			page3.style.display = "none";
			page2.style.display = "block";
			break;
		case 0:
			page2.style.display = "none";
			page1.style.display = "block";
			break;
		default:
			page1.style.display = "none";
			page4.style.display = "block";
			nbPageActuel = 3;
			break;
	}
});

/************************************************************************************************/
/* 											Clicker												*/
/************************************************************************************************/

let connexion = window.localStorage.getItem("nbrClicker"); // récupére la valeur localStorage
var nbrClicker;

let textClicker = document.getElementById("textClicker");
let btnClicker = document.getElementById("btnClicker");

if (connexion === null) {
	var nbrClicker = 0; // Si pas de valeur dans le localStorage, on initialise à 0
} else {
	nbrClicker = parseInt(connexion, 10); // Si une valeur existe, on la convertit en nombre
}
// Affichage initial de la valeur
textClicker.innerText = nbrClicker;

btnClicker.addEventListener("click", function () {
	nbrClicker++;
	textClicker.innerText = nbrClicker;
});

let sauvegardeAuto = setInterval(() => {
	// Sauvegarde le nombre
	window.localStorage.setItem("nbrClicker", nbrClicker);
}, 1000);
