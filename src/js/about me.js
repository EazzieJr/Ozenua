import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

gsap.to('.body', {
    overflowY: 'scroll',
    delay: 2
})

gsap.to('.about-me, .skills-experience, .horizontal-skills, .container, footer', {
    opacity: 1,
    duration: 1,
    delay: 2.5
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

gsap.to('.header-text', {
    text: 'About me.',
    duration: 2,
    onComplete: ScrollTrigger.refresh()
})

gsap.to('.logo', {
    opacity: 1,
    delay: 2,
})

gsap.to('nav .nav-container .navlist ul li', {
    // duration: 1,
    y: 0,
    stagger: 0.3,
    ease: 'back',
    delay: 2
})

gsap.to('.to-left', {
    scrollTrigger: {
        trigger: '.to-left',
        start: 'center bottom',
        // markers:  false,
        scrub: 1
    },

    x: -1000
})

gsap.fromTo('.to-right', {
    x: -2000
},

    {
        scrollTrigger: {
            trigger: '.to-right',
            start: 'center bottom',
            // markers:  false,
            scrub: 1
        },

        x: -1000
    })

gsap.to('.floating-circle-tools', {
    scrollTrigger: {
        trigger: '.floating-circle-tools',
        start: 'center 40%',
        endTrigger: '.trello',
        end: 'top 40%',
        pin: true,
        // markers:  false
    }
})

gsap.to('.tools-list .figma, .figma-svg', {
    scrollTrigger: {
        trigger: '.tools-list .figma',
        start: 'center 40%',
        end: 'top 40%',
        markers: false,
        scrub: 1
    },
    opacity: 1
})

gsap.to('.tools-list .adobe, .adobe-svg', {
    scrollTrigger: {
        trigger: '.tools-list .adobe',
        start: 'center 40%',
        end: 'top 40%',
        markers: false,
        scrub: 1
    },
    opacity: 1
})

gsap.to('.tools-list .adobe-photoshop, .adobe-photoshop-svg', {
    scrollTrigger: {
        trigger: '.tools-list .adobe-photoshop',
        start: 'center 40%',
        end: 'top 40%',
        markers: false,
        scrub: 1
    },
    opacity: 1
})

gsap.to('.tools-list .adobe-illustrator, .adobe-illustrator-svg', {
    scrollTrigger: {
        trigger: '.tools-list .adobe-illustrator',
        start: 'center 40%',
        end: 'top 40%',
        markers: false,
        scrub: 1
    },
    opacity: 1
})

gsap.to('.tools-list .adobe-premier, .adobe-premier-svg', {
    scrollTrigger: {
        trigger: '.tools-list .adobe-premier',
        start: 'center 40%',
        end: 'top 40%',
        markers: false,
        scrub: 1
    },
    opacity: 1
})

gsap.to('.tools-list .adobe-ae, .adobe-ae-svg', {
    scrollTrigger: {
        trigger: '.tools-list .adobe-ae',
        start: 'center 40%',
        end: 'top 40%',
        markers: false,
        scrub: 1
    },
    opacity: 1
})

gsap.to('.tools-list .google, .google-svg', {
    scrollTrigger: {
        trigger: '.tools-list .google',
        start: 'center 40%',
        end: 'top 40%',
        markers: false,
        scrub: 1
    },
    opacity: 1
})

gsap.to('.tools-list .notion, .notion-svg', {
    scrollTrigger: {
        trigger: '.tools-list .notion',
        start: 'center 40%',
        end: 'top 40%',
        markers: false,
        scrub: 1
    },
    opacity: 1
})

gsap.to('.tools-list .miro, .miro-svg', {
    scrollTrigger: {
        trigger: '.tools-list .miro',
        start: 'center 40%',
        end: 'top 40%',
        markers: false,
        scrub: 1
    },
    opacity: 1
})

gsap.to('.tools-list .trello, .trello-svg', {
    scrollTrigger: {
        trigger: '.tools-list .trello',
        start: 'center 40%',
        end: 'top 40%',
        markers: false,
        scrub: 1
    },
    opacity: 1
})


gsap.to('.floating-circle-works', {
    scrollTrigger: {
        trigger: '.floating-circle-works',
        start: 'center 40%',
        endTrigger: '.hervest',
        end: 'top 40%',
        pin: true,
        markers: false
    }
})

gsap.to('.vaulthill-header, .vaulthill .role, .vaulthill-svg', {
    scrollTrigger: {
        trigger: '.vaulthill',
        start: 'center 40%',
        end: 'top 40%',
        markers: false,
        scrub: 1
    },
    opacity: 1
})

gsap.to('.neggster-header, .neggster .role, .neggster-svg', {
    scrollTrigger: {
        trigger: '.neggster',
        start: 'center 40%',
        end: 'top 40%',
        markers: false,
        scrub: 1
    },
    opacity: 1
})

gsap.to('.outpost-header, .outpost .role, .outpost-svg', {
    scrollTrigger: {
        trigger: '.outpost',
        start: 'center 40%',
        end: 'top 40%',
        markers: false,
        scrub: 1
    },
    opacity: 1
})

gsap.to('.tamkeem-header, .tamkeem .role, .tamkeem-svg', {
    scrollTrigger: {
        trigger: '.tamkeem',
        start: 'center 40%',
        end: 'top 40%',
        markers: false,
        scrub: 1
    },
    opacity: 1
})

gsap.to('.hervest-header, .hervest .role, .hervest-svg', {
    scrollTrigger: {
        trigger: '.hervest',
        start: 'center 40%',
        end: 'top 40%',
        markers: false,
        scrub: 1
    },
    opacity: 1
})


gsap.to('.floating-circle-school', {
    scrollTrigger: {
        trigger: '.floating-circle-school',
        start: 'center 40%',
        endTrigger: '.university-ilorin',
        end: 'top 40%',
        pin: true,
        markers: false
    }
})

gsap.to('.product-school-header, .product-school .role, .product-school-svg', {
    scrollTrigger: {
        trigger: '.product-school',
        start: 'center 40%',
        end: 'top 40%',
        markers: false,
        scrub: 1
    },
    opacity: 1
})

gsap.to('.university-ilorin-header, .university-ilorin .role, .university-ilorin-svg', {
    scrollTrigger: {
        trigger: '.university-ilorin',
        start: 'center 40%',
        end: 'top 40%',
        markers: false,
        scrub: 1
    },
    opacity: 1
})