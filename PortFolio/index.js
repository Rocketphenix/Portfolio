let btnSuivant = document.getElementById("btnSuivant");
let btnPrecedent = document.getElementById("btnPrecedent");
let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");
let page3 = document.getElementById("page3");
let page4 = document.getElementById("page4");
let btnPage1 = document.getElementById("btnPage1");
let btnPage2 = document.getElementById("btnPage2");
let btnPage3 = document.getElementById("btnPage3");
let btnPage4 = document.getElementById("btnPage4");

var nbPageActuel = 1;

// Pression du bouton pour passé a la page suivante
btnSuivant.addEventListener("click", function () {
	nbPageActuel++;
	switch (nbPageActuel) {
		case 2:
			page1.style.display = "none";
			btnPage1.style.backgroundColor = "#333";
			btnPage2.style.backgroundColor = "beige";
			page2.style.display = "block";
			break;
		case 3:
			page2.style.display = "none";
			btnPage2.style.backgroundColor = "#333";
			btnPage3.style.backgroundColor = "beige";
			page3.style.display = "block";
			break;
		case 4:
			page3.style.display = "none";
			btnPage3.style.backgroundColor = "#333";
			btnPage4.style.backgroundColor = "beige";
			page4.style.display = "block";
			break;
		default:
			page4.style.display = "none";
			btnPage4.style.backgroundColor = "#333";
			btnPage1.style.backgroundColor = "beige";
			page1.style.display = "block";
			nbPageActuel = 1;
			break;
	}
});
// Pression du bouton pour passé a la page précédente
btnPrecedent.addEventListener("click", function () {
	nbPageActuel--;
	switch (nbPageActuel) {
		case 3:
			page4.style.display = "none";
			btnPage4.style.backgroundColor = "#333";
			btnPage3.style.backgroundColor = "beige";
			page3.style.display = "block";
			break;
		case 2:
			page3.style.display = "none";
			btnPage3.style.backgroundColor = "#333";
			btnPage2.style.backgroundColor = "beige";
			page2.style.display = "block";
			break;
		case 1:
			page2.style.display = "none";
			btnPage2.style.backgroundColor = "#333";
			btnPage1.style.backgroundColor = "beige";
			page1.style.display = "block";
			break;
		default:
			page1.style.display = "none";
			btnPage1.style.backgroundColor = "#333";
			btnPage4.style.backgroundColor = "beige";
			page4.style.display = "block";
			nbPageActuel = 4;
			break;
	}
});

/***************************Pression des boutons solitaire***************************************/
// Bouton 1
btnPage1.addEventListener("click", function () {
	switch (nbPageActuel) {
		case 1:
			break;
		case 2:
			page2.style.display = "none";
			btnPage2.style.backgroundColor = "#333";
			btnPage1.style.backgroundColor = "beige";
			page1.style.display = "block";
			break;
		case 3:
			page3.style.display = "none";
			btnPage3.style.backgroundColor = "#333";
			btnPage1.style.backgroundColor = "beige";
			page1.style.display = "block";
			break;
		default:
			page4.style.display = "none";
			btnPage4.style.backgroundColor = "#333";
			btnPage1.style.backgroundColor = "beige";
			page1.style.display = "block";
			break;
	}
	nbPageActuel = 1;
});
// Bouton 2
btnPage2.addEventListener("click", function () {
	switch (nbPageActuel) {
		case 1:
			page1.style.display = "none";
			btnPage1.style.backgroundColor = "#333";
			btnPage2.style.backgroundColor = "beige";
			page2.style.display = "block";
			break;
		case 2:
			break;
		case 3:
			page3.style.display = "none";
			btnPage3.style.backgroundColor = "#333";
			btnPage2.style.backgroundColor = "beige";
			page2.style.display = "block";
			break;
		default:
			page4.style.display = "none";
			btnPage4.style.backgroundColor = "#333";
			btnPage2.style.backgroundColor = "beige";
			page2.style.display = "block";
			break;
	}
	nbPageActuel = 2;
});
// Bouton 3
btnPage3.addEventListener("click", function () {
	switch (nbPageActuel) {
		case 1:
			page1.style.display = "none";
			btnPage1.style.backgroundColor = "#333";
			btnPage3.style.backgroundColor = "beige";
			page3.style.display = "block";
			break;
		case 2:
			page2.style.display = "none";
			btnPage2.style.backgroundColor = "#333";
			btnPage3.style.backgroundColor = "beige";
			page3.style.display = "block";
			break;
		case 3:
			break;
		default:
			page4.style.display = "none";
			btnPage4.style.backgroundColor = "#333";
			btnPage3.style.backgroundColor = "beige";
			page3.style.display = "block";
			break;
	}
	nbPageActuel = 3;
});
// Bouton 4
btnPage4.addEventListener("click", function () {
	switch (nbPageActuel) {
		case 1:
			page1.style.display = "none";
			btnPage1.style.backgroundColor = "#333";
			btnPage4.style.backgroundColor = "beige";
			page4.style.display = "block";
			break;
		case 2:
			page2.style.display = "none";
			btnPage2.style.backgroundColor = "#333";
			btnPage4.style.backgroundColor = "beige";
			page4.style.display = "block";
			break;
		case 3:
			page3.style.display = "none";
			btnPage3.style.backgroundColor = "#333";
			btnPage4.style.backgroundColor = "beige";
			page4.style.display = "block";
			break;
		default:
			break;
	}
	nbPageActuel = 4;
});

