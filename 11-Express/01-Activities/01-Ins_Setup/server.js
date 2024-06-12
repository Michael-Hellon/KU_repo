const express = require('express');
const path = require('path');

const app = express();
const port = 3001;

app.use(express.static("public"));

app.get('/', (req, res) => res.send('Navigate to /send or /routes'));
app.get('/asdf', (req, res) => res.send('asdfasdfa'));
app.get('/send', (req, res) => res.sendFile(path.join(__dirname, 'public/sendFile.html')));
app.get('/routes', (req, res) => res.sendFile(path.join(__dirname, 'public/routes.html')));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
