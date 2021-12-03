import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to('.featured-projects .scroll-and-projects .vert', {
    scrollTrigger: {
        trigger: '.featured-projects .scroll-and-projects .vert',
        start: 'center center',
        end: '275% top',
        pin: true,
        // markers: true,
        scrub: 1,
    },
});

gsap.to('.featured-projects .scroll-and-projects .vert .inner-vert', {
    scrollTrigger: {
        trigger: '.featured-projects .scroll-and-projects .vert',
        start: 'center center',
        end: '250% top',
        // markers: true,
        scrub: 1,
    },

    top: 110
});

gsap.to('.grid-div-container', {
    scrollTrigger: {
        trigger: '.grid-div-container',
        start: 'center 60%',
        end: 'center 30%',
        // markers: true,
        scrub: 1,
    },

    x: -170
});