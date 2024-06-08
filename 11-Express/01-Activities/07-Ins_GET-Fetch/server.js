// backend
const express = require('express');
const path = require('path');
const termData = require('./db/terms.json');
const PORT = 3001;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/terms', (req, res) => res.json(termData));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

/* 
click on http://localhost:3001, then open dev tools. then network and click the "all" button.
then under the "name" bar on the left click on "terms". click on the response tab and it will
show you the JSON object that was returned.
This is a good way for debugging. If something is wrong, there may be something wrong with the 
rendering, or the data. is it a front end problem or back end problem?
*/