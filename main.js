//ACCORDION

var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        this.classList.toggle('active');

        var icon = this.childNodes[1].childNodes[3];
        icon.classList.toggle('rotate-icon');

        // console.log(this.childNodes[1].childNodes[3]);

        var panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
}

//COUNTDOWN TIMER

let sec = 1800;
let count = document.getElementById('timer');
let text = document.getElementById('text-timer');
let secPass;
let countDown = setInterval(() => {
    'use strict';
    secpass();
}, 1000);

function secpass() {
    'use strict';

    let min = Math.floor(sec / 60),
        remSec = sec % 60;

    if (remSec < 10) {
        remSec = '0' + remSec;
    }
    if (min < 10) {
        min = '0' + min;
    }
    count.innerHTML = min + ':' + remSec;

    if (sec > 0) {
        sec = sec - 1;
    } else {
        clearInterval(countDown);

        count.innerHTML = 'AKCIJA ZAVRŠILA';
        text.style.display = 'none';
    }
}

// SMOOTH SCROLL
$(document).ready(function () {
    $('a').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                    window.location.hash = hash;
                }
            );
        }
    });
});

// POTVRDA PLAĆANJA

let formTitle = document.querySelector('#title-form');

function submitHandler() {
    document.querySelector('#title-form').innerText = '';
    return false;
}

// MOBILNA NAVIGACIJA

const mobileMenuIcon = document.querySelector('.btn-mobile-nav');

const navbar = document.querySelector('.navbar');

const navbarItem = document.getElementsByClassName('nav-item');

mobileMenuIcon.addEventListener('click', function () {
    navbar.classList.toggle('nav-open');
});

for (i = 0; i < navbarItem.length; i++) {
    navbarItem[i].addEventListener('click', function () {
        navbar.classList.remove('nav-open');
    });
}

// COUNTER SECTION INCREMENT

// const counters = document.querySelectorAll('.counter-num');

// counters.forEach((counter) => {
//     counter.innerText = '0';

//     const updateCounter = () => {
//         const target = +counter.getAttribute('data-target');
//         const c = +counter.innerText;

//         const increment = target / 200;

//         if (c < target) {
//             counter.innerText = `${Math.ceil(c + increment)}`;
//             setTimeout(updateCounter, 25);
//         } else {
//             counter.innerText = target;
//         }
//     };

//     updateCounter();
// });

// TESTIMONIAL SLIDER

const wrapper = document.querySelector('.wrapper');
const indicators = document.querySelectorAll('.indicator button');

let currentTestimonial = 0;

const cards = Array.from(document.querySelectorAll('.review-item.card'));

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationId = 0;

cards.forEach((card, index) => {
    //Touch
    card.addEventListener('touchstart', touchStart(index));
    card.addEventListener('touchend', touchEnd);
    card.addEventListener('touchmove', touchMove);
});

function touchStart(index) {
    return function (event) {
        startPos = event.touches[0].clientX;
        isDragging = true;
        animationId = requestAnimationFrame(animation);
    };
}

function animation() {
    wrapper.style.marginLeft = `-${100 * currentTestimonial}%`;

    if (isDragging) requestAnimationFrame(animation);
}

function touchEnd() {
    isDragging = false;
    cancelAnimationFrame(animationId);

    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -20 && currentTestimonial < cards.length - 1) {
        currentTestimonial += 1;
        indicators[currentTestimonial - 1].classList.remove('active-btn');
        indicators[currentTestimonial].classList.add('active-btn');
    }
    if (movedBy > 20 && currentTestimonial > 0) {
        currentTestimonial -= 1;
        indicators[currentTestimonial + 1].classList.remove('active-btn');
        indicators[currentTestimonial].classList.add('active-btn');
    }
    setPositionByIndex();
}

function touchMove(event) {
    if (isDragging) {
        const currentPosition = event.touches[0].clientX;
        currentTranslate = prevTranslate + currentPosition - startPos;
    }
}

function setPositionByIndex() {
    currentTranslate = currentTestimonial * -window.innerWidth;
    prevTranslate = currentTranslate;

    wrapper.style.marginLeft = `-${100 * currentTestimonial}%`;
}

indicators.forEach((item, i) => {
    item.addEventListener('click', () => {
        indicators[currentTestimonial].classList.remove('active-btn');
        wrapper.style.marginLeft = `-${100 * i}%`;
        item.classList.add('active-btn');
        currentTestimonial = i;
    });
});

// SPINNIG WHEEL

function spinWheel() {
    const box = document.querySelector('#box');
    const mainbox = document.querySelector('#mainbox');
    const message = document.querySelector('#message');
    const fireworks = document.querySelector('.fireworks');

    const x = 1024;
    const y = 5000;

    const deg = Math.floor(Math.random() * (x - y) + y);

    // box.style.transform = 'rotate(' + deg + 'deg)';

    box.style.transform = 'rotate(9270deg)';

    // mainbox.classList.remove('animate');
    mainbox.classList.add('animate');
    setTimeout(function () {
        message.classList.add('message-animation');
        fireworks.classList.add('display');
    }, 8100);

    setTimeout(function () {
        fireworks.classList.remove('display');
    }, 11200);
}

// BUYERS NOTIFICATION

const buyers = document.getElementById('buyer');

const buyerSlider = [
    {
        name: 'Sanjin',
        komada: 1,
        grad: 'Srebrenik',
        kupiti: 'Kupio',
        vrijeme: 'Upravo sada',
    },
    {
        name: 'Suada',
        komada: 2,
        grad: 'Tuzla',
        kupiti: 'Kupila',
        vrijeme: 'Prije 20 sekundi',
    },
    {
        name: 'Fadila',
        komada: 2,
        grad: 'Visoko',
        kupiti: 'Kupila',
        vrijeme: 'Prije 10 sekundi',
    },
    {
        name: 'Zoran',
        komada: 1,
        grad: 'Zvornik',
        kupiti: 'Kupio',
        vrijeme: 'Prije 40 sekundi',
    },
];

let ind = 0;
const len = buyerSlider.length;

setInterval(function () {
    buyers.style.transform = 'translateX(0)';
    buyers.classList.remove('transparent');

    buyers.innerHTML = `<div class="cont">
                <div class="image">
                    <i class="far fa-thumbs-up"></i>
                </div> 
                <div class="buyers-box">
                <div class="name">${buyerSlider[ind].name} <span>, ${
        buyerSlider[ind].grad
    }</span></div>
                <div class="desc">${buyerSlider[ind].kupiti} ${
        buyerSlider[ind].komada
    } ${buyerSlider[ind].komada == 1 ? 'kutiju' : 'kutije'} Natura Active</div>
                <small>${buyerSlider[ind].vrijeme}</small>
                </div>
                <div class="image">
                            <img
            src="assets/hero-image-removebg-preview.png"
            alt=""
          />
                        </div>
            </div>`;

    if (ind < len) {
        ind++;
    } else {
        ind = 1;
    }
}, 8000);

setInterval(function () {
    buyers.classList.add('transparent');
    buyers.style.transform = 'translateX(-200%)';
    ind--;
}, 16000);
