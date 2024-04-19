// TODO: Which element is the following line of code selecting?
  // class="carouselbox"
const carousel = document.querySelector('.carouselbox');
// TODO: Which element is the following line of code selecting?
const next = carousel.querySelector('.next'); // class next
const prev = carousel.querySelector('.prev'); // class prev
let index = 0;
let currentImage;

const images = [
  'https://picsum.photos/id/10/300/200',
  'https://picsum.photos/id/20/300/201',
  'https://picsum.photos/id/30/300/202',
  'https://picsum.photos/id/47/300/203',
];

carousel.style.backgroundImage = "url('https://picsum.photos/id/10/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) {
    index = images.length - 1;
  } else if (index > images.length - 1) {
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = `url('${currentImage}')`;
}

// TODO: Describe the functionality of the following event listener.
  // this causes the picture picture to be viewed outside the carousel box
carousel.addEventListener('click', function () {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
  // this goes to the next picture when you click next 
next.addEventListener('click', function (event) {
  // TODO: What is the purpose of the following line of code?
    // this prevents the next picture ' Click on the image to view' when you press next
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
  // this goes to the previous pics when clicked
prev.addEventListener('click', function (event) {
  // TODO: What would happen if we didn't add the following line of code?
     // this prevents the prev ' Click on the image to view'
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
