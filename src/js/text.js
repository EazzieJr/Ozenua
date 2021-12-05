import { gsap } from "gsap";
import  {TextPlugin}  from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
const tl = gsap.timeline()

tl.to('.hero-header-text', {
    duration: 3,
    text: "Hey, I'm Ozenua.",
    delay: 1
})

tl.to('.logo', {
    opacity: 1,
    delay: 1,
})

tl.to('.navlist ul li', {
    // duration: 1,
    y: 0,
    stagger: 0.3,
    ease: 'back'
})

gsap.to('.small-hero-details-text, .small-navigate-down', {
    duration: 1,
    delay: 5,
    opacity: 1
})

tl.to('.hero-details-text', {
    duration: 1,
    opacity: 1
})