// Initialize LocomotiveScroll and GSAP plugins

gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollToPlugin);

// Initialize Lenis for smooth scrolling
// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
    smoothWheel: true,
    smoothTouch: true, // Enable smooth touch for mobile
    touchMultiplier: 2, // Increase touch scroll sensitivity
    gestureSupport: true, // Enable gesture support
    duration:3
});

// lenis.on('scroll', (e) => {
//     console.log(e);
// });


function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
//mouse
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
const colors= ["#88e1eb", "#7bcddb", "#6fb9ca", "#64a6b9", "#5993a7", "#4f8196", "#456f84", "#3c5e72", "#324d60", "#293d4e", "#1f2d3d", "#151f2c"]
circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor= colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;

});

function animateCircles() {

    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();


// Scroll reveal animations
const slideUp = {
    origin: 'right',
    distance: '100px',
    duration: 800,
    easing: 'ease-in-out',
    delay: 100
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
    delay: 1000,
};

// // GSAP animations for elements
gsap.to("#avatar", {
    scrollTrigger: {
        trigger: '#avatar',
        start: '10% top',
        endTrigger: '#sub-hero-section',
        end: 'bottom 30%',
        markers: false,
        pin: true,
        pinSpacing: false,
    },
});

//Navigation
gsap.to("nav", {
    scrollTrigger: {
        trigger: 'nav',
        start: 'top 1%',
        endTrigger: '#page4',
        end: '900% top',
        markers: false,
        pin: "nav",
        pinSpacing: false,
    }
});

gsap.to("#homeNevButton", {
    scrollTrigger: {
        trigger: '#hero-section',
        start: 'top 20%',
        endTrigger: "#hero-section",
        end: 'bottom center',
        markers: false,
        toggleActions: "play reverse play reverse",
    },
    backgroundColor: "rgba(173, 216, 230, 0.84)",
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
    backgroundColor: "rgba(173, 216, 230, 0.84)",
});

gsap.to("#projectNevButton", {
    scrollTrigger: {
        trigger: '#page4',
        start: '-50% top',
        endTrigger: "#page4",
        end: '780% top',
        markers: false,
        toggleActions: "play reverse play reverse",
    },
    backgroundColor: "rgba(173, 216, 230, 0.84)",
});

gsap.to("#ContactNevButton", {
    scrollTrigger: {
        trigger: '#page4',
        start: '800% top',
        endTrigger: "#page4",
        end: '900% top',
        markers: false,
        toggleActions: "play reverse play reverse",
    },
    backgroundColor: "rgba(173, 216, 230, 0.84)",
});
//navigation-end

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

document.addEventListener('DOMContentLoaded', function () {
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
ScrollTrigger.refresh();
let page3Animationin = new gsap.timeline({
    scrollTrigger: {
        trigger: '#page3',
        start: '-90% top',
        end: '-60% top',
        markers: false,
        scrub: 1,
    }
})
page3Animationin
    .set("#page3", {
        scale: 0.5, yPercent: 50, visibility: "visible"
    })
    .to("#page3", {
        ease: "power2.inOut", scale: 1, yPercent: 0,
    });

gsap.to("#page3", {
    scrollTrigger: {
        trigger: '#page3',
        start: 'top top',
        end: '800% top',
        markers: false,
        pin: "#page3",
        pinSpacing: true,
    },
});
gsap.to("#page3", {
    scrollTrigger: {
        trigger: '#page3',
        start: '-50 top',
        end: 'top top',
        markers: false,
        scrub: 1,
    }, borderRadius: 0, backgroundColor: "black", border: 0, margin:0, width:'100vw'
});
const text = new SplitType("#page3Heading", {types: "chars"});
gsap.set("#page3Heading", {autoAlpha: 1});
gsap.set(text.chars, {yPercent: 0});

gsap.to(text.chars, {
    y: '7vh', color: "rgba(255,255,255,0.87)",
    stagger: {from: "center", amount: 1},
    scrollTrigger: {
        trigger: "#page3Heading",
        start: '-80% top',
        end: () => `+=${document.querySelector("#page3Heading").offsetHeight * 0.25}`,
        scrub: 1,
        markers: false
    },
    fontSize: "18vw"
})

const projectCard = new gsap.timeline({smoothChildTiming:true , scrollTrigger:{
        trigger:'#page3',
        start:'top top',
        end:'800% top',
        scrub:true,
        markers:false,
    }});
projectCard.fromTo('#projects-container',{xPercent:-100},{xPercent:0,opacity:100,duration:1, ease:'power1.inOut'})
document.querySelectorAll('.card').forEach((card,index)=> {
    // let i =(window.innerWidth)/2
    projectCard.to(card, {left: 75.5+"%",transform: "translate(0, -50%)", opacity: 100, ease: 'expo.inOut', scale: 1, duration: 0.5, zIndex:1})
    projectCard.to(card, {left: 150+(index)+"%", ease: 'expo.inOut', duration: 0.5, delay:3, scale:0.12, top:275+"%"})
})
projectCard.to('#projects-container',{xPercent:100,opacity:100,ease:'power4.inOut',duration:1})




const page2TitleIntro = new gsap.timeline({scrollTrigger:{
        trigger: '#page-title',
        start: '50% top',
        endTrigger: '#page3',
        end: 'top top',
        scrub: 1,
        markers: false,
    }});
page2TitleIntro.from("#page-title",{y:-700, duration:2,ease:'power1.inOut'})
page2TitleIntro.to("#page-title", {y: 700, duration: 2,delay:2, ease: 'power4.inOut'});

const page2TitleBackgroundIntro = new gsap.timeline({scrollTrigger:{
        trigger: '#page-title',
        start: '50% top',
        endTrigger: '#page3',
        end: 'top top',
        scrub: 1,
        markers: false,
    }});
page2TitleBackgroundIntro.from("#title-background",{y:700, duration:2,ease:'power1.inOut'})
page2TitleBackgroundIntro.to("#title-background", {y: -700, duration: 2,delay:2, ease: 'power4.inOut'});

window.addEventListener("load", function () {
    lenis.stop();
    removeLoader();
    setTimeout(function() {
        lenis.start();
    }, 2000);
});
ScrollReveal().reveal('#page4', slideUp2);

$(window).on('beforeunload', function() {
    $('body').hide();
    $(window).scrollTop(0);
});

function removeLoader() {
    gsap.to("#preLoader", 0.5, {
        background: "rgba(0, 0, 0, 0.12)",
        boxShadow: "0 8px 32px 0 rgba(5, 5, 5, 0.1)",
        backdropFilter: "blur(4px)",
        webkitBackdropFilter: "blur(4px)",
        borderRadius: "10px",
        border: '1px solid rgba(255, 255, 255, 0.18)',
        height: '6vh',
        width: "60%",
        margin: "0 auto auto",
        y: 0,
        x: "35%",
        display: "none",
        ease: "expo.inOut"
    });

    gsap.from("#hero-section", 1.1, {
            height: 500,
            width: 500,
            ease: "elastic.inOut",
            backgroundColor: "transparent",
            opacity: 0,
        }, ScrollReveal().reveal('#avatar', slideUp),
        ScrollReveal().reveal('#hero-title', slideUp3));

    gsap.from("#navigation", 1, {
        height: 0,
        width: 0,
        x: "32vw",
        y: "2vh",
        ease: "power4.inOut",
        backgroundColor: "transparent",

    });
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        gsap.to(window, {duration: 2, ease: "power4.inOut"},lenis.scrollTo(target,{duration:2}));
    });
});




    let typeSplit = new SplitType('#sub-hero-section-content', {
    types: 'words',
    tagName: 'span'
})

    gsap.from(typeSplit.words, {
        opacity: 0,
        duration: 0.5,
        yPercent:-10,
        ease: 'elastic.out',
        stagger: 0.1,

    scrollTrigger: {
        trigger: '#sub-hero-section-content',
        start: 'top 90%',
        end:'bottom 80%',
        markers: false,
        scrub: 0.5,
}
})
const heroSectionOut= new gsap.timeline({scrollTrigger:{
    trigger:'#hero-section',
        start:'top top',
        end:'40% top',
        scrub: true,
        markers: false,
},})

