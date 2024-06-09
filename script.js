
gsap.registerPlugin(ScrollTrigger);


startLoader();
function startLoader() {
    let currentValue = 0;
    function updateCounter() {

        if (currentValue==100) {
            window.addEventListener("load", function () {
                document.getElementById("counter").textContent="100";
                document.getElementById("counter").style.margin="60vh 37vw";
                removeLoader();
            })
        }
        currentValue += Math.floor(Math.random() * 10) + 1;
        if (currentValue > 100) {
            currentValue = 99;
        }
        document.getElementById("counter").textContent=currentValue;
        if(currentValue <10 && currentValue>=0){
            document.getElementById("counter").style.margin="60vh 43vw";
        }else if(currentValue <100 && currentValue>=10){
            document.getElementById("counter").style.margin="60vh 40vw";
        }
        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay)
    }
    updateCounter();
}
function removeLoader(){
    gsap.to("#preLoader",0.25, { zIndex:-5,opacity:0,})

}


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
