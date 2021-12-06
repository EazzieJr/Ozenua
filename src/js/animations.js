import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline()
// To pin then vert for big screens
gsap.to('.featured-projects-big .scroll-and-projects .big-vert', {
    scrollTrigger: {
        trigger: '.featured-projects-big .scroll-and-projects .big-vert',
        endTrigger: '.stop',
        start: 'center center',
        end: 'center center',
        pin: true,
        markers: true,
        scrub: 1,
        // id: 'pin-vert-big'
    },
});


// To pin vert for small screens
// gsap.to('.featured-projects .scroll-and-projects .small-vert', {
//     scrollTrigger: {
//         trigger: '.featured-projects .scroll-and-projects .small-vert',
//         endTrigger: '.paysure',
//         start: 'center center',
//         end: 'center center',
//         pin: true,
//         // markers: true
//         scrub: 1,
//         id: 'pin-vert-small'
//     },
// });

// To make the scroll line in the vert translate
gsap.to('.featured-projects .scroll-and-projects .vert .inner-vert, .featured-projects .scroll-and-projects .vert .inner-vert', {
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
gsap.to('.large .grid-div-container', {
    scrollTrigger: {
        trigger: '.grid-div-container',
        start: 'center 60%',
        end: 'center 30%',
        // markers: true,
        scrub: 1,
    },

    x: -250
});

// Pin button
gsap.to('.toggle-btn', {
    scrollTrigger: {
        trigger: '.toggle-btn',
        endTrigger: 'footer',
        start: 'center 90%',
        pin: true,
        scrub: true
    }
})


//  

tl.to('.vertical-line .vert, .navigate-down', {
    y: 0,
    delay: 6
})

tl.to('.floating-circle', {
    duration: 1, 
    scale: 1,
    ease: 'back'
})

tl.to('.body', {
    overflowY: 'scroll',
})


// gsap.to('.contacts div a', {
//     scrollTrigger: {
//         trigger: 'footer',
//         start: '40% 80%',
//         end: '50% 80%',
//         markers: true,
//         o
//     },
//     // duration: 1.2,
//     y: 0,
//     stagger:0.2
// })