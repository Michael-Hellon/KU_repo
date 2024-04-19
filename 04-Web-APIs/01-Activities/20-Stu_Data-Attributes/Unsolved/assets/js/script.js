const container = document.querySelector('.container');

container.addEventListener('click', function (event) {
  const element = event.target;

  
  if (element.matches('.box')) { 
    let state = element.getAttribute('data-state');
    
    if (state === 'hidden') {
      element.textContent = element.dataset.number;
      element.dataset.state = 'visible';
    } else {
      element.textContent = '';
      element.setAttributes('data-state', 'hidden')
    }
    }

});
