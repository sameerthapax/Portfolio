const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
lenis.on('scroll', (e) => {
    console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(10)


requestAnimationFrame(raf)
gsap.registerPlugin(ScrollTrigger);


window.addEventListener("load", function () {
    removeLoader();
})


function removeLoader(){
    gsap.to("#preLoader",0.25, { zIndex:-5,opacity:0,})

}
gsap.to("#avatar",{
    scrollTrigger:{
        trigger:'#avatar',
        start:'bottom top',
        endTrigger: '#page4',
        end: 'bottom top',
        markers: false,
        pin: true,
        pinSpacing:false,
        scrub: 1,
    }
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
