import { gsap } from "gsap";
// import gsapCore from "gsap/gsap-core";
import  {TextPlugin}  from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
const tl = gsap.timeline()

gsap.to('.hero-header-text', {
    duration: 3,
    text: "Hey, I'm Ozenua.",
    delay: 1,
    // onComplete: 
})

gsap.to('.logo', {
    opacity: 1,
    delay: 5,
})

gsap.to('.home-navlist ul li', {
    y: 0,
    stagger: 0.3,
    ease: 'back',
    delay: 5,
})

gsap.to('.small-hero-details-text, .small-navigate-down', {
    duration: 1,
    delay: 5,
    opacity: 1
})

tl.to('.hero-details-text', {
    duration: 1,
    opacity: 1,
    delay: 6
})


// gsap.to('nav .nav-container .navlist ul li', {
//     duration: 1,
//     y: 0,
//     stagger: 0.3,
//     ease: 'back'
// })