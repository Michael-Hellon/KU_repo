const outer = document.querySelector('.outer-div');
const inner = document.querySelector('.inner-div');
const button = document.querySelector('.button');

function changeBlue(event) {
  event.stopPropagation(); // this is what stops propagation
  event.currentTarget.setAttribute('style', 'background-color: chartreuse');
}

function changePurple(event) {
  event.stopPropagation(); // this is what stops propagation
  event.currentTarget.setAttribute('style', 'background-color: #601A4A');
}

function changeOrange(event) {
  event.stopPropagation(); // this is what stops propagation
  event.currentTarget.setAttribute(
    'style',
    'background-color: #EE442F; color: white;'
  );
}

outer.addEventListener('click', changePurple);
inner.addEventListener('click', changeOrange);
button.addEventListener('click', changeBlue);
