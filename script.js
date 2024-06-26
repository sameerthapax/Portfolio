// Initialize LocomotiveScroll and GSAP plugins
const scroll = new LocomotiveScroll();
gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollToPlugin);

// Initialize Lenis for smooth scrolling
const lenis = new Lenis();

lenis.on('scroll', (e) => {
    console.log(e);
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(100);

// Scroll reveal animations
const slideUp = {
    origin: 'bottom',
    distance: '10px',
    duration: 800,
    easing: 'ease-in-out',
    delay: 1000,
};

const slideUp1 = {
    origin: 'bottom',
    distance: '100px',
    duration: 1000,
    easing: 'ease-in-out',
};

const slideUp2 = {
    origin: 'right',
    duration: 500,
    easing: 'ease-in-out',
};

const slideUp3 = {
    origin: 'bottom',
    duration: 1000,
    easing: 'ease-in-out',
    delay: 500,
};

// // GSAP animations for elements
gsap.to("#avatar", {
    scrollTrigger: {
        trigger: '#avatar',
        start: 'top top',
        endTrigger: '#page2',
        end: 'bottom 60%',
        markers: false,
        pin: true,
        pinSpacing: false,
        scrub: 1,
    },
});


gsap.to("#animated-text", {
    scrollTrigger: {
        trigger: '#animated-text',
        start: 'top top',
        end: 'bottom top',
        markers: {
            startColor: "transparent",
            endColor: "transparent",
        },
        pin: false,
        pinSpacing: false,
        scrub: true,
    },
    opacity: 0,
});

gsap.to("nav", {
    scrollTrigger: {
        trigger: 'nav',
        start: 'top 1%',
        endTrigger: "#page3",
        end: '40% top',
        markers: false,
        pin: "nav",
        pinSpacing: false,
    }
});

gsap.to("#homeNevButton", {
    scrollTrigger: {
        trigger: '#page',
        start: 'top 20%',
        endTrigger: "#page",
        end: 'bottom center',
        markers: false,
        toggleActions: "play reverse play reverse",
    },
    backgroundColor: "rgba(196,195,195,0.55)",
});

gsap.to("#aboutNevButton", {
    scrollTrigger: {
        trigger: '#page2',
        start: '-50% top',
        endTrigger: "#page2",
        end: '150% top',
        markers: false,
        toggleActions: "play reverse play reverse",
    },
    backgroundColor: "rgba(196,195,195,0.55)",
});

gsap.to("#projectNevButton", {
    scrollTrigger: {
        trigger: '#page4',
        start: '-50% top',
        endTrigger: "#page4",
        end: 'bottom top',
        markers: false,
        toggleActions: "play reverse play reverse",
    },
    backgroundColor: "rgba(196,195,195,0.55)",
});

gsap.to("#ContactNevButton", {
    scrollTrigger: {
        trigger: '#page4',
        start: '100% top',
        endTrigger: "#page4",
        end: '300% top',
        markers: false,
        toggleActions: "play reverse play reverse",
    },
    backgroundColor: "rgba(196,195,195,0.55)",
});

gsap.to("#page2", {
    scrollTrigger: {
        trigger: '#page2',
        start: 'top top',
        end: 'bottom center',
        markers: false,
        pin: "#page2",
        pinSpacing: true,
        scrub: 0,
    },
    ease: "power4.inOut",
});

gsap.to("#about-content", {
    scrollTrigger: {
        trigger: '#page2',
        start: 'top top',
        end: 'bottom top',
        markers: false,
        pin: false,
        pinSpacing: false,
        scrub: 2,
    },
    ease: "power4.inOut",
});

document.addEventListener('DOMContentLoaded', function() {
    // Reveal timeline items on scroll
    gsap.utils.toArray('.timeline-item').forEach(item => {
        gsap.fromTo(item, {
            opacity: 0,
            y: "05vh"
        }, {
            opacity: 1,
            y: "-1vh",
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                end: "top 60%",
                scrub: 1,
                markers: false,
            }
        });
        gsap.to(item, {
            borderRadius: 360,
            scaleY: 0,
            scale: 0,
            scrollTrigger: {
                trigger: item,
                start: "top 20%",
                end: "top 10%",
                scrub: 1,
                markers: false,
            },
            ease: "sine.inOut",
        });
    });
});
let page3Animationin  = new gsap.timeline({scrollTrigger: {
    trigger: '#page3',
        start: '-90% top',
        end: '-60% top',
        markers: false,
        scrub: 1,}})
page3Animationin
    .set("#page3",{scale:0.5, yPercent:50,visibility:"visible", background: "rgba(238, 239, 252, 0.38)",
        boxShadow: "0 4px 30px rgba(255, 255, 255, 0.1)", backdropFilter: "blur(2vh)", webkitBackdropFilter: "blur(2vh)"})
    .to("#page3", {
    ease: "power2.inOut", scale:1, yPercent:0,
});
let page3Animationout  = new gsap.timeline({scrollTrigger: {
        trigger: '#page3',
        start: '300% top',
        end: '330% top',
        markers: false,
        scrub: 1,}})
page3Animationout
    .to("#page3",{ scale:1, borderRadius:"25vh"  })


gsap.to("#page3", {
    scrollTrigger: {
        trigger: '#page3',
        start: 'top top',
        end: '300% top',
        markers: false,
        pin: "#page3",
        pinSpacing:true,
    },
});
gsap.to("#page3", {
    scrollTrigger: {
        trigger: '#page3',
        start: '-50 top',
        end: 'top top',
        markers: false,
        scrub: 1,
    },borderRadius:0, backgroundColor: "black"
});
const text=new SplitType("#page3Heading", {types: "chars"});
gsap.set("#page3Heading", {autoAlpha: 1});
gsap.set(text.chars,{yPercent:0});



gsap.to(text.chars,{
        yPercent: -490,
        stagger:{from: "center", amount:1},
        scrollTrigger:{
            trigger:"#page3Heading",
            start:'-80% top',
            end:()=> `+=${document. querySelector ("#page3Heading").offsetHeight *0.25}`,
            scrub:1,
            markers: false
        },
        fontSize:"8vw"
})



// gsap.to("#page4", {
//     scrollTrigger: {
//         trigger: '#page4',
//         start: 'top top',
//         end: 'bottom 40%',
//         markers: false,
//         pin: "#page4",
//         scrub: 2,
//     },
//     ease: "power4.inOut",
// });

const tl = new gsap.timeline({
    scrollTrigger: {
        trigger: '#page-title',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        markers: false,
    }
});

const tl3 = new gsap.timeline({
    scrollTrigger: {
        trigger: '#page-title',
        start: 'top top',
        end: '60% top',
        scrub: true,
        markers: false,
    }
});

const tl2 = new gsap.timeline({
    scrollTrigger: {
        trigger: '#page-title',
        start: '175% top',
        endTrigger: '#page3',
        end: 'top top',
        scrub: true,
        markers: false,
    }
});

const tl4 = new gsap.timeline({
    scrollTrigger: {
        trigger: '#page-title',
        start: '175% top',
        endTrigger: '#page3',
        end: 'top top',
        scrub: true,
        markers: false,
    }
});

tl.from("#page-title", { y: -700, duration: 2 });
tl3.from("#title-background", { y: 700, duration: 2 });
tl2.to("#page-title", { y: 700, duration: 2 });
tl4.to("#title-background", { y: -700, duration: 2 });

window.addEventListener("load", function() {
    removeLoader();
    ScrollReveal().reveal('header', slideUp1);
    ScrollReveal().reveal('#page2', slideUp1);
});

ScrollReveal().reveal('#page4', slideUp2);

function removeLoader() {
    gsap.to("#preLoader", 0.5, {
        height: "75vh",
        width: "94vw",
        borderRadius: "15vw",
        border: "solid #ffffff 1px",
        background: "linear-gradient(180deg, rgba(255,255,255,0.7581626400560224) 0%, rgba(255,255,255,0.8534007352941176) 39%, rgba(175,200,251,0.8618040966386554) 100%)",
        boxShadow: "0 8px 32px 0 rgba(171, 171, 171, 0.1)",
        margin: "1vw auto",
        y: 47,
        x: 50,
        display: "none",
        ease: "power.inOut"
    });

    gsap.from("#page", 1.1, {
            height: 500,
            width: 500,
            ease: "elastic.inOut",
            backgroundColor: "transparent",
        opacity: 0
        }, ScrollReveal().reveal('#avatar', slideUp),
        ScrollReveal().reveal('#title', slideUp3));

    gsap.from("#navigation", 1, {
        height: 0,
        width: 0,
        x: "32vw",
        y: "2vh",
        ease: "power4.inOut",
        backgroundColor: "transparent"
    });
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        gsap.to(window, { duration: 2, scrollTo: target, ease: "power4.inOut" });
    });
});

