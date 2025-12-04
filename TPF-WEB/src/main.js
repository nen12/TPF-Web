import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import gsap from 'gsap'

//Importation du plugin scrolltrigger.
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Sélection et interaction avec le bouton menu burger
const menuBurger = document.querySelector (".menu-burger")
const navLinks = document.querySelector (".nav-links")
    menuBurger.addEventListener('click',()=>
    navLinks.classList.toggle('mobile-menu'));
  
    // Fonction pour l'interaction avec le bouton de l'hero.
    const button = document.getElementById ('bouton-nöel'); //Sélectionne le bouton par son ID.

    button.addEventListener ('click', function() { // Ajout d'un écouteur d'événement.
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





