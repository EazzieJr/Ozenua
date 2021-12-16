const tl = gsap.timeline()

/* Landing animation */
tl.to('.vertical-line .vert, .navigate-down', {
    y: 0,
    delay: 6
})

tl.to('.floating-circle', {
    duration: 1,
    scale: 1,
    ease: 'back',
})

tl.to('.body', {
    overflowY: 'scroll',

})


// To pin then vert at featured projects
gsap.to('.featured-projects .scroll-and-projects .vert', {
    scrollTrigger: {
        trigger: '.featured-projects .scroll-and-projects .vert',
        endTrigger: '.stop',
        start: 'center center',
        end: 'center center',
        pin: true,
        markers: true,
        scrub: 1,
    },
});

// To make the scroll line in the vert translate
ScrollTrigger.matchMedia({

    "(min-width: 320px) and (max-width: 767px)": function () {
        gsap.to('.featured-projects .scroll-and-projects .vert .inner-vert', {
            scrollTrigger: {
                trigger: '.featured-projects .scroll-and-projects .vert',
                endTrigger: '.stop',
                start: 'center center',
                end: 'center center',
                scrub: 1,
            },

            top: 80
        })
    },

    "(min-width: 768px) and (max-width: 1023px)": function () {
        gsap.to('.featured-projects .scroll-and-projects .vert .inner-vert', {
            scrollTrigger: {
                trigger: '.featured-projects .scroll-and-projects .vert',
                endTrigger: '.stop',
                start: 'center center',
                end: 'center center',
                scrub: 1,
            },

            top: 110
        })
    },

    "(min-width: 1024px) and (max-width: 1535px)": function () {
        gsap.to('.featured-projects .scroll-and-projects .vert .inner-vert', {
            scrollTrigger: {
                trigger: '.featured-projects .scroll-and-projects .vert',
                endTrigger: '.stop',
                start: 'center center',
                end: 'center center',
                scrub: 1,
            },

            top: 110
        })
    },

    "(min-width: 1536px)": function () {
        gsap.to('.featured-projects .scroll-and-projects .vert .inner-vert', {
            scrollTrigger: {
                trigger: '.featured-projects .scroll-and-projects .vert',
                endTrigger: '.stop',
                start: 'center center',
                end: 'center center',
                scrub: 1,
            },

            top: 180
        })
    }
})

// To make the contributions container translate left
ScrollTrigger.matchMedia({
    // "(min-width: 1560px)": function () {

    "(min-width: 320px) and (max-width: 1023px)": function () {
        gsap.to('.grid-div-container', {
            scrollTrigger: {
                trigger: '.grid-div-container',
                start: 'center center',
                end: '+=3000 center',
                pin: true,
                markers: true,
                scrub: 2,
            },
            // duration: 10,
            x: -2000
        });
    },

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

// Pin theme button
gsap.to('.toggle-btn', {
    scrollTrigger: {
        trigger: '.toggle-btn',
        endTrigger: 'footer',
        start: 'center 90%',
        pin: true,
        scrub: true
    }
})