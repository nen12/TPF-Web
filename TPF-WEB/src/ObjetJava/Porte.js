//----------Edgar--------------------
// Classe qui représente une porte du calendrier
export default class Porte {
    constructor(element, texte) {
        this.el = element;       // La div de la porte
        this.texte = texte;      // Texte à afficher dans la modale

        // Ajoute le clic sur la porte
        this.el.addEventListener("click", () => this.ouvrir());
    }

    // Ouvre la porte : affiche la modale avec le texte
    ouvrir() {
        const modal = document.getElementById("porte-modal");
        const modalTexte = document.getElementById("porte-texte");

        modalTexte.textContent = this.texte;
        modal.style.display = "flex";
    }
}