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


startLoader();
function startLoader() {
    let currentValue = 0;
    function updateCounter() {

        if ((currentValue = 100)) {
            window.addEventListener("load", function () {
                document.getElementById("counter").textContent = "100";
                document.getElementById("counter").style.margin = "60vh 37vw";
                removeLoader();
            })
        }
        if (currentValue > 100) {
            currentValue = 99;
        }
        document.getElementById("counter").textContent=currentValue;
        if(currentValue <10 && currentValue>=0){
            document.getElementById("counter").style.margin="60vh 43vw";
        }else if(currentValue <100 && currentValue>=10){
            document.getElementById("counter").style.margin="60vh 40vw";
        }
        currentValue += Math.floor(Math.random() * 10) + 1;
        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay)
    }
    updateCounter();
}
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
