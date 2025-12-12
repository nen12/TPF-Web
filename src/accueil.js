import './style.css'
import gsap from "gsap"


//Fait par Jorenso
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
//Fait par Jorenso fin.
// 








//----------Edgar--------------------

//Animation pere noel
window.addEventListener("load", () => {
  gsap.to(".pere-noel img", {
    x: window.innerWidth + 300,
    duration: 10,
    ease: "none",
    repeat: -1
  });
});

//Animation Titre
gsap.from(".titre", {
  x: -500,
  rotation: -10,
  duration: 1.8,
  ease: "power4.out",
  stagger: 0.15,
  onComplete: () => {
    gsap.to(".titre", {
      x: "+=10",
      duration: 0.4,
      ease: "power1.out",
      yoyo: true,
      repeat: 1
    });
  }
});

//Animation pinguin
gsap.to(".pingouin", {
  x: window.innerWidth + 300,
  duration: 8,
  ease: "power2.out",
  repeat: -1,
  delay: 1,
  onRepeat: () => {

    gsap.set(".pingouin", { rotation: gsap.utils.random(-10, -5) });
  }
});


import Calendrier from "./ObjetJava/Calendrier.js";

window.addEventListener("DOMContentLoaded", () => {
  const cadre = document.querySelector(".cadre");
  new Calendrier(cadre);
});


