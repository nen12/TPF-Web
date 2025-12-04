import './style.css'

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