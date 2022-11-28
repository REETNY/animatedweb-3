
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        start: "top top",
        end: "bottom bottom",
        toggleActions: "play none none reset"
    }
});

tl.from(".intro-head2", {y: -50, opacity: 0, duration: 1.5, ease: "Expo.easeInOut" });
tl.from(".project-cont", {x: 300, opacity: 0, duration: 3, stagger: 0.3, ease: "Expo.easeInOut"}, "-=1");
tl.fromTo(".more-projects", {opacity: 0, ease: "Expo.easeInOut"}, {opacity: 1, duration: 2});


let tl2 = new TimelineMax({

});

tl2.to(".cover", {height: "0vh", duration: 4.5, ease: "power2.easeOut", stagger: 0.2});
tl2.from(".brand-name", {y: -30, opacity: 0, duration: 2, ease: "Expo.easeInOut"}, "-=0.8")
tl2.from(".navbar-toggler-icon", {y: -30, opacity: 0, duration: 1, ease: "power2.ease"}, "-=0.5");
tl2.from(".nav-item", {y: -30, opacity: 0, duration: 2, ease: "Expo.easeInOut", stagger: 0.2}, "-=0.8")
tl2.from(".intro-name", {y: -30, opacity: 0, duration: 2, ease: "power2.easeIn", stagger: 0.2}, "-=0.5")
tl2.from("#hero-conts", {opacity: 0, duration: 1, ease: "power2.easeIn"}, "-=0.5")
tl2.from(".hero-1", {x: -50, opacity: 0, duration: 1.5, ease: "power2.easeIn", stagger: 0.2}, "-=0.5")
tl2.from(".intro-intro", {y: -70, opacity: 0, duration: 1.5, ease: "power2.easeIn", stagger: 0.2}, "-=2")
tl2.from(".inTouch-btn", {y: -50, rotate: 360, opacity: 0, duration: 1.5, ease: "power2.easeIn", stagger: 0.2}, "-=0.7")



let main_body = document.getElementsByClassName("main-body")[0]; // get the body tag of the html file

function timer(){
    main_body.style.overflow = "auto"; // make the page scrollable
}


setTimeout(timer, 5000); // make the timer function work after 5sec for the overlay anime to complete





let navBar = document.getElementsByClassName("navbar-toggler")[0]; // get the navbar button 
let navCollapse = document.getElementsByClassName("navbar-collapse")[0]; // get the navbar collapse 

// adding some transform to the navbar button
navBar.addEventListener('click', openNav);

function openNav(){
    navBar.classList.toggle("openNav");
    navCollapse.classList.toggle("open");


    if(navCollapse.classList.contains('open')){

        TweenMax.from(".nav-item", 2, {
            delay: 0.5,
            opacity: 0,
            x: -100,
            ease: "Expo.easeInOut",
            stagger: 0.3
        });

    }else{
        reverse()
    }
}


// Can also be included with a regular script tag
var typed = new Typed(".typed", {
    strings: ['AJIDE SHAMSIDEEN', "a WEB DEVELOPER"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

var typed = new Typed(".designer", {
    strings: ['AJIDE SHAMSIDEEN'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})


