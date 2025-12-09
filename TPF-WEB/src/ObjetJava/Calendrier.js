import Porte from "./Porte.js";
//----------Edgar--------------------
// Classe qui gère toutes les portes (parent)
export default class Calendrier {
    constructor() {
        this.portes = [];  // Stocke toutes les instances de Porte comme un tableau
        this.init();
        this.fermerModal();
    }

    init() {
        const elementsPortes = document.querySelectorAll(".portes");

        elementsPortes.forEach((el) => {
            const numero = el.textContent.trim();
            const texte = "Texte du jour " + numero;
            const porte = new Porte(el, texte);
            this.portes.push(porte);
        });
    }

    // Ferme la modale
    fermerModal() {
        const modal = document.getElementById("porte-modal");
        const closeBtn = document.querySelector(".close-modal");

        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) modal.style.display = "none";
        });
    }
}
