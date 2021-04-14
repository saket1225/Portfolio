var preloader = document.querySelector(".preloader");
var website = document.querySelector(".website");
var html = document.querySelector("html")
let navMenu = document.querySelector(".navMenu")

preloaderVar = setTimeout(preloaderFunc, 2700);

function preloaderFunc() {
    preloader.style.display = "none";
    website.style.display = "block";
    html.style.backgroundColor = "#02011e"
    html.style.overflowY = "scroll"
    html.style.overflowX = "none"
}

let questionElement = document.querySelector(".questionPre")
var question = ['What is your brand story?', 'I give a 100/100 on every project', 'Saket was born on 12/01/yyyy.', 'Saket lives in India.', 'This website was redesigned almost 5 times']


randomQuestion =  question[Math.floor(Math.random() * question.length)];
questionElement.innerHTML = randomQuestion

