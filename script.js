
const scroll = new LocomotiveScroll();
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
var slideUp1 = {
    distance: '150%',
    origin: 'bottom',
    opacity: false,
    delay: 100,
};
window.addEventListener("load", function () {
    removeLoader();
    ScrollReveal().reveal('header', slideUp1 );
    ScrollReveal().reveal('.page', slideUp1 );
    ScrollReveal().reveal('#about-page', slideUp1 );
    ScrollReveal().reveal('#project-page', slideUp1 );
    ScrollReveal().reveal('.project-item', slideUp1 );
    ScrollReveal().reveal('#contact-page', slideUp1 );
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
        markers: false,
        pin: true,
        pinSpacing:false,
        scrub:1,
    }, scale:0.5,
})
gsap.to("nav",{
    scrollTrigger:{
        trigger:'nav',
        start:'top 1%',
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
