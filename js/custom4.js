let tl1 = new TimelineMax({

});

tl1.to(".cover", {height: "0vh", duration: 4.5, ease: "power2.easeOut", stagger: 0.3});
tl1.from(".brand-name", {y: -30, opacity: 0, duration: 1, ease: "Expo.easeInOut"});
tl1.from(".navbar-toggler-icon", {y: -30, opacity: 0, duration: 1, ease: "power2.ease"}, "-=0.5");
tl1.from(".nav-item", {y: -30, opacity: 0, duration: 2, ease: "Expo.easeInOut", stagger: 0.2}, "-=0.6");
tl1.from(".form-head", {x: -30, opacity: 0, duration: 1.5, ease: "power3.ease"}, "-=0.8");
tl1.from(".main-form", {x: 100, opacity: 0, duration: 1, ease: "power3.easeOut"}, "-=0.9");
tl1.from("label", {x: -25, opacity: 0, duration: 1, ease: "Expo.ease", stagger: 0.2})
tl1.from("input", {y: 50, opacity: 0, duration: 1.5, ease: "power2.ease", stagger: 0.2}, "-=1");
tl1.from("#textarea", {y: 40, opacity: 0, duration: 1, ease: "Expo.easeOut"}, "-=1.1");
tl1.from(".submit-btn", {opacity: 0, duration: 1, ease: "Expo.ease"}, "-=0.3")




let main_body = document.getElementsByClassName("main-body")[0]; // get the body tag of the html file

function timer(){
    main_body.style.overflowY = "auto"; // make the page scrollable
    main_body.style.overflowX = "hidden"
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
            ease: Expo.easeInOut,
            stagger: 0.3
        });

    }else{
        reverse()
    }
}
