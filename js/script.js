// Hamburger toggle
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

// Slider
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 2000);

// Create dots
slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if(i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    goToSlide(i);
    resetInterval();
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function goToSlide(n){
  slides.forEach((slide, index) => {
    slide.style.opacity = index === n ? '1' : '0';
    slide.style.position = index === n ? 'relative' : 'absolute';
  });
  dots.forEach(dot => dot.classList.remove('active'));
  dots[n].classList.add('active');
  currentSlide = n;
}

function nextSlide(){
  let next = (currentSlide + 1) % slides.length;
  goToSlide(next);
}

function resetInterval(){
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 2000);
}

// Initialize
goToSlide(0);
