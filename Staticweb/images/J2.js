var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; // Index of the first image
const interval = 3000; // Duration (speed) of the slide

function changeSlide(n) {
  // Reset all images and dots
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].style.opacity = 0;
    dots[i].className = dots[i].className.replace('active', '');
  }

  // Updates the current image index and activate corresponding elements
  currentImg = n !== undefined ? n : (currentImg + 1) % imgs.length;

  imgs[currentImg].style.opacity = 1;
  dots[currentImg].className += ' active';
}

// Changes the images automatically
var timer = setInterval(() => changeSlide(), interval);

// Function to change slides manually
function manualSlide(n) {
  clearInterval(timer);
  changeSlide(n);
  timer = setInterval(() => changeSlide(), interval);
}

// Initial call to display the first image
changeSlide(currentImg);
