// Initialize LocomotiveScroll and GSAP plugins

gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollToPlugin);

// Initialize Lenis for smooth scrolling
// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
    smoothWheel: true,
    smoothTouch: true, // Enable smooth touch for mobile
    touchMultiplier: 2, // Increase touch scroll sensitivity
    gestureSupport: true // Enable gesture support
});

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
    distance: '4px',
    duration: 800,
    easing: 'ease-in-out',
    delay: 1000,
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
        start: '10% top',
        endTrigger: '#sub-hero-section',
        end: 'bottom 30%',
        markers: false,
        pin: true,
        pinSpacing: false,
        scrub: 10,
    },
});

//Navigation
gsap.to("nav", {
    scrollTrigger: {
        trigger: 'nav',
        start: 'top 1%',
        endTrigger: '#page4',
        end: '800% top',
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
        end: '180% top',
        markers: false,
        toggleActions: "play reverse play reverse",
    },
    backgroundColor: "rgba(173, 216, 230, 0.84)",
});

gsap.to("#ContactNevButton", {
    scrollTrigger: {
        trigger: '#page4',
        start: '200% top',
        endTrigger: "#page4",
        end: '300% top',
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
        end: '200% top',
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
const card2 = new gsap.timeline({smoothChildTiming:true , scrollTrigger:{
        trigger:'#page3',
        start:'top top',
        end:'200% top',
        scrub:true,
        markers:false

    }});
document.querySelectorAll('.card').forEach(card=> {
    card2.to(card, {yPercent: -130, opacity: 100, ease: 'power1.inOut', scale: 1, duration: 1})
    card2.to(card, {yPercent: -400, zIndex: -1, opacity: 0, ease: 'power1.inOut', duration: 1, delay:3})
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

tl.from("#page-title", {y: -700, duration: 2});
tl3.from("#title-background", {y: 700, duration: 2});
tl2.to("#page-title", {y: 700, duration: 2});
tl4.to("#title-background", {y: -700, duration: 2});

window.addEventListener("load", function () {
    lenis.stop();
    removeLoader();
    setTimeout(function() {
        lenis.start();
    }, 2000);
});
ScrollReveal().reveal('#page4', slideUp2);

function removeLoader() {
    gsap.to("#preLoader", 0.5, {
        height: "75vh",
        width: "94vw",
        borderRadius: "3vw",
        border: "solid black 1px",
        background: "transparent",
        boxShadow: "0 8px 32px 0 rgba(171, 171, 171, 0.1)",
        margin: "1vw auto",
        y: '13vh',
        x: 50,
        display: "none",
        ease: "power.inOut"
    });

    gsap.from("#hero-section", 1.1, {
            height: 500,
            width: 500,
            ease: "elastic.inOut",
            backgroundColor: "transparent",
            opacity: 0,
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
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let w, h, particles;
let particleDistance = 20;
let mouse = {
    x: undefined,
    y: undefined,
    radius: 50
}

function init() {
    resizeReset();
    animationLoop();
}

function resizeReset() {
    w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;

    particles = [];
    for (let y = (((h - particleDistance) % particleDistance) + particleDistance) / 2; y < h; y += particleDistance) {
        for (let x = (((w - particleDistance) % particleDistance) + particleDistance) / 2; x < w; x += particleDistance) {
            particles.push(new Particle(x, y));
        }
    }
}

function animationLoop() {
    ctx.clearRect(0, 0, w, h);
    drawScene();
    requestAnimationFrame(animationLoop);
}

function drawScene() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }
    drawLine();
}

function drawLine() {
    for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
            let dx = particles[a].x - particles[b].x;
            let dy = particles[a].y - particles[b].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < particleDistance * 1.5) {
                let opacity = 1 - (distance / (particleDistance * 1.5));
                ctx.strokeStyle = "rgba(0,0,0," + opacity + ")";
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
        }
    }
}

function mousemove(e) {
    mouse.x = e.x;
    mouse.y = e.y;
}

function mouseout() {
    mouse.x = undefined;
    mouse.y = undefined;
}

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 4;
        this.baseX = this.x;
        this.baseY = this.y;
        this.speed = (Math.random() * 25) + 5;
    }
    draw() {
        ctx.fillStyle = "rgba(255,255,255,1)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
    update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance; // 0 ~ 1
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let directionX = forceDirectionX * force * this.speed;
        let directionY = forceDirectionY * force * this.speed;

        if (distance < mouse.radius) {
            this.x -= directionX;
            this.y -= directionY;
        } else {
            if (this.x !== this.baseX) {
                let dx = this.x - this.baseX;
                this.x -= dx / 10;
            }
            if (this.y !== this.baseY) {
                let dy = this.y - this.baseY;
                this.y -= dy / 10;
            }
        }
    }
}

init();
window.addEventListener("resize", resizeReset);
window.addEventListener("mousemove", mousemove);
window.addEventListener("mouseout", mouseout);


document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        gsap.to(window, {duration: 2, scrollTo: target, ease: "power4.inOut"});
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
        scrub: 2,
}
})
const heroSectionOut= new gsap.timeline({scrollTrigger:{
    trigger:'#hero-section',
        start:'top top',
        end:'50% top',
        scrub: 2,
        markers: false,
},})

heroSectionOut.to('#title-2',{
    opacity:0,

})
heroSectionOut.to('#title-1',{
    opacity:0,

})
heroSectionOut.to('#hero-section',{
    scaleX:0,
    scaleY:0
})

gsap.to('#avatar', {xPercent:100, scrollTrigger:{
        trigger:'#sub-hero-section-content',
        start: 'top top',
        end:'90% top',
        markers:false,
        scrub:true

    },ease:'power1.inOut'})

gsap.from('#page2',{xPercent:-60,scrollTrigger:{
        trigger:'#sub-hero-section-content',
        start: '-25% top',
        end:'90% top',
        markers:false,
        scrub:true
}
})

