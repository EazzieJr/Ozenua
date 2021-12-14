// import { gsap } from "gsap/dist/gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline()
// To pin then vert for big screens
gsap.to('.featured-projects .scroll-and-projects .vert', {
    scrollTrigger: {
        trigger: '.featured-projects .scroll-and-projects .vert',
        endTrigger: '.stop',
        start: 'center center',
        end: 'center center',
        pin: true,
        markers: true,
        scrub: 1,
        // id: 'pin-vert-big'
    },
});

// To make the scroll line in the vert translate
gsap.to('.featured-projects .scroll-and-projects .vert .inner-vert', {
    scrollTrigger: {
        trigger: '.featured-projects .scroll-and-projects .vert',
        endTrigger: '.stop',
        start: 'center center',
        end: 'center center',
        scrub: 1,
    },

    top: 110
});

// To make the contributions container translate left
gsap.to('.grid-div-container', {
    scrollTrigger: {
        trigger: '.grid-div-container',
        // endTrigger: ''
        start: 'center 60%',
        end: '+=4000 top',
        pin: true,
        markers: true,
        scrub: 2,
    },

    x: -3000
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
