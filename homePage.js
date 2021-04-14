var html = document.querySelector("html")
var hamburger = document.querySelector(".hamburgerMenu");
var rectangle1 = document.querySelector(".rectangle1");
var rectangle2 = document.querySelector(".rectangle2");
var rectangle3 = document.querySelector(".rectangle3");

var menu = document.querySelector(".navMenu")

var hamburgerOpenClass = false;

var toggler = document.querySelector(".toggler")

var nav = document.querySelector('.nav')

var navLogo = document.querySelector('.navLogo')

let homeText = document.querySelector('.homeText')
let labText = document.querySelector('.labText')
let aboutText = document.querySelector('.aboutText')
let contactText = document.querySelector('.contactText')
let lightHouse = document.querySelector('.lighthouse')
let body = document.querySelector('body')
let mainMoon = document.querySelector('.mainMoon')
let spot1 = document.querySelector('.spot1')
let spot2 = document.querySelector('.spot2')
let spot3 = document.querySelector('.spot3')

var cursor = document.querySelector('.cursor')
var cursorCircle = document.querySelector('.cursorCircle')

let hi = document.querySelector('.hi')
let aText = document.querySelector('.a')

let heroWorkButton = document.querySelector('.workButton')

let heroWorkButtonBackground = document.querySelector('.backgroundButton')

let heroButtonArrow = document.querySelector('.arrowWork')

toggler.classList.add('togglerHome')

    hamburger.addEventListener('click' , () => {

        if (hamburgerOpenClass == false){
            rectangle1.classList.add('menuOpen1')
            rectangle2.classList.add('menuOpen2')
            rectangle3.classList.add('menuOpen3')
            hamburger.classList.add('menuOpen')

            toggler.classList.add('togglerNav')
            toggler.classList.remove('togglerHome')

            menu.style.display = "flex";
            hamburgerOpenClass = true;
        }


        else{
            rectangle1.classList.remove('menuOpen1')
            rectangle2.classList.remove('menuOpen2')
            rectangle3.classList.remove('menuOpen3')
            hamburger.classList.remove('menuOpen')

            toggler.classList.add('togglerHome')
            toggler.classList.remove('togglerNav')

            menu.style.display = "none";
            hamburgerOpenClass = false;
        }
    })


var button = document.querySelector(".button")
let scrollDownText = document.querySelector('.scrollDownText')
let downArrowForMobileSvg = document.querySelector('.downArrowForMobileSvg')

var light = false;


toggler.addEventListener('click', () => {
    if (light == false){
        button.classList.add('dayMode')
        toggler.classList.add('togglerMoon')
        menu.classList.add('dayMenu')
        nav.classList.add('dayNav')
        navLogo.src = "Images/Light Logo.svg"
        homeText.classList.add('lightHome')
        labText.classList.add('lightLab')
        aboutText.classList.add('lightAbout')
        contactText.classList.add('lightContact')

        rectangle1.classList.add('lightMode1')
        rectangle2.classList.add('lightMode2')
        rectangle3.classList.add('lightMode3')


        cursor.classList.add('lightCursor')
        cursorCircle.classList.add('lightCursorCircle')

        body.classList.add('lightMode')

        mainMoon.classList.add('sunH');
        spot1.classList.add('sunH');
        spot2.classList.add('sunH');
        spot3.classList.add('sunH');

        aText.classList.add('lightA')
        hi.classList.add('lightHi')

        lightHouse.classList.add('ultraLightHouse')

        heroWorkButtonBackground.classList.add('lightBackgroundWork')

        scrollDownText.classList.add('lightScrollText')

        downArrowForMobileSvg.src = "Images/next 2(1).svg"

        html.style.backgroundColor = "#f6f6f6"

        light = true;
    }

    else if (light == true){
        button.classList.remove('dayMode')
        toggler.classList.remove('togglerMoon')
        menu.classList.remove('dayMenu')
        nav.classList.remove('dayNav')
        navLogo.src = "Images/Dark logo(1) 1.svg";
        homeText.classList.remove('lightHome')
        labText.classList.remove('lightLab')
        aboutText.classList.remove('lightAbout')
        contactText.classList.remove('lightContact')


        rectangle1.classList.remove('lightMode1')
        rectangle2.classList.remove('lightMode2')
        rectangle3.classList.remove('lightMode3')

        cursor.classList.remove('lightCursor')
        cursorCircle.classList.remove('lightCursorCircle')

        body.classList.remove('lightMode')

        mainMoon.classList.remove('sunH');
        spot1.classList.remove('sunH');
        spot2.classList.remove('sunH');
        spot3.classList.remove('sunH');

        aText.classList.remove('lightA')
        hi.classList.remove('lightHi')

        lightHouse.classList.remove('ultraLightHouse')

        heroWorkButtonBackground.classList.remove('lightBackgroundWork')

        scrollDownText.classList.remove('lightScrollText')

        downArrowForMobileSvg.src = "Images/next 2.svg"

        html.style.backgroundColor = "#02011e"

        light = false;
    }

})




