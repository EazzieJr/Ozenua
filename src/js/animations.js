// import { gsap } from "gsap/dist/gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);


// ScrollTrigger.scrollerProxy(".container", {
//     scrollTop(value) {
//         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//     getBoundingClientRect() {
//         return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//     },
//     // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//     pinType: document.querySelector(".container").style.transform ? "transform" : "fixed"
// });

// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

const tl = gsap.timeline()
// To pin then vert for big screens
gsap.to('.featured-projects .scroll-and-projects .vert', {
    scrollTrigger: {
        trigger: '.featured-projects .scroll-and-projects .vert',
        endTrigger: '.stop',
        start: 'center center',
        // scroller: '.container',
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
ScrollTrigger.matchMedia({
    // "(min-width: 1560px)": function () {


    "(min-width: 1024px) and (max-width: 1279px)": function () {
        gsap.to('.grid-div-container', {
            scrollTrigger: {
                trigger: '.grid-div-container',
                // endTrigger: ''
                start: 'center center',
                end: '+=3000 center',
                pin: true,
                markers: true,
                scrub: 2,
                // horizontal: true
            },
            // duration: 10,
            x: -2100
        });
    },

    "(min-width: 1280px) and (max-width: 1535px)": function () {
        gsap.to('.grid-div-container', {
            scrollTrigger: {
                trigger: '.grid-div-container',
                // endTrigger: ''
                start: 'center center',
                end: '+=4000 center',
                pin: true,
                markers: true,
                scrub: 2,
                // horizontal: true
            },
            // duration: 10,
            x: -2700
        });
    },

    "(min-width: 1536px) and (max-width: 3000px)": function () {
        gsap.to('.grid-div-container', {
            scrollTrigger: {
                trigger: '.grid-div-container',
                // endTrigger: ''
                start: 'center center',
                end: '+=4500 center',
                pin: true,
                markers: true,
                scrub: 2,
                // horizontal: true
            },
            // duration: 10,
            x: -4000
        });
    },
})



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
