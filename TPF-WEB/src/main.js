import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import gsap from 'gsap'

// Sélection et interaction avec le bouton menu burger
const menuBurger = document.querySelector (".menu-burger")
const navLinks = document.querySelector (".nav-links")
    menuBurger.addEventListener('click',()=>
    navLinks.classList.toggle('mobile-menu'));

    
//Importation du plugin scrolltrigger.
import { ScrollTrigger } from 'gsap/ScrollTrigger';
 
//Importation du plugin scrollTrigger pour l'animation de texte de Hero
gsap.registerPlugin(ScrollTrigger);



gsap.to(".titre", {
   scale: 1.03,
   duration: 1,
   ease: "ease.inOut",
   repeat: -1,
   yoyo: true
    
});

gsap.to(".titre", {
    scrollTrigger: {
        trigger: '.titre',
        start: "170% 250px", 
        end: "400% 200px",
        scrub: 1, 
 
        toggleActions: "play none none reverse" 
    },
 
    
    y: 200,
    delay:0.5,
    ease: 'expo',
    duration: 2,
    opacity: 0,
});   