heroSectionOut.to('#title-2',{
    yPercent:-100, scale:0, ease:"sine.inOut", duration:5

})
gsap.to("#title-1",{rotateZ:'-180deg',ease:"expo.inOut",transformOrigin:"bottom left", scrollTrigger:{
    trigger:"#title-1",
        start:'-30% top',
        end:'bottom top',
        markers: false,
        scrub: true
    }})



gsap.to('#avatar', {xPercent:100,rotateZ:'90deg',transformOrigin:'bottom left',duration:2, scrollTrigger:{
        trigger:'#sub-hero-section-content',
        start: '-40% top',
        end:'90% top',
        markers:false,
        scrub:true

    },ease:'power1.inOut'})

gsap.from('#page2',{xPercent:-60,borderRadius:'2vh',background: "rgba(0, 0, 0, 0.38)",
    boxShadow: "0 4px 30px rgba(255, 255, 255, 0.1)",
backdropFilter: "blur(2vh)",
webkitBackdropFilter: "blur(2vh)",width:"99vw",border: "solid #e9e9e9 1px", ease:"expo.inOut", scrollTrigger:{
        trigger:'#sub-hero-section-content',
        start: '-85% top',
        end:'90% top',
        markers:false,
        scrub:true
}
})

$(function() {
    $('.navButton').hover(function() {
        $('.circle').css('opacity','0');
    }, function() {
        // on mouseout, reset the background colour
        $('.circle').css('opacity', '100');
    });
})

