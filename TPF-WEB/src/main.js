import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import gsap from 'gsap'

//Importation du plugin scrolltrigger.
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Sélection et interaction avec le bouton menu burger
const menuBurger = document.querySelector(".menu-burger")
const navLinks = document.querySelector(".nav-links")
menuBurger.addEventListener('click', () =>
    navLinks.classList.toggle('mobile-menu'));

// Fonction pour l'interaction avec le bouton de l'hero.
const button = document.getElementById('bouton-nöel'); //Sélectionne le bouton par son ID.

button.addEventListener('click', function () { // Ajout d'un écouteur d'événement.
    window.location.href = 'Page2.html'; //Redirige vers une autre page du site.
});

//Importation du plugin scrollTrigger pour l'animation de texte de Hero
gsap.registerPlugin(ScrollTrigger);


gsap.to(".titre", {
    scrollTrigger: {
        trigger: '.titre',
        start: "170% 250px",
        end: "300% 200px",
        scrub: 1,

        toggleActions: "play none none reverse"
    },

    y: 200,
    delay: 0.5,
    ease: 'expo',
    duration: 2,
    opacity: 0,
});

//Animation en translation verticale en boucle de l'image du cadeau de gauche.
gsap.to(".cadeau-gauche", {
    y: 50,
    duration: 2,
    ease: "ease.inOut",
    repeat: -1,
    yoyo: true
});

//Animation en translation verticale en boucle de l'image du cadeau de droite.
gsap.to(".cadeau-droite", {
    y: -70,
    duration: 2,
    ease: "ease.inOut",
    repeat: -1,
    yoyo: true
});

//Animation d'entrée horizontale de l'image du groupe de cadeau.
gsap.to(".gr-cadeaux", {
    x: -100,
    delay: 0.5,
    ease: 'expo',
    duration: 2,
    opacity: 1,
});


// Animation de neige dans la page du site web.
const canevas = document.getElementById("snow");
const ctx = canevas.getContext("2d");

canevas.width = window.innerWidth;
canevas.height = window.innerHeight;

const flocons = [];

// Créer les flocons de neige
function creerFlocons() {
    const quantite = 150; // nombre total de flocons

    for (let i = 0; i < quantite; i++) {
        flocons.push({
            x: Math.random() * canevas.width,
            y: Math.random() * canevas.height,
            rayon: Math.random() * 3 + 1,      // taille du flocon
            vitesseY: Math.random() * 1 + 0.5, // vitesse verticale
            vitesseX: Math.random() * 0.5 - 0.25 // léger mouvement horizontal
        });
    }
}

// Mettre à jour la position des flocons
function mettreAJourFlocons() {
    for (let flocon of flocons) {
        flocon.y += flocon.vitesseY;
        flocon.x += flocon.vitesseX;

        // replacer le flocon en haut quand il sort de l'écran
        if (flocon.y > canevas.height) {
            flocon.y = -flocon.rayon;
            flocon.x = Math.random() * canevas.width;
        }
    }
}

// Dessiner les flocons
function dessinerFlocons() {
    ctx.clearRect(0, 0, canevas.width, canevas.height);
    ctx.fillStyle = "white";
    ctx.beginPath();

    for (let flocon of flocons) {
        ctx.moveTo(flocon.x, flocon.y);
        ctx.arc(flocon.x, flocon.y, flocon.rayon, 0, Math.PI * 2);
    }

    ctx.fill();
}

// Animation continue de la neige
function animer() {
    mettreAJourFlocons();
    dessinerFlocons();
    requestAnimationFrame(animer);
}

creerFlocons();
animer();

// Ajuster la taille du canevas si la fenêtre change
window.addEventListener("resize", () => {
    canevas.width = window.innerWidth;
    canevas.height = window.innerHeight;
});


