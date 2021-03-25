var preloader = document.querySelector(".preloader");
var website = document.querySelector(".website");


window.addEventListener('load', () => {
    preloader.style.display = "none";
    website.style.display = "flex";
})


var hamburger = document.querySelector(".hamburgerMenu");
var rectangle1 = document.querySelector(".rectangle1");
var rectangle2 = document.querySelector(".rectangle2");
var rectangle3 = document.querySelector(".rectangle3");

var menu = document.querySelector(".navMenu")

var hamburgerOpenClass = false;

var toggler = document.querySelector(".toggler")


hamburger.addEventListener('click' , () => {

    if (hamburgerOpenClass == false){
        rectangle1.classList.add('menuOpen1')
        rectangle2.classList.add('menuOpen2')
        rectangle3.classList.add('menuOpen3')
        hamburger.classList.add('menuOpen')

        toggler.style.left = "49vw"

        menu.style.display = "flex";
        hamburgerOpenClass = true;
    }


    else{
        rectangle1.classList.remove('menuOpen1')
        rectangle2.classList.remove('menuOpen2')
        rectangle3.classList.remove('menuOpen3')
        hamburger.classList.remove('menuOpen')

        toggler.style.left = "85vw"

        menu.style.display = "none";
        hamburgerOpenClass = false;
    }
})


var button = document.querySelector(".button")

var light = false;


toggler.addEventListener('click', () => {
    if (light == false){
        button.classList.add('dayMode')
        toggler.classList.add('togglerMoon')
        light = true;
    }

    else if (light == true){
        button.classList.remove('dayMode')
        toggler.classList.remove('togglerMoon')
        light = false;
    }

})
