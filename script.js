
const scroll = new LocomotiveScroll();
gsap.registerPlugin(ScrollTrigger);


window.addEventListener("load", function () {
    removeLoader();
})

function removeLoader(){
    gsap.to("#preLoader",0.25, {display:"none"})

}
gsap.to("#avatar",{
    scrollTrigger:{
        trigger:'#avatar',
        start:'top top',
        endTrigger: '#page2',
        end: 'bottom 80',
        markers: true,
        pin: true,
        pinSpacing:false,
        scrub:1,
    } ,
})
gsap.to("nav",{
    scrollTrigger:{
        trigger:'nav',
        start:'top top',
        endTrigger:"body",
        end: 'bottom top',
        markers: false,
        pin: "nav",
        pinSpacing:false,
    }
})
gsap.to("#main",{
    scrollTrigger:{
        trigger:'#page',
        start:'top 20%',
        end: 'bottom top',
        markers: false,
        snap: 1,
    scrub:false}

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
