var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0;
const interval = 3000;

function changeSlide(n) {
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].style.opacity = 0;
    dots[i].className = dots[i].className.replace('active', '');
  }

  currentImg = n !== undefined ? n : (currentImg + 1) % imgs.length;
  imgs[currentImg].style.opacity = 1;
  dots[currentImg].className += ' active';
}

function manualSlide(n) {
  clearInterval(timer);
  changeSlide(n);
  timer = setInterval(() => changeSlide(), interval);
}

var timer = setInterval(() => changeSlide(), interval);
changeSlide(currentImg);