/******************************************Hover************************************************/
// Bouton 1
btnPage1.onmouseover = function () {
	if (btnPage1.style.backgroundColor == "rgb(51, 51, 51)") {
		btnPage1.style.backgroundColor = "#4e4e4e";
	}
};
btnPage1.onmouseout = function () {
	if (btnPage1.style.backgroundColor == "rgb(78, 78, 78)") {
		btnPage1.style.backgroundColor = "#333";
	}
};
// Bouton 2
btnPage2.onmouseover = function () {
	if (btnPage2.style.backgroundColor == "rgb(51, 51, 51)") {
		btnPage2.style.backgroundColor = "#4e4e4e";
	}
};
btnPage2.onmouseout = function () {
	if (btnPage2.style.backgroundColor == "rgb(78, 78, 78)") {
		btnPage2.style.backgroundColor = "#333";
	}
};
// Bouton 3
btnPage3.onmouseover = function () {
	if (btnPage3.style.backgroundColor == "rgb(51, 51, 51)") {
		btnPage3.style.backgroundColor = "#4e4e4e";
	}
};
btnPage3.onmouseout = function () {
	if (btnPage3.style.backgroundColor == "rgb(78, 78, 78)") {
		btnPage3.style.backgroundColor = "#333";
	}
};
// Bouton 4
btnPage4.onmouseover = function () {
	if (btnPage4.style.backgroundColor == "rgb(51, 51, 51)") {
		btnPage4.style.backgroundColor = "#4e4e4e";
	}
};
btnPage4.onmouseout = function () {
	if (btnPage4.style.backgroundColor == "rgb(78, 78, 78)") {
		btnPage4.style.backgroundColor = "#333";
	}
};

/************************************************************************************************/
/* 											Clicker												*/
/************************************************************************************************/

/************************************Accès Clicker***********************************************/
let btnProjetClicker = document.getElementById("btnProjetClicker");
let btnExempleClicker = document.getElementById("btnExempleClicker");
let ProjetPartClicker = document.getElementById("ProjetPartClicker");
let PartClicker = document.getElementById("PartClicker");

// Affiche la page qui explique le clicker
btnProjetClicker.addEventListener("click", function () {
	ProjetPartClicker.style.display = "block";
	btnProjetClicker.style.width = "95px";
	btnProjetClicker.style.height = "65px";
	PartClicker.style.display = "none";
	btnExempleClicker.style.width = "80px";
	btnExempleClicker.style.height = "50px";
});
// Affiche le minijeu clicker
btnExempleClicker.addEventListener("click", function () {
	ProjetPartClicker.style.display = "none";
	btnProjetClicker.style.width = "80px";
	btnProjetClicker.style.height = "50px";
	PartClicker.style.display = "block";
	btnExempleClicker.style.width = "95px";
	btnExempleClicker.style.height = "65px";
});
/************************************Jeu Clicker***********************************************/
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
var combo = false; // En animation de dégats
var animation; // Animation du Blob prenant des dégats

btnClicker.addEventListener("click", function () {
	btnClicker.src = "Img/BlobEau_Hit.png";
	if (combo == true) clearInterval(animation);
	combo = true;
	animation = setTimeout(function () {
		btnClicker.src = "Img/BlobEau.png";
		combo = false;
	}, 1000);

	nbrClicker++;
	textClicker.innerText = nbrClicker;
});

let sauvegardeAuto = setInterval(() => {
	// Sauvegarde le nombre
	window.localStorage.setItem("nbrClicker", nbrClicker);
}, 1000);
