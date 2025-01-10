let btnFr = document.getElementById("btnFr");
let btnEn = document.getElementById("btnEn");

btnFr.addEventListener("click", () => {
	document.getElementById("h1").innerText = "Ma Page";
	document.getElementById("NavBio").innerText = "Biographie";
	document.getElementById("NavProjets").innerText = "Projets";
	document.querySelector(
		"#Biographie .zoneTextBio p"
	).innerHTML = `<b>Je m'appelle Mathias Erades, j'ai 23 ans et je suis un développeur web.</b><br />Après avoir fait un <abbr title="Baccalauréat Sciences et Technologie de l'Industrie et du Développement Durable">Bac STI2D</abbr>, j'ai fait un <abbr title="Brevet Technicien Supérieure Système Numérique option Informatique et Réseau">BTS SNIR</abbr> où j'ai fait un stage à l'entreprise ADGravure. Durant ce stage, mon objectif était de créer le site de l'entreprise. J'ai énormément apprécié ce qui m'a donné l'envie de partir en programmation web. Désormais, je suis la formation de la 3W Academy et je cherche une alternance afin de pouvoir apprendre encore davantage en codage web.`;

	document.querySelector("#Projets .EnteteProjetSite").innerText =
		"Avec un ami, nous avons eu l'idée de créer une entreprise dont le projet serait de réaliser des sites web pour des clients. Nous comptions donc créer un site maquette pour, dans un premier temps, nous faire connaître, puis montrer aux personnes intéressées ce dont nous sommes capables. Pendant que je me suis occupé du code, lui s'est chargé du design.";
	document.querySelector("#page1 .DefinitionImgSite").innerText =
		"Nous avons donc commencé par la page d'accueil, qui servira de présentation pour notre site, mais surtout pour notre entreprise. Étant la première page que nous avons faite, c'est ici que nous avons choisi à quoi ressemblerait l'ensemble du site. Nous avons donc opté pour un fond gris foncé avec des touches de jaune.";
	document.querySelector("#page2 .DefinitionImgSite").innerText =
		"Une fois le design du site terminé, il fallait le rendre accessible sur téléphone. J`'ai fait en sorte que la zone de texte se rétrécisse et que le menu de navigation devienne un menu déroulant, qui s'affiche en cliquant dessus.";
	document.querySelector("#page3 .DefinitionImgSite").innerText =
		"Ensuite, nous avons créé la page dédiée aux sites d'entreprise. Elle est similaire à notre page d'accueil en termes de concept, nous l'avons donc utilisée pour montrer nos techniques: des blocs de texte avec des bordures arrondies et une ombre, la possibilité de placer le texte sur le côté ou en dessous, ainsi qu'une barre de navigation latérale.";
	document.querySelector("#page4 .DefinitionImgSite").innerText =
		"Notre troisième page devait être le blog, il nous fallait donc la possibilité de se connecter. J'ai utilisé MySQL pour créer la base de données et j'ai mis en place un formulaire de connexion avec un identifiant. J'ai intégré un système de cryptage de mot de passe et demandé diverses informations pour éviter la création de plusieurs comptes.";
	document.querySelector("#ProjetPartClicker .DefinitionImgClicker").innerHTML =
		"Pendant la création de notre premier site, je me suis rendu compte qu'il me manquait beaucoup de connaissances en développement web. J'ai donc suivi la formation gratuite sur le site OpenClassroom, où j'ai beaucoup appris. Cela m'a donné l'idée de créer un 'clicker' en HTML/CSS et JavaScript. <br /><br /> Le concept est simple: il y a un bouton sur lequel on clique, qui nous donne des points. Ensuite, on utilise ces points pour acheter des améliorations afin de gagner encore plus de points. Il existe deux grands types d'améliorations: les améliorations passives, qui génèrent des points automatiquement, et celles qui améliorent nos clics. <br /> Lorsque j'ai montré le jeu à mon ami, il a beaucoup aimé le concept. sachant que notre première idée allait être compliquée à réaliser, entre les entreprises plus connues qui feraient le travail plus rapidement et les sites permettant à n'importe qui de créer leur propre site. Nous avons donc décidé de nous concentrer sur le clicker. <br /><br /> Le bouton est devenu une image de blob avec une animation de dégâts, qui possède une barre de vie à faire descendre avant de récupérer nos récompenses. Les bonus infligent désormais des dégâts à l'ennemi. Il y a plusieurs niveaux avec des boss à vaincre dans un temps imparti, un système de succès qui permet de gagner divers bonus, ainsi qu'un système de création de compte avec une sauvegarde des données pour pouvoir reprendre sa progression depuis n'importe où.<br /> Nous avions encore plusieurs idées, comme avoir son propre personnage avec un équipement que l'on améliore, mais par manque de temps, nous avons dû arrêter le projet. Cependant, ce clicker m'a énormément appris et j'espère pouvoir en apprendre encore plus en développement web.";
	document.querySelector("#TxtClic").innerText =
		"Ici le Blob n'a pas de point de vie mais sa n'empêche pas de lui cliquer dessus.";
	document.querySelector("#footerRS").innerText = "Réseau sociaux";
});

