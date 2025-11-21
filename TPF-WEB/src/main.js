import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import gsap from 'gsap'


gsap.to(".titre", {
   scale: 1.02,
   duration: 1,
   ease: "ease.inOut",
   repeat: -1,
   yoyo: true
    
});


   


