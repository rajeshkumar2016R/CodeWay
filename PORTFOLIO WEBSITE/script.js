var typed = new Typed('.typing', {
    strings: ["Web Developer.", 'UI Designer.', 'Web Design.'],
    typeSpeed: 100,
    backspeed: 100,
    loop: true,
  })

let menu = document.getElementById('menu');

menu.addEventListener("click", function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle("fa-xmark");
})

const daynight = document.querySelector('.day-night');
daynight.addEventListener("click", () => {
    daynight.querySelector("i").classList.toggle("fa-sun");
    daynight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains('dark')){
        daynight.querySelector("i").classList.add("fa-sun");
    }
    else{
        daynight.querySelector("i").classList.add("fa-moon");
    }
})