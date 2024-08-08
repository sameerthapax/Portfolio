// Initialize LocomotiveScroll and GSAP plugins

gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollToPlugin);

// Initialize Lenis for smooth scrolling
// Initialize Lenis for smooth scrolling

const lenis = new Lenis({
    duration: 2,
    easing:(t) => 1 - Math.pow(1 - t, 5),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    smoothTouch: false,
    wheelMultiplier: 1,
    touchMultiplier: 2,
});

// GSAP ScrollTrigger configuration
gsap.registerPlugin(ScrollTrigger);

// Update ScrollTrigger on Lenis scroll
lenis.on('scroll', ScrollTrigger.update);

// Request animation frame for smooth scrolling
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Refresh ScrollTrigger after setting up Lenis
ScrollTrigger.refresh();

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
    backgroundColor: "rgba(248,4,4,0.56)",
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
    backgroundColor: "rgba(248,4,4,0.56)",
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
    backgroundColor: "rgba(248,4,4,0.56)",
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
    backgroundColor: "rgba(248,4,4,0.56)",
});
class HoverButton {
    constructor(el) {
        this.el = el;
        this.hover = false;
        this.calculatePosition();
        this.attachEventsListener();
    }

    attachEventsListener() {
        window.addEventListener('mousemove', e => this.onMouseMove(e));
        window.addEventListener('resize', e => this.calculatePosition(e));
    }

    calculatePosition() {
        gsap.set(this.el, {
            x: 0,
            y: 0,
            scale: 1
        });
        const box = this.el.getBoundingClientRect();
        this.x = box.left + (box.width * 0.5);
        this.y = box.top + (box.height * 0.5);
        this.width = box.width;
        this.height = box.height;
    }

    onMouseMove(e) {
        let hover = false;
        let hoverArea = (this.hover ? 0.4 : 0.3);
        let x = e.clientX - this.x;
        let y = e.clientY - this.y;
        let distance = Math.sqrt( x*x + y*y );
        if (distance < (this.width * hoverArea)) {
            hover = true;
            if (!this.hover) {
                this.hover = true;
            }
            this.onHover(e.clientX, e.clientY);
        }

        if(!hover && this.hover) {
            this.onLeave();
            this.hover = false;
        }
    }

    onHover(x, y) {
        gsap.to(this.el,  {
            x: (x - this.x) * 0.4,
            y: (y - this.y) * 0.4,
            scale: 1.09,
            ease: 'power2.out',
            duration: 0.4
        });

    }
    onLeave() {
        gsap.to(this.el, {
            x: 0,
            y: 0,
            scale: 1,
            ease: 'elastic.out(1.2, 0.4)',
            duration: 0.7
        });

    }
}


function createHover(){
    const btn1 = document.querySelector('#homeNevButton');
    new HoverButton(btn1);

    const btn2 = document.querySelector('#aboutNevButton');
    new HoverButton(btn2);

    const btn3 = document.querySelector('#projectNevButton');
    new HoverButton(btn3);
    const btn4 = document.querySelector('#ContactNevButton');
    new HoverButton(btn4);
}


//navigation-end

// gsap.to("#page2", {
//     scrollTrigger: {
//         trigger: '#page2',
//         start: 'top top',
//         end: 'bottom center',
//         markers: false,
//         pin: "#page2",
//         pinSpacing: true,
//         scrub: 0,
//     },
//     ease: "power4.inOut",
// });
//
// gsap.to("#about-content", {
//     scrollTrigger: {
//         trigger: '#page2',
//         start: 'top top',
//         end: 'bottom top',
//         markers: false,
//         pin: false,
//         pinSpacing: false,
//         scrub: 2,
//     },
//     ease: "power4.inOut",
// });
function preloadImages(images, callback) {
    let loadedCount = 0;
    const totalImages = images.length;

    images.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            loadedCount++;
            if (loadedCount === totalImages) {
                callback();
            }
        };
    });
}
const imageSources = [...document.querySelectorAll('.inner-grid-item img')].map(img => img.src);


preloadImages(imageSources, () => {
const page2Animations=new gsap.timeline({smoothChildTiming:true, scrollTrigger:{
        trigger:"#page2",
        start:'-50% top',
        toggleActions:'play reverse play reverse',
        markers:false,}})
document.querySelectorAll(".grid-item").forEach(item=> {
    page2Animations.from(item,{yPercent:100, opacity:0,duration:1, ease:"back.inOut"},'<0.1')})
document.querySelectorAll('.inner-grid-item').forEach(item=>{
    gsap.set(item,{opacity:0,yPercent:100,willChange: 'opacity, transform'})
    gsap.set('#pp',{opacity:0,yPercent:20,willChange: 'opacity, transform'})
page2Animations.to(item,{opacity:1,yPercent:0, ease:"back.inOut",duration:0.6, onComplete:a},'<0.1')})
page2Animations.to('#pp',{opacity:1,yPercent:0, ease:"back.inOut",duration:0.6},'=')
});
let page3Animationin = new gsap.timeline({
    scrollTrigger: {
        trigger: '#page3',
        start: '-90% top',
        end: '-60% top',
        markers: false,
        scrub: 1,
    }
})


