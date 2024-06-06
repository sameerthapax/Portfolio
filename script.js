
gsap.registerPlugin(ScrollTrigger);
gsap.to("header",{
    scrollTrigger:{
        trigger:'header',
        start:'top top',
        end: 'bottom top',
        markers: false,
        pin: true,
        pinSpacing:false,
    }
})


gsap.to("#avatar",{
    scrollTrigger:{
        trigger:'#avatar',
        start:'top top',
        endTrigger: 'about-page',
        end: 'bottom 130%',
        markers: false,
        pin: true,
        pinSpacing:false,
        scrub: 3,

    }
})

gsap.to("#page2",{
    scrollTrigger:{
        trigger:'#page2',
        start:'top top',
        end: 'bottom top',
        markers: false,
        pin: "#page2",

    }
})
gsap.to("#page3",{
    scrollTrigger:{
        trigger:'#page3',
        start:'top top',
        end: 'bottom top',
        markers: false,
        pin: "#page3",

    }
})
gsap.to("#page4",{
    scrollTrigger:{
        trigger:'#page4',
        start:'top top',
        end: 'bottom 40%',
        markers: false,
        pin: "#page4",
        pinSpacing:false,

    }
})
