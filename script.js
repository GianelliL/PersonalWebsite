let text = document.getElementById("text")
let ocean = document.getElementsById("ocean");
let grass = document.getElementsById("grass");
let flowerR = document.getElementsById("flowerR");
let flowerL = document.getElementsById("flowerL");
let sky = document.getElementsById("sky");
let garden = document.getElementsById("garden");


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';

    flowerR.style.left = value * -1.5 + "px";
    flowerL.style.left= value * 1.5 + 'px';
    ocean.style.top =  value * -1.5 + 'px'

});