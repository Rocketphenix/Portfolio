let connexion = window.localStorage.getItem("nbr"); // récupére la valeur localStorage
var nbr;

var textTest = document.getElementById("textTest");
var btnTest = document.getElementById("btnTest");

if (connexion === null) {
	var nbr = 0; // Si pas de valeur dans le localStorage, on initialise à 0
} else {
	nbr = parseInt(connexion, 10); // Si une valeur existe, on la convertit en nombre
}
// Affichage initial de la valeur
textTest.innerText = nbr;

btnTest.addEventListener("click", activation);
function activation() {
	nbr++;
	textTest.innerText = nbr;
}

let sauvegardeAuto = setInterval(() => {
	// Sauvegarde le nombre
	window.localStorage.setItem("nbr", nbr);
}, 1000);
