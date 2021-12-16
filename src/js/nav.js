import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to('.logo, .navlist', {
    duration: 1,
    opacity: 1,
    delay: 2,
})

gsap.to('.case-studies', {
    duration: 1,
    scale: 1,
    delay: 2,
    opacity: 1,
})