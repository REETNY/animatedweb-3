
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
            ease: Expo.easeInOut,
            stagger: 0.3
        });

    }else{
        reverse()
    }
}



let tl1 = new TimelineMax({

});

tl1.to(".cover", {height: "0vh", duration: 4.5, ease: "power2.easeOut", stagger: 0.2});
tl1.from(".brand-name", {y: -30, opacity: 0, duration: 2, ease: "Expo.easeInOut"}, "-=0.5");
tl1.from(".my-img", {x: 90, opacity: 0, duration: 2, ease: "power2.easeIn"}, "-=0.3");
tl1.from(".about-head", {y: -30, opacity: 0, duration: 1, ease: "Expo.easeIn"}, "-=0.8");
tl1.from(".nav-item", {y: -20, opacity: 0, duration: 2, ease: "Expo.easeInOut", stagger: 0.22}, "-=0.5");
tl1.from(".about-me", {x: -80, opacity: 0, duration: 1.9, ease: "power3.ease"}, "-=1.5");
tl1.from(".skill-head", {y: -30, opacity: 0, duration: 1, ease: "Expo.ease"}, "-=0.7");
tl1.from(".each", {x: -40, opacity: 0, duration: 2, ease: "Expo.easeInOut", stagger: 0.3}, "-=0.3");
tl1.from(".contact-me", {y: -50, rotate: 360, opacity: 0, duration: 1.5, ease: "power2.easeIn", stagger: 0.2}, "-=0.7")







let main_body = document.getElementsByClassName("main-body")[0]; // get the body tag of the html file

let width = screen.width;


function timer(){
    

    if (width <= 1019){  // this checks if the width of the page
        main_body.style.overflow = "auto"; // make the page scrollable if conditin is met
    }else{
        main_body.style.overflow = "hidden"; // make the page unscrollable if not
    }
}


setTimeout(timer, 5000); // make the timer function work after 5sec for the overlay anime to complete