btnEn.addEventListener("click", function () {
	document.getElementById("h1").innerText = "My Page";
	document.getElementById("NavBio").innerText = "Biography";
	document.getElementById("NavProjets").innerText = "Projects";
	document.querySelector(
		"#Biographie .zoneTextBio p"
	).innerHTML = `<b>My name is Mathias Erades, i'm 23 years old and i'm a web developper.</b><br /> after my <abbr title="Baccalaureate Sciences and Technologies of Industry and Sustainable Development">Bac STI2D</abbr>, I did a <abbr title="advanced technician's certificate Digital Systems, IT and Network option">BTS SNIR</abbr> where i had a internship at the company ADGravure. during this internship, my goal was to create the company web page. I greatly appreaciated and it made me want to go in web programming. now, I am following the 3W Academy training and I am looking for a work-study program so that I can learn even more about web coding.`;
	document.querySelector("#Projets .EnteteProjetSite").innerText =
		"With a friend, we had the idea to create a company with the concept of creating web site for customers. We therefore intended to create a mock-up site fot, in the first time, make ourselves known, then show to interested people what we can do. while I was doing the coding, he did the design.";
	document.querySelector("#page1 .DefinitionImgSite").innerText =
		"We start with the home page, which be used to presente the site, but above all the company. Being the first page made, this is where we choose what the site will looks like. We therefore opted for a dark gray background with touches of yellow.";
	document.querySelector("#page2 .DefinitionImgSite").innerText =
		"Once the design chosen, we needed to make it accessible to phone. I've made so the text zone will shrink and the navigation menu became a drop-down , who will show when clicked on.";
	document.querySelector("#page3 .DefinitionImgSite").innerText =
		"Next, we've create a page dedicated to company. It is similar to our homepage in terms of concept, therefore we used it to show what we can do, text blocks with rounded borders and shadow, the ability to place text to the side or below, as well as a side navigation bar.";
	document.querySelector("#page4 .DefinitionImgSite").innerText =
		"Our third page should have been the blog page, so we needed the ability de to connect to an account. I used MySQL to créate the database and I set up a login form with an identifier. I integrated a password encryption system and requested various information to avoid creating multiple accounts.";
	document.querySelector("#ProjetPartClicker .DefinitionImgClicker").innerHTML =
		'While creating our first website, I realized I lacked a lot of knowledge in web development. So I took the free course on OpenClassroom, where I learned a lot. This gave me the idea to create a "clicker" in HTML/CSS and JavaScript.  <br /><br />The concept is simple: there\'s a button you click, which gives you points. Then you use these points to buy upgrades to earn even more points. There are two main types of upgrades: passive upgrades, which generate points automatically, and those that improve your clicks.<br />When I showed the game to my friend, he really liked the concept. Knowing that our first idea would be complicated to implement, between well-known companies that would do the work faster and websites allowing anyone to create their own site, we decided to focus on the clicker.<br /><br />The button became a blob image with a damage animation, which has a health bar to bring down before collecting our rewards. Bonuses now inflict damage on the enemy. There are several levels with bosses to defeat within a given time, an achievement system that allows you to earn various bonuses, as well as an account creation system with data saving so you can resume your progress from anywhere. <br />We still had several ideas, like having your own character with equipment that you upgrade, but due to lack of time, we had to stop the project. However, this clicker taught me a lot and I hope to learn even more about web development.';
	document.querySelector("#TxtClic").innerText = "Here the Blob doesn't have life point but we can still click on it.";
	document.querySelector("#footerRS").innerText = "Social Network";
});

/************************************************************************************************/
/* 											Photo Site											*/
/************************************************************************************************/

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
