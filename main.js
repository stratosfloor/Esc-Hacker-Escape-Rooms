console.log('JS-file LOADED');

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navmenu');
const closeBtn = document.querySelector('.closeBtn');
const header = document.querySelector('.header');
const hero = document.querySelector('.hero');
const testimonial = document.querySelector('.testimonials');
const popularChallenges = document.querySelector('.popular-challanges');
const story = document.querySelector('.story');
const playGrid = document.querySelector('.play-grid');
const footer = document.querySelector('.footer');




hamburger.addEventListener('click',toggleMenu);
closeBtn.addEventListener('click', toggleMenu);



function toggleMenu (){
    navMenu.classList.toggle('active');
    header.classList.toggle('background-state');
    hero.classList.toggle('background-state');
    testimonial.classList.toggle('background-state');

    popularChallenges.classList.toggle('background-state');
    story.classList.toggle('background-state');
    playGrid.classList.toggle('background-state');
    footer.classList.toggle('background-state');

}