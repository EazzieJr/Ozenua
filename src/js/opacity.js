// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

gsap.to('.body', {
    overflowY: 'scroll',
    delay: 2
})

gsap.to('section, footer', {
    opacity: 1,
    duration: 1,
    delay: 2.5
})