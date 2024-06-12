const userNameInput = document.getElementById('username');
const productInput = document.getElementById('product');
const reviewInput = document.getElementById('review');
const reviewForm = document.getElementById('review-form');

// posts the review data to the server. create a new review.
/**
 * @param {Object} review
 */
const postReview = (review) =>
  // Javascript object representing the review data.
  fetch('/api/reviews', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // need to convert to a string because fetch needs a string and not a javascript object
    body: JSON.stringify(review),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Successful POST request:', data);
      return data;
    })
    // catch any error, then log it to the console
    .catch((error) => {
      console.error('Error in POST request:', error);
    });

// Listen for when the form is submitted
/**
 * @param {SubmitEvent} e
 */
reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Create a new review object from the input values
  const newReview = {
    username: userNameInput.value.trim(),
    product: productInput.value.trim(),
    review: reviewInput.value.trim(),
  };

  // Call our `postReview` method to make a POST request with our `newReview` object.
  postReview(newReview)
    .then((data) => alert(`Review added! Review ID: ${data.body.review_id}`))
    .catch((err) => console.error(err));
});
