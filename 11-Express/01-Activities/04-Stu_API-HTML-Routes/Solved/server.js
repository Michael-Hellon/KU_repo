// Import express
const express = require('express');

// Import 'terms.json' file
const termData = require('./terms.json');
const PORT = 3001;

// Initialize app variable
const app = express();

// Create a route for a GET request that will return the content of our `terms.json` file
app.get('/api', (req, res) => res.json(termData));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
