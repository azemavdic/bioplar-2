//ACCORDION

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var icon = this.childNodes[1].childNodes[3];
    icon.classList.toggle("rotate-icon");

    // console.log(this.childNodes[1].childNodes[3]);

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//COUNTDOWN TIMER

let sec = 1800;
let count = document.getElementById("timer");
let text = document.getElementById("text-timer");
let secPass;
let countDown = setInterval(() => {
  "use strict";
  secpass();
}, 1000);

function secpass() {
  "use strict";

  let min = Math.floor(sec / 60),
    remSec = sec % 60;

  if (remSec < 10) {
    remSec = "0" + remSec;
  }
  if (min < 10) {
    min = "0" + min;
  }
  count.innerHTML = min + ":" + remSec;

  if (sec > 0) {
    sec = sec - 1;
  } else {
    clearInterval(countDown);

    count.innerHTML = "AKCIJA ZAVRŠILA";
    text.style.display = "none";
  }
}

// SMOOTH SCROLL
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
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

let formTitle = document.querySelector("#title-form");

function submitHandler() {
  document.querySelector("#title-form").innerText = "";
  return false;
}

// MOBILNA NAVIGACIJA

const mobileMenuIcon = document.querySelector(".btn-mobile-nav");

const navbar = document.querySelector(".navbar");

const navbarItem = document.getElementsByClassName("nav-item");

mobileMenuIcon.addEventListener("click", function () {
  navbar.classList.toggle("nav-open");
});

for (i = 0; i < navbarItem.length; i++) {
  navbarItem[i].addEventListener("click", function () {
    navbar.classList.remove("nav-open");
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

const wrapper = document.querySelector(".wrapper");
const indicators = document.querySelectorAll(".indicator button");

let currentTestimonial = 0;

indicators.forEach((item, i) => {
  item.addEventListener("click", () => {
    indicators[currentTestimonial].classList.remove("active-btn");
    wrapper.style.marginLeft = `-${100 * i}%`;
    item.classList.add("active-btn");
    currentTestimonial = i;
  });
});
