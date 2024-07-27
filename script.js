let text = document.getElementById("text");
let ocean = document.getElementById("ocean");
let grass = document.getElementById("grass");
let flowerr = document.getElementById("flowerright");
let flowerl = document.getElementById("flowerleft");
let garden = document.getElementById("garden");


window.addEventListener('scroll', () => {
    let value = window.scrollY;
    grass.style.bottom =  value + -1.5 + 'px';
    garden.style.top = value + -1.5 + 'px';
    ocean.style.top =  value + -1.5 + 'px';
    
    flowerr.style.left = value + 1.5 + 'px';
    flowerl.style.left = value - 1.5 + 'px';
    text.style.marginTop = value + 2.5 + 'px';

});
