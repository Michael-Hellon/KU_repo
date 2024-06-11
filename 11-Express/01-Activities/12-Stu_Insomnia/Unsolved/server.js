const express = require('express');
// TODO: Require the json file located in `/db`
// Require the json file located in `/db`
const data = require('./db/repos.json');

// TODO: Create an `app` variable set to the value of `express()`
// Create an `app` variable set to the value of `express()`
const app = express();

app.get('/', (req, res) => {
  res.send(
  );
});

// TODO: Create a GET route for `/api` that will return the content of our json file
// Create a GET route for `/api` that will return the content of our json file
app.get('/api', (req, res) => res.json(data));

// TODO: Have the app listen on port 3001
// Have the app listen on port 3001
app.listen(3001, () => console.log(`Listening at http://localhost:3001`));
