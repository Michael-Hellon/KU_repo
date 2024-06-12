const express = require('express');
// Helper function to sort our data in ascending and descending order
const { sortData } = require('./sortData');
const termData = require('./terms.json');

const PORT = 3001;

const app = express();

const sortHelper = (type) =>
  termData.sort(sortData('term', 'relevance', `${type}`));

// Add a comment describing the functionality of this route

// GET route that returns all of the terms either sorted or not sorted (depending on if a query is added).
app.get('/api/terms/', (req, res) => {
  // Add a comment describing the req.query object
  // Checks to see if we have a query parameter.
  const hasQuery = Object.keys(req.query).length > 0;

  // sort descending
  if (hasQuery && req.query.sort === 'dsc') {
    return res.json(sortHelper('dsc'));
  }

  // sort ascending 
  if (hasQuery && req.query.sort === 'asc') {
    return res.json(sortHelper('asc'));
  }

  // If there is no query parameter, return terms
  return res.json(termData);
});

// Add a comment describing what this route will return
// return the term if it exists in the array of termdata otherwise return a json for no term found.
app.get('/api/term/:term', (req, res) => {
  // Add a comment describing the content of req.params in this instance

  // pulling out the parameter for the term we are searching for
  const requestedTerm = req.params.term.toLowerCase();

  for (let i = 0; i < termData.length; i++) {
    if (requestedTerm === termData[i].term.toLowerCase()) {
      return res.json(termData[i]);
    }
  }

  // Return a message if the term doesn't exist in our DB
  return res.json('No term found');
});

// Add a comment describing what this route will return
// return the category if it exists in the array of categorydata otherwise return a json for no category found.
app.get('/api/terms/:category', (req, res) => {
  const requestedCategory = req.params.category.toLowerCase();
  const result = [];

  for (let i = 0; i < termData.length; i++) {
    const currentTermCategory = termData[i].category;
    if (requestedCategory === currentTermCategory) {
      result.push(termData[i]);
    }
  }
  return res.json(result);
});

// Add a comment describing what this route will return
// return all of category if it exists in the array of categorydata otherwise return a json for no category found.
app.get('/api/categories', (req, res) => {
  const categories = termData.map((term) => term.category);

  // filtering out if the category exists
  const result = categories.filter((cat, i) => categories.indexOf(cat) === i);

  // return the result as json back to the frontend.
  return res.json(result);
});

app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT}`)
);
