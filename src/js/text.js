import { gsap } from "gsap";
// import gsapCore from "gsap/gsap-core";
import  {TextPlugin}  from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

function init() {
    setTimeout(() => {
        AOS.init();
        ScrollTrigger.refresh();
    }, 6000)
}

const tl = gsap.timeline()

gsap.to('.hero-header-text', {
    duration: 3,
    text: "Hey, I'm Ozenua.",
    delay: 1,
    // onComplete: 
})

gsap.to('.logo, .navlist', {
    opacity: 1,
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
    delay: 6,
    onComplete: init()
})


// gsap.to('nav .nav-container .navlist ul li', {
//     duration: 1,
//     y: 0,
//     stagger: 0.3,
//     ease: 'back'
// })