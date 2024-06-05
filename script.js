
gsap.registerPlugin(ScrollTrigger);
gsap.to("header",{
    scrollTrigger:{
        trigger:'header',
        start:'top top',
        end: 'bottom top',
        markers: true,
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
        markers: true,
        pin: true,
        pinSpacing:false

    }
})
gsap.to("#page2",{
    scrollTrigger:{
        trigger:'#page2',
        start:'top top',
        end: 'bottom top',
        markers: true,
        pin: "#page2",

    }
})
gsap.to("#page3",{
    scrollTrigger:{
        trigger:'#page3',
        start:'top top',
        end: 'bottom top',
        markers: true,
        pin: "#page3",

    }
})
gsap.to("#page4",{
    scrollTrigger:{
        trigger:'#page4',
        start:'top top',
        end: 'bottom 40%',
        markers: true,
        pin: "#page4",
        pinSpacing:false,

    }
})