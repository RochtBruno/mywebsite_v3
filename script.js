"use strict";

// menu animation
const ul = document.querySelector("ul");
const hamburguer = document.getElementById("hamburguer");
hamburguer.addEventListener("click", function () {
  ul.classList.toggle("hidden");
});
//portfolio slides
const slides = document.querySelectorAll(".portfolio__box");
const btnLeft = document.querySelector(".arrow__left");
const btnRight = document.querySelector(".arrow__right");
const slider = document.querySelector(".portfolio__box--wraper");
let curSlide = 0;
const maxSlides = slides.length - 1;

const goToSlide = function (slide) {
  slides.forEach((s, index) => {
    s.style.transform = `translateX(${100 * (index - slide)}%)`;
  });
};
goToSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlides) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};
const previousSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlides;
  } else {
    curSlide--;
  }

  goToSlide(curSlide);
};
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", previousSlide);

//reveal sections
window.addEventListener("scroll", reveal);
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 120;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
///////////////////////////////////////
//scroll up
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) scrollUp.classList.add("show__scroll");
  else scrollUp.classList.remove("show__scroll");
}
window.addEventListener("scroll", scrollUp);
