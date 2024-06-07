const express = require('express');

const PORT = 3001;

const app = express();

// TODO: Create a GET method for `/api/reviews` that logs when a user's request has been received
app.get('/api/reviews', (req, res) => {
  const msg = `${req.method} request received to get reviews` 
  res.json(msg)
});

// TODO: Create a POST request for `/api/reviews` that logs when a user's request has been received
// Your code here
app.post('/api/reviews', (req, res) => {
  const msg = `${req.method} request received to get reviews` 
  res.json(msg)
  console.log(msg);
});

// TODO: Create a GET request for `api/upvotes` that logs when a user's request has been received
app.get('/api/upvotes', (req, res) => {
  const msg = `${req.method} request received to get reviews` 
  res.json(msg)
  console.log(msg)
});

// TODO: Create a POST request for `api/upvotes` that logs when a user's request has been received
app.post('/api/reviews', (req, res) => {
  const msg = `${req.method} request received to get reviews` 
  res.json(msg)
  console.log(msg);
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
