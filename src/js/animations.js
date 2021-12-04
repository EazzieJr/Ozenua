import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// To pin then vert
gsap.to('.featured-projects .scroll-and-projects .vert', {
    scrollTrigger: {
        trigger: '.featured-projects .scroll-and-projects .vert',
        endTrigger: '.paysure',
        start: 'center center',
        end: 'center center',
        pin: true,
        // markers: true,
        scrub: 1,
    },
});

// To make the scroll line in the vert translate
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

// To make the contributions container translate left
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