const words2 = ["Hello there! I'm originally from the stunning city of Pokhara, Nepal, but these days you'll find me navigating the halls of Murray State University in Kentucky, where I'm wrapping up my Bachelor's degree in Computer Science. My journey has been fueled by a fascination with new technologies and an insatiable curiosity about how things tick.\n" +
"\n" +
"            As a senior, I've tackled a variety of projects, from developing a fully functional car dealership service management system (yes, it's as complicated as it sounds) to crafting a library management system using Java. I've even dabbled in the art of creating a lexer and parser for a programming language called \"Xcite\" in C++. Oh, and this very portfolio? Built with HTML, CSS, and JavaScript, sprinkled with some APIs and plugins for good measure. Currently, I'm diving headfirst into Swift development – because why not?\n" +
"\n" +
"            Before diving into the tech world, I managed a Ford dealership in Nepal for a year. Picture this: a fresh graduate running a car dealership. It was like a live-action episode of \"The Apprentice,\" only with more cars and fewer boardroom showdowns. This adventure sharpened my leadership and organizational skills, prepping me for the next big step – studying in the USA.\n" +
"\n" +
"            When I'm not buried in code, you can catch me on the basketball court or at the gym, attempting to maintain some semblance of a balanced lifestyle. My professional mantra? \"There is a solution. One just has to figure out how.\" It's a philosophy that keeps me tackling challenges with a smile (and sometimes a groan), always on the lookout for innovative solutions in the ever-evolving world of technology."];

const words = ["Sameer", 'A Developer', "A Student", "A Senior Year"];

gsap.to("#cursor", { opacity: 0, repeat: -1, yoyo: true, duration: 0.5, ease: "power1.inOut" });
gsap.to("#content-text2", { opacity: 0, repeat: -1, yoyo: true, duration: 0.5, ease: "power1.Out" });

let tiMaster = gsap.timeline({ repeat: -1 });
let tiMaster2 = gsap.timeline({
    scrollTrigger: {
        trigger: '#page-title',
        start: '50% top',
        end: '175% top',
        scrub: true,
        markers: false,
    }
});

words.forEach((word) => {
    let tlText = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 2 });
    tlText.to("#animated-text", { duration: 1, text: word });
    tiMaster.add(tlText);
});

words2.forEach((word) => {
    let tlText = gsap.timeline({ repeat: 0, yoyo: true, repeatDelay: 0 });
    tlText.to("#content-text", { duration: 15, text: word });
    tiMaster2.add(tlText);
});
