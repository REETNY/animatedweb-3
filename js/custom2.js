let tl1 = new TimelineMax({

});
console.log(tl1)

tl1.to(".cover", {height: "0vh", duration: 4.5, ease: "power2.easeOut", stagger: 0.2});;
tl1.from(".brand-name", {y: -30, opacity: 0, duration: 2, ease: "Expo.easeInOut"}, "-=0.5");
tl1.from(".nav-item", {y: -30, opacity: 0, duration: 2, ease: "Expo.easeInOut", stagger: 0.2}, "-=0.8");


gsap.registerPlugin(ScrollTrigger);

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section1",
        start: "top top"
    }
});
tl2.from(".intro-head2", {y: -50, opacity: 0, duration: 1.5, ease: "Expo.easeInOut" }, "+=7");
tl2.from(".project-cont", {x: 70, opacity: 0, duration: 3, stagger: 0.3, ease: "Expo.easeInOut"}, "-=1");







let main_body = document.getElementsByClassName("main-body")[0]; // get the body tag of the html file

function timer(){
    main_body.style.overflowY = "auto"; // make the page scrollable
    main_body.overflowX = "hidden";
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
            delay: 0.2,
            opacity: 0,
            x: -100,
            ease: Expo.easeInOut,
            stagger: 0.3
        });

    }else{
        
    }
}


// Can also be included with a regular script tag

var typed = new Typed(".designer", {
    strings: ['AJIDE SHAMSIDEEN'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});