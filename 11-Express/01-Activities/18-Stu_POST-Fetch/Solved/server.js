const express = require('express');
const path = require('path');
// Helper method for generating unique ids
const uuid = require('./helpers/uuid');
const reviews = require('./db/reviews');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET request for reviews
app.get('/api/reviews', (req, res) => {
  console.info(`GET /api/reviews`);
  res.status(200).json(reviews);
});

// GET request for a single review
app.get('/api/reviews/:review_id', (req, res) => {
  const { review_id } = req.params;

  if(!review_id) {
    return res.status(400).send('Review ID not found!');
  }

  console.info(`${req.method} request received to get a single review`);

  const review = reviews.find((rev) => rev.review_id == review_id);

  if(!review) {
    return res.status(404).json("Review not found!")
  }; 

  res.status(200).json(review);
});

// POST request to add a review
app.post('/api/reviews', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a review`);

  // destructing the body into the product, review, and username variables.
  const { product, review, username } = req.body;

  // Make sure that we dont create objects with null values.
  if (product && review && username) {
    // Variable for the object we will save
    const newReview = {
      product,
      review,
      username,
      upvotes: Math.floor(Math.random() * 100),
      review_id: uuid(),
    };

    const response = {
      status: 'success',
      body: newReview,
    };

    console.log(response);

    // We are sending the response json and the created status code.
    res.status(201).json(response);
  } else {
    // We are sending an error to the front end, json object the internal server error status code.
    res.status(500).json('Error in posting review');
  }
});

// GET request for a specific review's upvotes
app.get('/api/upvotes/:review_id', (req, res) => {
  const { review_id } = req.params;
  
  if (!review_id) {
    return res.status(400).send('Review ID not found!');
  };

  console.info(`${req.method} request received to get upvotes for a review`);

  const review = reviews.find((rev) => rev.review_id == review_id);

  if(!review) {
    return res.status(404).json("Review not found!")
  }; 

  res.json({
    message: `The review with ID ${review.review_id} has ${review.upvotes}`,
    upvotes: review.upvotes
  });
});

// POST request to upvote a review
app.post('/api/upvotes/:review_id', (req, res) => {
  const { review_id } = req.params;
  const { upvote } = req.body;

  if(upvote === undefined) {
    return res.status(400).json('Provide a req.body with upvote!');
  };

  const review = reviews.find((rev) => rev.review_id == review_id);

  if(!review) {
    return res.status(404).json("Review not found!")
  }; 

  console.info(`${req.method} request received to upvote a review!`);

  review.upvotes++;

  res.json(`New upvote count is ${review.upvotes}!`);
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
