
const scroll = new LocomotiveScroll();
gsap.registerPlugin(ScrollTrigger, TextPlugin);

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
const slideUp1 = {
    distance: '150%',
    origin: 'bottom',
    opacity: false,
    delay: 100,
};
const slideUp2 = {
    distance: '150%',
    origin: 'bottom',
    opacity: false,

};
const slideUp3 = {
    distance: '150%',
    origin: 'bottom',
    opacity: false,
    delay: 300,
};
window.addEventListener("load", function () {
    removeLoader();
    ScrollReveal().reveal('header', slideUp1 );
    ScrollReveal().reveal('.navigation', slideUp2 );
    ScrollReveal().reveal('#page', slideUp3 );
    ScrollReveal().reveal('#page2', slideUp3 );
    ScrollReveal().reveal('#page3', slideUp2 );
    ScrollReveal().reveal('#page4', slideUp2 );
    ScrollReveal().reveal('#about-page', slideUp1 );
    ScrollReveal().reveal('#project-page', slideUp1 );
    ScrollReveal().reveal('.project-item', slideUp1 );
    ScrollReveal().reveal('#contact-page', slideUp1 );

})

function removeLoader(){
    gsap.to("#preLoader",0.25, {display:"none"})

}
const words2= ["Hello there! I'm originally from the stunning city of Pokhara, Nepal, but these days you'll find me navigating the halls of Murray State University in Kentucky, where I'm wrapping up my Bachelor's degree in Computer Science. My journey has been fueled by a fascination with new technologies and an insatiable curiosity about how things tick.\n" +
"\n" +
"            As a senior, I've tackled a variety of projects, from developing a fully functional car dealership service management system (yes, it's as complicated as it sounds) to crafting a library management system using Java. I've even dabbled in the art of creating a lexer and parser for a programming language called \"Xcite\" in C++. Oh, and this very portfolio? Built with HTML, CSS, and JavaScript, sprinkled with some APIs and plugins for good measure. Currently, I'm diving headfirst into Swift development – because why not?\n" +
"\n" +
"            Before diving into the tech world, I managed a Ford dealership in Nepal for a year. Picture this: a fresh graduate running a car dealership. It was like a live-action episode of \"The Apprentice,\" only with more cars and fewer boardroom showdowns. This adventure sharpened my leadership and organizational skills, prepping me for the next big step – studying in the USA.\n" +
"\n" +
"            When I'm not buried in code, you can catch me on the basketball court or at the gym, attempting to maintain some semblance of a balanced lifestyle. My professional mantra? \"There is a solution. One just has to figure out how.\" It's a philosophy that keeps me tackling challenges with a smile (and sometimes a groan), always on the lookout for innovative solutions in the ever-evolving world of technology."];

const words = ["Sameer","a Software Dev", "a Student", "a Senior year"];
gsap.to("#cursor", {opacity: 0, repeat: -1, yoyo: true, duration: 0.5, ease: "power2.inOut"}) ;
gsap.to("#content-text2", {opacity: 0, repeat: -1, yoyo: true, duration: 0.5, ease: "power2.inOut"})
let tiMaster = gsap.timeline({ repeat: -1 });
let tiMaster2 = gsap.timeline({scrollTrigger:{
        trigger:'#page-title',
        start:'50% top',
        end: '175% top',
        toggleActions:'play reverse play reverse',
        scrub:true,
        markers:false,
    }, });
words.forEach( (word) => {
    let tlText = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
    tlText.to("#animated-text", { duration: 1, text: word });
    tiMaster.add (tlText)});
words2.forEach( (word) => {
    let tlText = gsap.timeline({ repeat: 0,yoyo: true, repeatDelay: 0 });
    tlText.to("#content-text", { duration: 15, text: word });
    tiMaster2.add (tlText)});
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
        start:'top 6%',
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
const tl=new gsap.timeline({scrollTrigger:{
    trigger:'#page-title',
    start:'top top',
    end: 'bottom top',
    scrub:4,
    markers:false,
    }
});
const tl3=new gsap.timeline({scrollTrigger:{
        trigger:'#page-title',
        start:'top top',
        end: '60% top',
        scrub:2,
        markers:false,
    }
});
const tl2=new gsap.timeline({scrollTrigger:{
    trigger:'#page-title',
    start:'175% top',
    endTrigger: '#page3',
    end: 'top top',
    scrub:2,
    markers:false}
})
const tl4=new gsap.timeline({scrollTrigger:{
        trigger:'#page-title',
        start:'175% top',
        endTrigger: '#page3',
        end: 'top top',
        scrub:1,
        markers:false}
})

tl.from("#page-title",{y: -700, duration:3,
})
tl3.from("#title-background",{y: 700, duration:3
})
tl2.to("#page-title",{y: 700, duration:3})
tl4.to("#title-background",{y: -700, duration:1})