window.addEventListener('mousemove', (e) => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';


    cursorCircle.style.top = e.pageY + 'px';
    cursorCircle.style.left = e.pageX + 'px';
});


toggler.addEventListener("mouseover", () => {
    cursor.classList.add("hoverCursor")
})


toggler.addEventListener("mouseleave", () => {
    cursor.classList.remove("hoverCursor")
})




navLogo.addEventListener("mouseover", () => {
    cursor.classList.add("hoverCursor")
})


navLogo.addEventListener("mouseleave", () => {
    cursor.classList.remove("hoverCursor")
})




hamburger.addEventListener("mouseover", () => {
    cursor.classList.add("hoverCursor")
})


hamburger.addEventListener("mouseleave", () => {
    cursor.classList.remove("hoverCursor")
})


let name = document.querySelector('.name')
let svg = document.querySelector('.svgName')
let moon = document.querySelector('.moonDiv')
let mouse = document.querySelector('.mouseDown')


name.addEventListener("mouseover", () => {
    cursor.classList.add("textCursor");
    svg.classList.add("hoverName");
    name.classList.add("hoverNameText");
    cursorCircle.classList.add("circleOver");
})


name.addEventListener("mouseleave", () => {
    cursor.classList.remove("textCursor");
    svg.classList.remove("hoverName");
    name.classList.remove("hoverNameText");
    cursorCircle.classList.remove("circleOver");
})



moon.addEventListener("mouseover", () => {
    cursorCircle.classList.add("circleOverMoon");
    cursor.classList.add("cursorOverMoon");
})


moon.addEventListener("mouseleave", () => {
    cursorCircle.classList.remove("circleOverMoon")
    cursor.classList.remove("cursorOverMoon")
})

lightHouse.addEventListener("mouseover", () => {
    cursorCircle.classList.add("circleOverMoon");
    cursor.classList.add("cursorOverMoon");
})


lightHouse.addEventListener("mouseleave", () => {
    cursorCircle.classList.remove("circleOverMoon")
    cursor.classList.remove("cursorOverMoon")
})



heroWorkButton.addEventListener("mouseover", () => {
    cursor.classList.add("hoverCursor")
})


heroWorkButton.addEventListener("mouseleave", () => {
    cursor.classList.remove("hoverCursor")
})


heroWorkButton.addEventListener("mouseover", () => {
    heroButtonArrow.classList.add("rotatedArrowOfWork")
})


heroWorkButton.addEventListener("mouseleave", () => {
    heroButtonArrow.classList.remove("rotatedArrowOfWork")
})



heroWorkButton.addEventListener("mouseover", () => {
    heroWorkButtonBackground.classList.add("workBackgroundOnHover")
})


heroWorkButton.addEventListener("mouseleave", () => {
    heroWorkButtonBackground.classList.remove("workBackgroundOnHover")
})

mouse.addEventListener("mouseover", () => {
    cursor.classList.add("hoverCursor")
})


mouse.addEventListener("mouseleave", () => {
    cursor.classList.remove("hoverCursor")
})


