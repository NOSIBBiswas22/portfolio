/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')


/*===== changing the menu icon on clik =====*/
function changeMenuBtn(){
    const menu = document.getElementById('menu_btn');
    menu.classList.toggle('bx-x')
}



/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL UP BTN FUNCTION =====*/
$(window).scroll(function(){
    
    // scroll-up button show/hide script
    if(this.scrollY > 500){
        $('.scroll-up-btn').addClass("show");
    }else{
        $('.scroll-up-btn').removeClass("show");
    }
});

// slide-up script
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
    $('html').style("scrollBehavior", "auto");
});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    reset: false
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', {interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {interval:60})
sr.reveal('.contact__icon', {interval: 100}, {delay:50})
sr.reveal('.contact__text', {interval: 100})
sr.reveal('.contact__name', {interval: 100})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})

// typing text animation script
var typed = new Typed(".typing", {
    strings: ["Full Stack Web Developer.", " UI/UX Designer.",  " Graphics Designer.", "Freelancer."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
// suggestion: ["Full Stack Web Developer.", "Freelancer.", " Software Developer.", "Ethical Hacker.", " Graphics Designer."]

// about button toggle function

function toggle__about__Btn() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("about__more");
    var btnText = document.getElementById("about__Btn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
// contact form save to googel sheets

const scriptURL = 'https://script.google.com/macros/s/AKfycbzSegIs36pW0dWnETu0qRJZw59VljRS5gAaUXWgH_oyqpNbeam20csz6y9K4ebdlBgqug/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})

//   adding auto copy function

//changing the inner html of the span with "footer_year" id to the given year(2021)

function getCurrentYear() {
    return new Date().getFullYear(); // returns the year via local timing
  }
  
  document.getElementById("footer_year").innerHTML = getCurrentYear();
