const imageContainer = document.querySelector('.img-container');

// Listen for any clicks within the img-container div
imageContainer.addEventListener('click', function (event) {
  const element = event.target; //gives you the exact object you clicked on

  // Check if the clicked element was an image
  if (element.matches('img')) { // only care about images
    // Get the current value of the image's data-state attribute
    const state = element.getAttribute('data-state'); // encode our elements so we can determine our current element

    if (state === 'still') {
      // Change the data-state attribute's value
      // There are two different ways this attribute can be set
      element.dataset.state = 'animate';
      element.setAttribute('data-state', 'animate');

      // Update the image's source to the string being stored in the data-animate attribute
      element.setAttribute('src', element.dataset.animate);
    } else {
      // Change the attributes back to their non-animated values
      element.dataset.state = 'still';
      element.setAttribute('src', element.dataset.still);
    }
  }
});