// page3Animationin
//     .set("#page3", {
//         scale: 0.5, yPercent: 50, visibility: "visible"
//     })
//     .to("#page3", {
//         ease: "power2.inOut", scale: 1, yPercent: 0,
//     });

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
    }, backgroundColor: "black"
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
//
// const page2TitleBackgroundIntro = new gsap.timeline({scrollTrigger:{
//         trigger: '#page-title',
//         start: '50% top',
//         endTrigger: '#page3',
//         end: 'top top',
//         scrub: 1,
//         markers: false,
//     }});
// page2TitleBackgroundIntro.from("#title-background",{y:700, duration:2,ease:'power1.inOut'})
// page2TitleBackgroundIntro.to("#title-background", {y: -700, duration: 2,delay:2, ease: 'power4.inOut'});

window.addEventListener("load", function () {
    // Initialize Lenis

    lenis.stop();
    setTimeout(function() {
        removeLoader();
    }, 1000);
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

    gsap.from("#navigation", 0.8, {
        yPercent:-100,
       scale:0,
        ease: "elastic.inOut",
        backgroundColor: "transparent",
        onComplete: createHover

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
    opacity:0, ease:"sine.inOut", duration:3

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

gsap.from('#page2',{xPercent:-60,borderRadius:'2vh',background: "rgba(0, 0, 0, 0.38)",border: "solid #e9e9e9 1px", ease:"expo.inOut", scrollTrigger:{
        trigger:'#sub-hero-section-content',
        start: '-85% top',
        end:'90% top',
        markers:false,
        scrub:true
}
})
let map;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        center: { lat: 36.616821, lng: -88.319794 },
        zoom: 10,
    });
}

initMap();
$(function() {
    $('.navButton').hover(function() {
        $('.circle').css('opacity','0.2');
    }, function() {
        // on mouseout, reset the background colour
        $('.circle').css('opacity', '1');
    });
})
const date = new Date();
$(function (){
    $('#age').text(date.getFullYear()-2001)
})
$('#currentLocation').text('Murray, KY, USA')

function a(){
    $('#progress-value').addClass("progress-value");
    $('.progress-value span').text(window.getComputedStyle(document.documentElement).getPropertyValue('--level-wigth'))

}
const leetcodeApi='https://leetcode-api-faisalshohag.vercel.app/sameerthapa';
let totalAttempt;
let totalEasy1;
let totalMedium1;
let totalHard1;
let totalSubmissionSolved;
let totalEasySubmissionSolved;
let totalMediumSubmissionSolved;
let totalHardSubmissionSolved;

async function getLeetCodeData(){
    const res= await fetch(leetcodeApi)
    const data= await res.json()
    totalAttempt=await data.totalSubmissions[0].submissions
    totalSubmissionSolved= await data.totalSubmissions[0].count;
    totalEasySubmissionSolved= await data.totalSubmissions[1].count;
    totalMediumSubmissionSolved= await data.totalSubmissions[2].count;
    totalHardSubmissionSolved=await data.totalSubmissions[3].count;
    totalEasy1= await data.totalEasy;
    totalHard1= await data.totalHard;
    totalMedium1= await data.totalMedium;
    setProgress(totalEasySubmissionSolved, totalMediumSubmissionSolved, totalHardSubmissionSolved);


}
getLeetCodeData()

function setProgress(easy, medium, hard) {
    const totalEasy = totalEasy1;
    const totalMedium = totalMedium1;
    const totalHard = totalHard1;

    const easyCircle = document.querySelector('.progress-ring-easy');
    const mediumCircle = document.querySelector('.progress-ring-medium');
    const hardCircle = document.querySelector('.progress-ring-hard');
    const easyText=document.querySelector('#easy span');
    const hardText=document.querySelector('#hard span');
    const mediumText=document.querySelector('#medium span');



    const radius = 45;
    const circumference = 2 * Math.PI * radius;

    const easyProgress = Math.min(((easy+1) / totalEasy) * circumference, circumference);
    const mediumProgress = Math.min(((medium+1) / totalMedium) * circumference, circumference);
    const hardProgress = Math.min(((hard+1) / totalHard) * circumference, circumference);

    easyCircle.style.strokeDasharray = `${easyProgress} ${circumference - easyProgress}`;
    mediumCircle.style.strokeDasharray = `${mediumProgress} ${circumference - mediumProgress}`;
    hardCircle.style.strokeDasharray = `${hardProgress} ${circumference - hardProgress}`;

    $(easyText).text(easy+"/"+totalEasy);
    $(mediumText).text(medium+"/"+totalMedium);
    $(hardText).text(hard+"/"+totalHard);
}


