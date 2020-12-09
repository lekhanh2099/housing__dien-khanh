// Slide
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Header 

window.addEventListener('scroll', function () {
  var headerScoll = document.querySelector('header');
  headerScoll.classList.toggle('sticky', window.scrollY > 76); // margin-top banner == 76px
})

// Modal


// Get modal element
var modal = document.getElementById('simple__modal');
// Get open modal button
var modalBtn = document.getElementById('modal__btn');
// Get close button
var closeBtn = document.getElementsByClassName('close__btn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);

// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for ouside click
window.addEventListener('click', clickOutSide);


// Function open modal
function openModal() {
    modal.style.display = 'block';
}
// Function close modal
function closeModal() {
    modal.style.display = 'none';
}
// Function to close modal if outside click
function clickOutSide(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

